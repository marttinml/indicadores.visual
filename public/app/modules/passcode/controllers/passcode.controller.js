/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {
        $scope.spin = false;
        $scope.info = { titulo: '', career: ''};
        $scope.passcodeFail = false;
        $scope.getInfo = function(){
            $scope.info = { titulo: 'BIENVENIDO A', career: 'UNEFON', color: 'yellow'};
            $scope.obtionsAlert = {
                show: false,
                type: 'ok',
                title: '¡ENVIADO!',
                icon: 'ok',
                msj: 'Hemos enviado una liga para que puedas crear tu passcode al correo franz@mail.com',
                prompt: 'Si no reconoces este mail, llama al *611 o acude a tu sucursal AT&T más cercana para brindarte ayuda'
            }

            setTimeout(function(){
                $scope.spin = true;
                $scope.$apply();
            },1000);
        };

        $scope.recoverPasscode = function(){
            $scope.obtionsAlert.show = true;
        };

        $scope.getInfo();

        $('#card1').inputMask( {mask:'●',type:'pass'});
        $('#card2').inputMask( {mask:'●',type:'pass'});
        $('#card3').inputMask( {mask:'●',type:'pass'});
        $('#card4').inputMask( {mask:'●',type:'pass'});
        $('#card5').inputMask( {mask:'●',type:'pass'});
        $('#card6').inputMask( {mask:'●',type:'pass'});

        $('.input-card').keyup(function(){
            if($(this).val().length ===1){
                $(this).next('.input-card').focus();
            }
            if(!$(this).next('.input-card').length){
                console.log($(this).val());
                if(Number($(this).val()) === 1){
                    location.href = '#/beneficios/7843yr43ur43/u48rfj34d83'
                }else{
                    $scope.passcodeFail = true;
                    $scope.$apply();

                    setTimeout(function(){
                        $('.input-card').trigger('empty');
                        $('#card1').focus();
                    },500);
                }
            }
        });
    
    };
    controller.$inject = ['$scope','$rootScope','$routeParams', '$compile'];
    angular.module('app').controller('PasscodeController', controller);

})();