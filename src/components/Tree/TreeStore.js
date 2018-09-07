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
      const formatterOption = this.props.formatter(option);
      options.push({
        ...formatterOption,
        __level__: level,
        __parent__: parent
      });

      if (
        this.expandKeys.includes(formatterOption.value) &&
        option.children &&
        option.children.length > 0
      ) {
        option.children.map(opt => getFlattenOptions(opt, level + 1, formatterOption));
      }
    };

    this.options.forEach(option => getFlattenOptions(option, 0, null));

    return options;
  }

  //  @computed
  //  get flattenOptions() {
  //    let flatOptionArr = [];
  //
  //    this.options.forEach(option => {
  //      let expand = this.expandKeys.includes(option.value);
  //      let hasChild = option.children && option.children.length > 0;
  //
  //      let moreOptions = [];
  //      if (expand && hasChild) {
  //        moreOptions = option.children;
  //        if (this.inSearchMode) {
  //          moreOptions = moreOptions.filter(opt =>
  //            this.searchRegExp.test(opt.label)
  //          );
  //        }
  //      }
  //
  //      // 如果没有一个子集满足条件, 那么父标签也不显示
  //      if (this.inSearchMode) {
  //        if (moreOptions.length > 0 || this.searchRegExp.test(option.label)) {
  //          flatOptionArr.push({
  //            ...option,
  //            expand,
  //            hasChild
  //          });
  //        }
  //      } else {
  //        flatOptionArr.push({
  //          ...option,
  //          expand,
  //          hasChild
  //        });
  //      }
  //
  //      flatOptionArr = [
  //        ...flatOptionArr,
  //        ...moreOptions.map(opt => ({
  //          ...opt,
  //          __level__: 1,
  //          parent: option
  //        }))
  //      ];
  //    });
  //    return flatOptionArr;
  //  }

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
    this.expandKeys = this.options.map(opt => opt.value);
  }
}
