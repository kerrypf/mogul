const data =  [
  {
    id: null,
    name: "推荐分类",
    path: null,
    leaf: false,
    display: true,
    children: [
      {
        id: 100577,
        name: "葡萄酒",
        path: ".100541.100575.",
        leaf: false,
        display: true,
        children: [
          {
            id: 101577,
            name: "葡萄酒2",
            path: ".100541.100575.",
            leaf: true,
            display: true,
          }
        ]
      },
      {
        id: 100579,
        name: "陈皮酒",
        path: ".100541.100580.",
        leaf: true,
        display: true,
        children: null
      },
      { id: 100537, name: "巧克力", path: ".100536.", leaf: true, display: true, children: null },
      { id: 100532, name: "叶菜类", path: ".100531.", leaf: true, display: true, children: null }
    ]
  },
  { id: 100586, name: "家用电器", path: ".", leaf: false, display: true, children: null },
  {
    id: 100572,
    name: "方便食品",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100573,
        name: "八宝粥",
        path: ".100572.",
        leaf: false,
        display: true,
        children: [
          {
            id: 100587,
            name: "好粥道",
            path: ".100572.100573.",
            leaf: true,
            display: false,
            children: null
          },
          {
            id: 100574,
            name: "达利园",
            path: ".100572.100573.",
            leaf: true,
            display: true,
            children: null
          },
          {
            id: 100583,
            name: "娃哈哈",
            path: ".100572.100573.",
            leaf: true,
            display: true,
            children: null
          }
        ]
      }
    ]
  },
  {
    id: 100531,
    name: "蔬菜豆菇",
    path: ".",
    leaf: false,
    display: true,
    children: [
      { id: 100532, name: "叶菜类", path: ".100531.", leaf: true, display: true, children: null },
      {
        id: 100533,
        name: "新鲜蔬菜",
        path: ".100531.",
        leaf: true,
        display: true,
        children: null
      },
      { id: 100534, name: "豆制品", path: ".100531.", leaf: true, display: true, children: null },
      {
        id: 100535,
        name: "加工蔬菜",
        path: ".100531.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100584,
    name: "测试老类",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100585,
        name: "老类子叶",
        path: ".100584.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100561,
    name: "水产海鲜1",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100564,
        name: "海鲜制品1",
        path: ".100561.",
        leaf: true,
        display: true,
        children: null
      },
      { id: 100563, name: "虾类", path: ".100561.", leaf: true, display: true, children: null },
      { id: 100562, name: "鱼类", path: ".100561.", leaf: true, display: true, children: null }
    ]
  },
  { id: 100581, name: "鲜奶蛋糕", path: ".", leaf: false, display: true, children: null },
  {
    id: 100536,
    name: "休闲零食",
    path: ".",
    leaf: false,
    display: true,
    children: [
      { id: 100537, name: "巧克力", path: ".100536.", leaf: true, display: true, children: null },
      {
        id: 100538,
        name: "坚果肉脯",
        path: ".100536.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100539,
        name: "饼干糕点",
        path: ".100536.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100540,
        name: "坚果蜜饯",
        path: ".100536.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100541,
    name: "酒水饮料",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100580,
        name: "特产酒",
        path: ".100541.",
        leaf: false,
        display: true,
        children: [
          {
            id: 100579,
            name: "陈皮酒",
            path: ".100541.100580.",
            leaf: true,
            display: true,
            children: null
          }
        ]
      },
      {
        id: 100576,
        name: "红酒",
        path: ".100541.",
        leaf: false,
        display: true,
        children: [
          {
            id: 100578,
            name: "白葡萄酒",
            path: ".100541.100576.",
            leaf: true,
            display: true,
            children: null
          }
        ]
      },
      {
        id: 100575,
        name: "酒",
        path: ".100541.",
        leaf: false,
        display: true,
        children: [
          {
            id: 100577,
            name: "葡萄酒",
            path: ".100541.100575.",
            leaf: true,
            display: true,
            children: null
          },
          {
            id: 100542,
            name: "白酒类",
            path: ".100541.100575.",
            leaf: true,
            display: true,
            children: null
          }
        ]
      },
      { id: 100543, name: "水饮料", path: ".100541.", leaf: true, display: true, children: null }
    ]
  },
  {
    id: 100544,
    name: "鲜肉蛋禽",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100545,
        name: "鲜肉猪肉",
        path: ".100544.",
        leaf: true,
        display: true,
        children: null
      },
      { id: 100546, name: "禽", path: ".100544.", leaf: true, display: true, children: null },
      { id: 100547, name: "蛋类", path: ".100544.", leaf: true, display: true, children: null },
      { id: 100548, name: "牛肉", path: ".100544.", leaf: true, display: true, children: null },
      { id: 100549, name: "肉制品", path: ".100544.", leaf: true, display: true, children: null }
    ]
  },
  {
    id: 100550,
    name: "新鲜水果",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100582,
        name: "当季水果",
        path: ".100550.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100551,
        name: "精选水果",
        path: ".100550.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100552,
        name: "鲜果礼盒",
        path: ".100550.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100553,
    name: "生活用品",
    path: ".",
    leaf: false,
    display: true,
    children: [
      { id: 100554, name: "纸品", path: ".100553.", leaf: true, display: true, children: null },
      {
        id: 100555,
        name: "衣物清洁",
        path: ".100553.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100556,
        name: "家居清洁",
        path: ".100553.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100557,
    name: "速食冻品",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100558,
        name: "包子馒头",
        path: ".100557.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100559,
        name: "水饺面条",
        path: ".100557.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100560,
        name: "点心糕点",
        path: ".100557.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100565,
    name: "牛奶面点",
    path: ".",
    leaf: false,
    display: true,
    children: [
      {
        id: 100567,
        name: "牛奶乳品",
        path: ".100565.",
        leaf: true,
        display: true,
        children: null
      },
      {
        id: 100566,
        name: "面包糕点",
        path: ".100565.",
        leaf: true,
        display: true,
        children: null
      }
    ]
  },
  {
    id: 100568,
    name: "粮油副食",
    path: ".",
    leaf: false,
    display: true,
    children: [
      { id: 100569, name: "食用油", path: ".100568.", leaf: true, display: true, children: null },
      { id: 100570, name: "调味料", path: ".100568.", leaf: true, display: true, children: null },
      { id: 100571, name: "米粉面", path: ".100568.", leaf: true, display: true, children: null }
    ]
  }
];

module.exports = data

