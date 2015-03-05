'use strict';

angular.module('angular-notes')
  .controller('UsersCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User) {
    $scope._ = _;
    $scope.name = $scope._.capitalize($state.current.name);
    $scope.submit = function(user) {
      if ($scope.name === 'Register') {
        if ((user.password1 === user.password2) && (user.email)) {
          User.register({email: user.email, password: user.password1}).then(function(){
            $state.go('login');
          }, function(){
            user.email = user.password1 = user.password2 = '';
          });
        } else {
          user.password1 = user.password2 = '';
        }
      } else {
        User.login(user).then(function(response) {
          $state.go('home');
          $rootScope.email = response.data.email;
        }, function() {
          user.email = user.password = '';
        });
      }
    };
  }]);
