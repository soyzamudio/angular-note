'use strict';

angular.module('angular-notes')
  .factory('User', ['$http', function($http) {

    function register(user) {
      return $http.post('/register', user);
    }

    return {register:register};

  }]);
