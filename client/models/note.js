'use strict';

angular.module('angular-notes')
  .factory('Note', ['$http', function($http) {

    function create(note) {
      return $http.post('/notes/create', note);
    }

    function findAll() {
      return $http.get('/notes');
    }

    return {create:create, findAll:findAll};

  }]);
