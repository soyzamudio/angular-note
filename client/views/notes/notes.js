'use strict';

angular.module('angular-notes')
  .controller('NotesCtrl', ['$scope', 'Note', '$state', function($scope, Note, $state) {
    $scope.inputs = [];
    $scope.note = {urls: []};

    if ($state.current.name === 'notes.list') {
      $scope.tag = $state.params.tag;
      Note.findAll().then(function(response){
        response.data.summary = response.data.forEach(function(e) { e.summary = e.body.substring(0,150) + '...'; })
        $scope.notes = response.data;
      });
    }

    if ($state.current.name === 'notes.show') {
      Note.show($state.params.noteId).then(function(response) {
        $scope.note = response.data;
      });
    }

    $scope.filter = function(note) {
      if (!$scope.tag || !note.tags) { return true; }
      return _.any(note.tags, function(t) { return t === $scope.tag; });
    };

    $scope.addInputField = function() {
      $scope.inputs.push(null);
    };

    $scope.submit = function(note) {
      Note.create(note).then(function() {
        $state.go('notes.list');
      });
    };
  }]);
