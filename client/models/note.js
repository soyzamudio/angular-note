'use strict';

angular.module('angular-notes')
  .factory('Note', ['$http', function($http) {

    function create(note) {
      return $http.post('/notes/create', note);
    }

    function findAll() {
      return $http.get('/notes');
    }

    function show(noteId) {
      return $http.get('/notes/' + noteId);
    }

    return {create:create, findAll:findAll, show:show};

  }]);
