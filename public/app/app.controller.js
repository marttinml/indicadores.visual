;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('AppController', AppController);

  AppController.$inject = ['$rootScope', '$scope', '$state'];

  function AppController($rootScope, $scope, $state){

   

    $rootScope.changePage = changePage;

    function changePage(){
      $state.go($rootScope.chosenPage);
    }

  }

})();
