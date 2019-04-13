# [@mogul/components](https://freshesx.github.io/mogul-website/)

详见: [文档](https://freshesx.github.io/mogul-website/)

[![NPM version](https://img.shields.io/npm/v/@mogul/components.svg?style=flat-square)](https://www.npmjs.com/package/@mogul/components)
[![CircleCI](https://circleci.com/gh/freshesx/mogul.svg?style=svg&circle-token=37fb5b4463a5bbc51ad8a291cecb8af30a0c1349)](https://circleci.com/gh/freshesx/mogul)
[![NPM downloads](https://img.shields.io/npm/dm/@mogul/components.svg?style=flat-square)](https://www.npmjs.com/package/@mogul/components)
[![NPM downloads](https://img.shields.io/npm/l/@mogul/components.svg?style=flat-square)](https://www.npmjs.com/package/@mogul/components)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@mogul/components.svg)](https://www.npmjs.com/package/@mogul/components)
[![Github Tag](https://img.shields.io/github/tag/freshesx/mogul.svg)](https://github.com/freshesx/mogul)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![GitHub stars](https://img.shields.io/github/stars/freshesx/mogul.svg?style=social&label=Stars)](https://github.com/freshesx/mogul)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1f498cc05ed34dfeb5553c5caef5becf)](https://www.codacy.com/app/JennerChen/mogul?utm_source=github.com&utm_medium=referral&utm_content=freshesx/mogul&utm_campaign=Badge_Grade)
[![Depfu](https://badges.depfu.com/badges/86a1bcd8ce413602052d70a1833b0561/overview.svg)](https://depfu.com/github/freshesx/mogul?project_id=7201)
<a href="#badge">
<img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
</a>
[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

# 基于 Antd 的中后台组件库

- :+1: 现代前端技术: react + mobx + antd + styled-components
- :clap: 聚焦中后台

> create-mogul-app

- :100: 模板示例: 精心设计的模板
- :high_brightness: 效率优先: 源于实践,实用的才是最好的
- :cat: 开箱即用: 基于 create-react-app,深度优化,完全 0 配置
- :dog: mock 服务器: json-server, faker 快速模拟数据

## install

```bash
yarn add @mogul/components
```

> 强烈推荐和 [create-mogul-app](https://freshesx.github.io/mogul-website/docs/create-mogul-app) 脚手架 一起使用,

```bash
npx @mogul/create-mogul-app <project-name>
```

> 不支持直接使用脚本的方式引用

详见: [文档](https://freshesx.github.io/mogul-website/)

## FAQ
### 与 `antd` , `create-react-app` 的关系

`mogul` 注重后台管理页面的开发， 基于当前流行的开源库，二次封装。尽量保证不侵入引用库

@mogul/components 是 `antd` 的补充, 增加了一些关于后台管理页面的组件。

@mogul/mogul-scripts: 是基于`create-react-app`封装的 0 配置脚手架, 使用方式尽量与`CRA`保持一致。

### Why mobx 为什么使用Mobx作为状态管理库

当前主流状态管理有 `Redux`, `Mobx`, `Relay`

1. Redux: 通常是react中最欢迎的，但是组件库并不一定需要。主要原因有一下
Redux强调清晰的数据流。在实际开发中，你会发现拖慢了开发进度, 而且你需要优化频繁更新的组件，这都是额外的工作量。Redux使用单数据中心模式, 不适合后台组件的设计逻辑

2. Mobx: 通过 mobx-react 使得 react组件拥有双向数据流的功能, 能够大幅度减少 setState 的使用, 数据共享只需 provider就可以传递到子组件, 而且自动执行setState刷新组件。在开发组件的工程中, 特别是业务逻辑代码, 几乎从来不需要手动优化 `componentWillReceiveProps` 等方法, 这大大节省了开发时间。更高的代码可读性, 使用es6 class+装饰器(decorators), 使得代码非常清晰。 react只做ui渲染部分, 极少setState, 不需要跨越不同目录寻找代码, 数据逻辑在class中完成, 自动渲染到ui层。Mobx主要缺点他会修改transform数据结构,变成obserable, 这会增加测试复杂度。同时,个人原因, 我更喜欢纯粹的数据, Mobx施加了太多魔法。这和vue类似。

3. Relay: Facebook的Relay使用graphql当做数据获取方式, 他能够一次性获取装饰组件所有需要的数据,内置数据性能优化功能, 通过mutations触发修改,自动重新获取数据, 能够快速开发组件, 个人更看好Relay相对于Redux、Mobx。But, 必须使用graphql, 这不符合国情, 所以没有选用。

### Why antd + styled-components

使用`antd`主要因为现有环境所致, `antd`足够优秀且组件,中文文档丰富。另外一个很重要的原因现在公司内部很多遗留项目,使用的是antd,为了保持风格统一。
mogul只使用了`antd`基本的组件且不侵犯`antd`中的组件, 如果业务需要将来可以快速替换成 material, 或者semantic、bootstrap。
css可选择性很多, inline, css-module, styled-components。styled-components可以把css当成react组件一样编写, 入门门槛低且与js共享所有工具。个人非常看好styled-components成为最后react样式的标准实现

### 模板似乎还不够具有生产力

生产力需要配合实际业务逻辑。我们内部使用mogul还会再对其进行第二次模板化, 但是这包含公司的业务逻辑,所以抱歉。那是不是不可使用? 不是的, mogul本身是对antd的补充, antd有些组件过于复杂, 而mogul简化了流程,默认的配置在绝大部分情况下就是最优的,起码对我们。你不需要额外去找文档即可编写，这能节省大量时间。wellcome fork!

## 相关资料

- [mogul-scripts](https://github.com/freshesx/mogul-scripts)
- [mogul-website](https://github.com/freshesx/mogul-website)

食行生鲜运营平台开发部出品
