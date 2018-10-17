import * as React from "react";

type ScriptProps = {
  attributes: Object;
  onCreate?: Function;
  onError?: Function;
  onLoad?: Function;
  url: string;
  children?: (hasError: boolean) => JSX.Element;
};

type ScriptState = {
  load: boolean;
  hasError: boolean;
};

export default class Script extends React.Component<ScriptProps, ScriptState> {
  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  static scriptObservers: object;

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.
  static loadedScripts: object;

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.
  static erroredScripts: object;

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.
  static idCount: number;

  createScript(): void;
}
