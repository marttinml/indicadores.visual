/*global angular*/
(function () {

    var angularLib  = ["ngRoute","ngResource","ngSanitize"];

    angular.module('app', angularLib).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
      }]);;

})();