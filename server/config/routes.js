'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},

  {method: 'post', path: '/register', config: require('../routes/users/create')},
  {method: 'post', path: '/login', config: require('../routes/users/login')},
  {method: 'get', path: '/status', config: require('../routes/users/status')},
  {method: 'delete', path: '/logout', config: require('../routes/users/logout')},

  {method: 'get', path: '/notes', config: require('../routes/notes/index')},
  {method: 'post', path: '/notes/create', config: require('../routes/notes/create')},
  {method: 'get', path: '/notes/{noteId}', config: require('../routes/notes/show')}
];
