'use strict';

angular.module('angular-notes')
  .controller('NotesCtrl', ['$rootScope', '$scope', 'Note', '$state', function($rootScope, $scope, Note, $state) {
    $scope.inputs = [];
    $scope.note = {urls: []};

    $scope.addInputField = function() {
      $scope.inputs.push(null);
    };

    $scope.submit = function(note) {
      Note.create(note).then(function(response) {
        $state.go('notes.list');
        response.data.summary = response.data.body.substring(0,150) + '...';
        $rootScope.list.push(response.data);
      });
    };
  }]);
