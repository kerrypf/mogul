import { observable, action, computed, toJS } from "mobx";
import invariant from "invariant";
// 不能使用 import Joi from "joi-browser" 方式导入 Joi, 因为 Joi 不是标准的写法. 故只能做这种妥协
const Joi = require("joi-browser");

const randomStr = () =>
  Math.random()
    .toString(36)
    .slice(4, 10);

const convertNumToStr = obj => (typeof obj === "number" ? "" + obj : obj);

const isFn = fn => typeof fn === "function";

const requiredCheck = value => !!value;

const maxLength = length => {
  const schema = Joi.string().max(length);
  return value => !schema.validate(convertNumToStr(value)).error;
};

const minLength = length => {
  const schema = Joi.string().min(length);
  return value => !schema.validate(convertNumToStr(value)).error;
};

const validCheck = (value, rule, form) => {
  if (!Array.isArray(rule)) throw new Error(`rule expect to be array`);

  switch (rule[0]) {
    case "required":
      return isFn(rule[1]) ? rule[1](value, form) : requiredCheck(value) ? true : rule[1];
    case "maxLength":
      let maxLengthNumber = Joi.number()
        .min(1)
        .validate(rule[1]).value;
      return maxLengthNumber ? (maxLength(maxLengthNumber)(value) ? true : rule[2]) : null;
    case "minLength":
      let minLengthNumber = Joi.number()
        .min(0)
        .validate(rule[1]).value;
      return minLengthNumber ? (minLength(minLengthNumber)(value) ? true : rule[2]) : null;
    default:
      return isFn(rule[0]) ? rule[0](value, form) : true;
  }
};

export default class FormStore {
  @observable forms = [];
  @observable _value = null;
  @observable _labelStyle = {};
  @observable _containerStyle = {};
  @observable errorMessage = null;
  @observable validating = false;

  isLayout = false;

  constructor(_, component, isLayout = false) {
    this.root = _;
    this.component = component;
    this.isLayout = _ ? isLayout : true;
    this.setupForm();
  }

  @computed
  get top() {
    if (!this.root) {
      return this;
    }

    return this.root.top;
  }

  @computed
  get parent() {
    return this.root;
  }

  @computed
  get isEmpty() {
    return this.forms.length === 0;
  }

  @computed
  get labelStyle() {
    if (!this.root) return this._labelStyle;
    return {
      ...this.root.labelStyle,
      ...this._labelStyle
    };
  }

  @computed
  get containerStyle() {
    if (!this.root) return this._containerStyle;
    return {
      ...this.root.containerStyle,
      ...this._containerStyle
    };
  }

  @computed
  get isRequired() {
    return !!this.component.props.rules.find(r => r[0] === "required");
  }

  @computed
  get value() {
    return toJS(this._value);
  }

  @computed
  get errors() {
    let errArr = [];
    if (this.errorMessage) {
      errArr.push(this.errorMessage);
    }
    this.forms.forEach(form => {
      errArr = [...errArr, ...form.errors];
    });

    return errArr;
  }

  @computed
  get isFormValid() {
    return !this.errorMessage && this.errors.length === 0;
  }

  @action.bound
  setupForm() {
    this.validateAsync.count = 0;
    if (this.root) {
      this.root.addForm(this);
    }
    if (this.component) {
      this.fieldName = this.component.props.fieldName || randomStr();
      this._value = this.component.props.initialValue;
      if (this.component.props.labelStyle) {
        this._labelStyle = this.component.props.labelStyle;
      }
      if (this.component.props.containerStyle) {
        this._containerStyle = this.component.props.containerStyle;
      }
    }
  }

  @action.bound
  updateFormConfig() {
    if (this.component) {
      if (this.component.props.labelStyle) {
        this._labelStyle = this.component.props.labelStyle;
      }
      if (this.component.props.containerStyle) {
        this._containerStyle = this.component.props.containerStyle;
      }
    }
  }

  @action.bound
  tearDownForm() {
    if (this.root) {
      this.root.removeForm(this);
    }
  }

  @action.bound
  addForm(form) {
    this.forms = [...this.forms, form];
  }

  @action.bound
  removeForm(form) {
    this.forms = this.forms.filter(f => f !== form);
  }

  @action.bound
  changeValue(_value) {
    this._value = _value;
    if (this.errorMessage) {
      this.validateAsync();
    }
    if (this.component) {
      if (this.component.props.onChange) {
        this.component.props.onChange(this.value, this);
      }
    }
  }

  @action.bound
  findFormByFieldName(name) {
    if (this.fieldName === name) return this;
    let targetForm = null;
    for (let i = 0; i < this.forms.length; i++) {
      targetForm = this.forms[i].findFormByFieldName(name);
      if (targetForm) {
        i = this.forms.length;
        return targetForm;
      }
    }
    return null;
  }

  @action.bound
  $(name) {
    return this.findFormByFieldName(name);
  }

  @action.bound
  resetValue(resetChildren) {
    if (this.component) {
      this._value = this.component.props.initialValue;

      if (typeof resetChildren === "boolean" && resetChildren) {
        this.forms.forEach(form => form.resetValue(true));
      }

      this.validateAsync();
    }
  }

  @action.bound
  validate() {
    let valid = true;
    //验证所有依赖
    for (let i = 0; i < this.forms.length; i++) {
      if (!this.forms[i].validate()) {
        valid = false;
      }
    }
    let rules = this.component.props.rules;
    if (rules && Array.isArray(rules)) {
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let result = validCheck(this.value, rule, this);
        invariant(
          !(result instanceof Promise),
          `Form Component : ${this.fieldName} 包含 async 验证, 请使用 validateAsync 方法`
        );

        if (result !== true) {
          this.errorMessage = result ? result : "规则不合法";
          valid = false;
          i = rules.length; //break loop
        } else {
          this.errorMessage = null;
        }
      }
    }
    return valid;
  }

  @action.bound
  async validateAsync() {
    let valid = true;
    this.setValidating(true);
    this.validateAsync.count = this.validateAsync.count + 1;
    let executeCount = this.validateAsync.count;
    //验证所有依赖
    for (let i = 0; i < this.forms.length; i++) {
      let result = null;
      try {
        result = await this.forms[i].validateAsync();
      } catch (e) {
        result = e instanceof Error ? e.message : e;
      }

      if (result !== true) {
        valid = false;
      }
    }
    let rules = this.component.props.rules;
    if (rules && Array.isArray(rules)) {
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let result = null;
        try {
          result = await validCheck(this.value, rule, this);
        } catch (e) {
          result = e instanceof Error ? e.message : e;
        }
        if (executeCount === this.validateAsync.count) {
          if (result !== true) {
            this.setErrorMessage(result ? result : "规则不合法");
            valid = false;
            i = rules.length; //break loop
          } else {
            this.setErrorMessage(null);
          }
        } else {
          valid = false;
          i = rules.length; //break loop
        }
      }
    }
    this.setValidating(false);

    return valid;
  }

  @action.bound
  setValidating(validating) {
    this.validating = validating;
  }

  @action.bound
  setErrorMessage(errorMessage) {
    this.errorMessage = errorMessage;
  }

  @action.bound
  getResult() {
    let data = {};
    let dataOrigin = this.forms.map(form => {
      let result = form.getResult();
      data[result.fieldName] = result;
      return result;
    });

    return {
      fieldName: this.fieldName,
      valid: this.isFormValid,
      value: this.value,
      data: data,
      dataOrigin: dataOrigin
    };
  }

  @action.bound
  getFormData() {
    if (!this.isLayout) {
      console.warn(`method: getFormData 只对 Form.Box 和 Form 有效`);

      return null;
    }

    let data = {};

    this.forms.forEach(form => {
      if (data.hasOwnProperty(form.fieldName)) {
        console.error(`already exist key ${form.fieldName} in ${this.fieldName}`);
      }
      data[form.fieldName] = form.isLayout ? form.getFormData() : form.value;
    });

    return data;
  }

  @action.bound
  brother(name) {
    if (!this.parent) return null;
    return this.parent.forms.find(form => form.fieldName === name);
  }
}
