import * as React from "react";

type FormResult = {
  fieldName: string;
  valid: boolean;
  value: any;
  data: Object;
  dataOrigin: Object;
};

declare class FormStore {
  forms: Array<FormStore>;
  _value: any;
  _labelStyle: React.CSSProperties;
  _containerStyle: React.CSSProperties;
  errorMessage: string;

  top: typeof FormStore;
  parent: typeof FormStore;
  isEmpty: boolean;
  labelStyle: React.CSSProperties;
  containerStyle: React.CSSProperties;
  isRequired: boolean;
  value: any;
  errors: Array<string>;
  isFormValid: boolean;
  setupForm(): void;
  tearDownForm(): void;
  updateFormConfig(): void;
  changeValue(value: any): void;
  findFormByFieldName(name: string): typeof FormStore | null;
  $(name: string): typeof FormStore | null;
  brother(name: string): typeof FormStore | null;
  resetValue(resetChildren?: boolean): void;
  validate(): boolean;
  getResult(): FormResult;
}

type FormRule = {};

type RootFormProps = {
  labelStyle: React.CSSProperties;
  onPressEnter(target: HTMLElement): void;
};

type RootFormState = {
  form: typeof FormStore;
};

type BoxFormProps = {
  fieldName: string;
  form: typeof FormStore;
  style: React.CSSProperties;
  containerStyle: React.CSSProperties;
  children: (form: typeof FormStore) => JSX.Element | JSX.Element;
};

type ConnectFormProps = {
  fieldName: string;
  initialValue: any;
  rules: Array<FormRule>;
  label: string | JSX.Element;
  labelStyle: React.CSSProperties;
  containerStyle: React.CSSProperties;
  children: (form: typeof FormStore) => JSX.Element | null;
  hint: string | number | JSX.Element;
  form: typeof FormStore;
};

declare class FormBox extends React.Component<BoxFormProps, RootFormState> {
  static defaultProps: {
    style: {};
    containerStyle: {};
  };
}

declare class Connect extends React.Component<ConnectFormProps, RootFormState> {
  static defaultProps: {
    rules: [];
    containerStyle: {};
  };
}

declare class Clear extends React.Component<
  {
    visible: boolean;
  },
  {}
> {
  static defaultProps: {
    size: 14;
    visible: true;
    title: "清除";
  };
}

export default class Form extends React.Component<RootFormProps, RootFormState> {
  static defaultProps: {
    labelStyle: {
      width: "30%";
      paddingRight: 10;
    };
  };

  static Box: FormBox;

  static Connect: Connect;

  static Clear: Clear;

  getForm(): typeof FormStore;
}