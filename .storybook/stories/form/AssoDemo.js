import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, Item } from "../../../src";
import moment from "moment";

class Demo extends Component {
  validate = () => {
    const form = this.form

    console.log(form.validate(), form.errors, form.findFormByFieldName("simpleDemo").getResult());
  };

  state = {
    rangeOptions: [
      {
        label: "单个商品",
        value: "单个商品"
      },
      {
        label: "商品集合",
        value: "商品集合"
      },
      {
        label: "全场",
        value: "全场",
      }
    ]
  };

  changeRule = (ruleId) =>{
    this.setState({
      rangeOptions: [
        {
          label: "单个商品",
          value: "单个商品"
        },
        {
          label: "商品集合",
          value: "商品集合"
        },
        {
          label: "全场",
          value: "全场",
          disabled: !["换购","满减","折扣"].includes(ruleId)
        }
      ]
    })
  };

  render() {

    const { rangeOptions } = this.state;
    return (
      <div>
        hello<Button>Btn</Button>
        <Form onPressEnter={target => this.validate()} ref={form => form ? this.form = form.getForm() : null }>
          <Form.Box
            fieldName={ "simpleDemo" }
            style={{ width: 800 }}
            labelStyle={{ width: "100px" }}
            //            direction={"column"}
            wrap={ "wrap" }
            containerStyle={ {
              width: "100%"
            } }
          >
            <Form.FormSelect
              fieldName={ "rule" }
              label={ "促销规则" }
              placeholder={ "请选择促狭规则" }
              onChange={ this.changeRule }
              options={ [{
                label: "换购",
                value: "换购"
              },{
                label: "满减",
                value: "满减"
              },{
                label: "折扣",
                value: "折扣"
              },{
                label: "任选",
                value: "任选"
              },{
                label: "限购",
                value: "限购"
              }] }
            />

            <Form.FormRadioGroup
              label={ "生效范围" }
              fieldName={ "range" }
              rules={ [
                ["required", "生效范围必须"],
                [(val) => {
                  if (val === "全场") {
                    if (["换购","满减","折扣"].includes(this.form.findFormByFieldName("rule").getResult().value)
                    ) {
                      return `${ this.form.findFormByFieldName("rule").getResult().value } 不支持选择全场`
                    }

                  }
                  return true
                } ]
              ] }
              options={ rangeOptions }
              onChange={ (val) => {
                this.form.findFormByFieldName("time").validate();
              }  }
            />
            <Form.Connect
              fieldName={ "time" }
              label={ "请选择时间" }
              initialValue={ [moment(), null] }
              rules={ [
                ["required",(value) => value[0] && value[1] ? true : "时间必填" ]
              ] }
              containerStyle={ {
                width: "100%"
              } }
            >
              { (form) => {
                console.log(form.getResult());
                return <DatePicker.RangePicker
                  style={ { width: "100%" } }
                                    value={ form.value }
                  onChange={ (val) => form.changeValue(val)  } />
              } }
            </Form.Connect>
          </Form.Box>
        </Form>
        <Button onClick={this.validate}>验证</Button>
      </div>
    );
  }
}

export default Demo;