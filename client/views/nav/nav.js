'use strict';

angular.module('angular-notes')
  .controller('NavCtrl', ['$rootScope', '$scope', 'User', '$state', function($rootScope, $scope, User, $state) {
    $scope.logout = function() {
      User.logout().then(function() {
        $rootScope.email = '';
        $state.go('login');
      });
    };
  }]);
