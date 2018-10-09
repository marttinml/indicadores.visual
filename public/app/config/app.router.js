/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';

        // cartera
        $routeProvider.when('/cartera', {
            templateUrl: baseUrl + 'cartera/views/cartera.view.html',
            controller: 'CarteraController'
        });
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


        // cartera
        $routeProvider.when('/beneficios/:key', {
            templateUrl: baseUrl + 'cartera/views/cartera.view.html',
            controller: 'CarteraController'
        });


        

        // http
        $routeProvider.when('/http', {
            templateUrl: baseUrl + 'http/views/http.view.html',
            controller: 'HTTPController'
        });

        // ui
        $routeProvider.when('/ui', {
            templateUrl: baseUrl + 'ui/views/ui.view.html',
            controller: 'UIController'
        });
        
    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();