'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},

  {method: 'post', path: '/register', config: require('../routes/users/create')},
  {method: 'post', path: '/login', config: require('../routes/users/login')}
];
