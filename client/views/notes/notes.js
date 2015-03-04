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
        console.log(response.data);
        $state.go('notes.list');
        $rootScope.list.push(response.data);
      });
    };
  }]);
