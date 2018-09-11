import { observable, action, computed } from "mobx";

export default class TreeStore {
  @observable props = null;

  @observable expandKeys = [];

  constructor(props) {
    this.props = props;
  }

  @computed
  get options() {
    return this.props.options;
  }

  @computed
  get checkedKeys() {
    return this.props.checkedKeys;
  }

  @computed
  get checked() {
    return this.props.checked;
  }
  @computed
  get height() {
    return this.props.height;
  }

  @computed
  get width() {
    return this.props.width;
  }

  @computed
  get selectedKeys() {
    return this.props.value;
  }

  @computed
  get searchString() {
    return this.props.search;
  }

  @computed
  get searchRegExp() {
    return this.searchString && this.searchString.trim().length > 0
      ? new RegExp(this.searchString)
      : new RegExp("");
  }

  @computed
  get inSearchMode() {
    return this.searchString && this.searchString.trim().length > 0;
  }

  @computed
  get flattenOptions() {
    let options = [];
    const getFlattenOptions = (option, level, parent) => {
      options.push({
        ...option,
        __level__: level,
        __parent__: parent
      });

      if (
        this.expandKeys.includes(option.value) &&
        option.children &&
        option.children.length > 0
      ) {
        option.children.map(opt => getFlattenOptions(opt, level + 1, option));
      }
    };

    this.options.forEach(option => getFlattenOptions(option, 0, null));

    return options;
  }

  @action.bound
  updateProps(nextProps) {
    this.props = nextProps;
  }

  @action.bound
  toggleExpandTree(value) {
    if (this.expandKeys.includes(value)) {
      this.expandKeys = this.expandKeys.filter(v => v !== value);
    } else {
      this.expandKeys = [...this.expandKeys, value];
    }
  }

  @action.bound
  selectNode(option) {
    this.props.onSelect(option);
  }

  @action.bound
  expandAllNodes() {
    let expandKeys = [];

    const addKeyToExpand = (options)=>{
      options.forEach( option => {
        if (option.children && option.children.length > 0){
          expandKeys.push(option.value);
          addKeyToExpand(option.children);
        }
      } )
    };

    addKeyToExpand(this.options);

    this.expandKeys = expandKeys;
  }
}
