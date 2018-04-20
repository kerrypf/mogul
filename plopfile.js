module.exports = plop => {
  plop.setHelper(
    'pascal',
    text =>
      `${text.substr(0, 1).toUpperCase()}${text.substring(1, text.length)}`
  );
  const templates = [
    'Collection',
    'Detail',
    'Editor',
    'index',
    'Query',
    'Store',
    'services/api',
    'services/collection',
    'services/pagination',
    'services/query'
  ];
  plop.setGenerator('module', {
    description: 'create a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'type module name please'
      }
    ],
    actions: [
      ...templates.map(name => ({
        type: 'add',
        templateFile: `./node_modules/mogul/plop-templates/${name}.js.hbs`,
        path: `./src/pages/{{pascal name}}/${name}.js`
      })),
      {
        type: 'append',
        pattern: '{/*insert:route*/}',
        template:
          '<Route path={`${url}/{{name}}`} component={ {{pascal name}} } />',
        path: `./src/pages/Dashboard/index.js`
      },
      {
        type: 'append',
        pattern: 'insert:component',
        template: "import {{pascal name}} from '../{{pascal name}}';",
        path: `./src/pages/Dashboard/index.js`
      }
    ]
  });
};
