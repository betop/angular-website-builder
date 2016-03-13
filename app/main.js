// Application start-up code (RequireJS config)

require.config({
  baseUrl: '',
  paths: {
    'angular': envConfig.lib['angular'],
    'angular-ui-router': envConfig.lib['angular-ui-router'],
    'angular-resource': envConfig.lib['angular-resource'],
    'angular-css': envConfig.lib['angular-css'],
    'twbControllers': 'controllers/index',
    'twbDirectives': 'directives/index',
    'twbServices': 'services/index',
    'utils': 'libs/utils',
    'templateHelper': 'libs/template-helper',
    'pool': 'libs/pool'
  },
  shim: {
    'angular' : { 'exports' : 'angular' },
    'angular-ui-router': ['angular'],
    'angular-resource': ['angular'],
    'angular-css': ['angular']
  },
  priority: [
    'angular'
  ],
  deps: ['app', 'load-bootstrap']
});
