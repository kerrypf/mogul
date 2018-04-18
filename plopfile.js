module.exports = plop => {
  plop.setHelper(
    'pascal',
    text =>
      `${text.substr(0, 1).toUpperCase()}${text.substring(1, text.length)}`
  );
  plop.setPartial(
    'routerPartial',
    `  '{{path}}': {
    component: require('../pages/{{pascal name}}').default
  },`
  );
  plop.setGenerator('module', {
    description: 'create a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'type module name please'
      },
      {
        type: 'input',
        name: 'path',
        message: 'type router full path please'
      }
    ],
    actions: [
      {
        type: 'add',
        templateFile: 'node_modules/mogul-package/plop-templates/index.js.hbs',
        path: './src/pages/{{pascal name}}/index.js'
      },
      {
        type: 'add',
        templateFile:
          'node_modules/mogul-package/plop-templates/columns.js.hbs',
        path: './src/pages/{{pascal name}}/columns.js'
      },
      {
        type: 'add',
        templateFile:
          'node_modules/mogul-package/plop-templates/index.module.less.hbs',
        path: './src/pages/{{pascal name}}/index.module.less'
      },
      {
        type: 'add',
        templateFile: 'node_modules/mogul-package/plop-templates/Search.js.hbs',
        path: './src/pages/{{pascal name}}/Search.js'
      },
      {
        type: 'add',
        templateFile: 'node_modules/mogul-package/plop-templates/store.js.hbs',
        path: './src/store/{{name}}.js'
      },
      {
        type: 'append',
        pattern: /insert:router/,
        template: '{{> routerPartial}}',
        path: './src/common/router.js'
      }
    ]
  });
};
