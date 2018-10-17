import * as React from "react";
import { ModalProps, ModalFuncProps } from "antd/lib/modal";
type overProps = string | "auto";

type flexProps = {
  flex?: "flex" | "inline-flex";
  direction: "column" | "row" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap";
  justifyContent?: "flex-start" | "center" | "flex-end" | "end";
  alignItems?: "stretch" | "flex-start" | "center" | "flex-end" | "end";
  alignContent?: "stretch" | "flex-start" | "center" | "flex-end" | "end";
  overflow?: overProps | false;
};

type itemProps = {
  order?: number;
  flex?: number;
  grow?: number;
  shrink: number;
  basis: "auto";
  alignSelf: "auto";
  overflow: overProps | false;
};

export function flex(props?: flexProps): string;

export function item(props?: itemProps): string;

export class Item extends React.Component<itemProps> {
  static defaultProps: {
    order: 0;
    grow: 0;
    shrink: 1;
    basis: "auto";
    alignSelf: "auto";
    overflow: false;
  };
}

export class Flex extends React.Component<flexProps> {
  static defaultProps: {
    flex: "flex";
    direction: "row";
    wrap: "nowrap";
    justifyContent: "flex-start";
    alignItems: "stretch";
    alignContent: "stretch";
    overflow: false;
  };
}

export function randomStr(length?: number): string;

export function deepEqual(a: any, b: any): boolean;

export interface IDecorator {
  // <A1, R, T extends (a1: A1) => R>(fn: T): T;
  // <A1, A2, R, T extends (a1: A1, a2: A2) => R>(fn: T): T;
  // <A1, A2, A3, R, T extends (a1: A1, a2: A2, a3: A3) => R>(fn: T): T;
  // <A1, A2, A3, A4, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4) => R>(fn: T): T;
  // <A1, A2, A3, A4, A5, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R>(fn: T): T;
  // <A1, A2, A3, A4, A5, A6, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4, a6: A6) => R>(fn: T): T;
  // <A1, R, T extends (a1: A1) => R>(name: string, fn: T): T;
  // <A1, A2, R, T extends (a1: A1, a2: A2) => R>(name: string, fn: T): T;
  // <A1, A2, A3, R, T extends (a1: A1, a2: A2, a3: A3) => R>(name: string, fn: T): T;
  // <A1, A2, A3, A4, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4) => R>(name: string, fn: T): T;
  // <A1, A2, A3, A4, A5, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R>(name: string, fn: T): T;
  // <A1, A2, A3, A4, A5, A6, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4, a6: A6) => R>(name: string, fn: T): T;
  // <T extends Function>(fn: T): T;
  // <T extends Function>(name: string, fn: T): T;
  (customName: string): (
    target: Object,
    key: string | symbol,
    baseDescriptor?: PropertyDescriptor
  ) => void;
  (target: Object, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void;
}

export declare const onlyOneReq: IDecorator;

export declare const portal: IDecorator;

export declare const lastReq: IDecorator;

export declare const createProvider: IDecorator;

type MemorizeProps = {
  children: Function;
  defaultValue?: any;
  id: string;
  version: number;
};

export class Memorize extends React.Component<MemorizeProps> {
  static defaultProps: {
    defaultValue: {};
    version: 0;
  };

  static displayName: "Memorize";

  sync(newValues: any): void;
}

export function createModal(props: ModalProps): Function;

export function confirmCompose(
  props: ModalFuncProps
): (
  onOkCb: Function
) => () => {
  destroy: () => void;
};
