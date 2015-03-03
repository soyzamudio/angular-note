'use strict';

angular.module('angular-notes')
  .controller('UsersCtrl', ['$scope', 'User', function($scope, User) {
    $scope.submit = function(user) {
      if ((user.password1 === user.password2) && (user.email)) {
        User.register({email: user.email, password: user.password1});
      } else {
        user.password1 = user.password2 = ''
      }
    };
  }]);
