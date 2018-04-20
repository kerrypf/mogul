module.exports = plop => {
  const templates = [
    'Collection',
    'Detail',
    'Editor',
    'index',
    'Query',
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
      ...templates.map(file => ({
        type: 'add',
        templateFile: `./node_modules/mogul/plop-templates/${file}.js.hbs`,
        path: `./src/pages/{{pascalCase name}}/${file}.js`
      })),
      {
        type: 'append',
        pattern: '{/*insert:route*/}',
        template:
          '<Route path={`${url}/{{dashCase name}}`} component={ {{pascalCase name}} } />',
        path: `./src/pages/Dashboard/index.js`
      },
      {
        type: 'append',
        pattern: 'insert:component',
        template: "import {{pascalCase name}} from '../{{pascalCase name}}';",
        path: `./src/pages/Dashboard/index.js`
      }
    ]
  });
};
