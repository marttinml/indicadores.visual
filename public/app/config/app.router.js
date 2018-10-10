/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';

         // passcode
         $routeProvider.when('/passcode', {
            templateUrl: baseUrl + 'passcode/views/passcode.view.html',
            controller: 'PasscodeController'
        });
        // passcode
        $routeProvider.when('/recuperar-passcode', {
            templateUrl: baseUrl + 'recuperar-passcode/views/recuperar-passcode.view.html',
            controller: 'RecuperarPasscodeController'
        });


        // beneficios
        $routeProvider.when('/beneficios/:key', {
            templateUrl: baseUrl + 'cartera/views/cartera.view.html',
            controller: 'CarteraController'
        });
    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();