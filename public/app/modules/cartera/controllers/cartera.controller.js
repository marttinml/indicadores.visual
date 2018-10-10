/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {

        $scope.spin = false;
        $scope.career = "UNEFON";
        $scope.titulo = "BENEFICIOS";
        $scope.grupoObj = {};
        $scope.descriptionToggle = false;
        $scope.descripcion = '';
        $scope.descripcionTitle = '';
        $scope.ILIMITADAS = ['Ilimitadas', 'ilimitadas', 'Ilimitados', 'ilimitados', 'Ilimitado', 'ilimitado','Ilimitada', 'ilimitada'];

        $scope.esIllimitada = function(str){
          for(var i in $scope.ILIMITADAS){
            var ILIMITADAS = $scope.ILIMITADAS[i];
            if(str === ILIMITADAS){
                return true;
            }
          }
          return false;
        };
        $scope.showDescription = function(desc, title){
            $scope.descripcion = desc;
            $scope.descripcionTitle = title;
            $scope.descriptionToggle = true;
        };
        $scope.hideDescription = function(){
            $scope.descriptionToggle = false;
            $scope.descripcion = '';
            $scope.descripcionTitle = '';
        };

        $scope.showDetail = function(item, id){

            $scope.grupoObj = item;
            var element = document.getElementById(id);
            var elementCloned =  element.cloneNode(true);
            elementCloned.classList.add('wrapper-item-cloned');
            elementCloned.setAttribute('id', id + 'cloned');
            elementCloned.removeAttribute('ng-repeat');
            elementCloned.removeAttribute('ng-if');
            elementCloned.childNodes[1].setAttribute('ng-click','hideDetail("'+id+'cloned'+'", '+element.offsetTop+')');
            elementCloned.style.top = (element.offsetTop - 10) + 'px';

            var linkFn = $compile(angular.element(elementCloned));
            var content = linkFn($scope);
            var elementContent = angular.element(document.getElementById("contentItems")).append(content);
            
            var element = document.getElementById('contentBeneficios');
            var elementContent = angular.element(elementCloned).append(element);

            // Animation
            setTimeout(() => {
                elementCloned.classList.add('transition');
            }, 100);

        };

        $scope.showConsumos = function(id){
            var element = document.getElementById(id);
            var elementCloned =  element.cloneNode(true);
            elementCloned.classList.add('wrapper-item-cloned');
            elementCloned.setAttribute('id', id + 'cloned');
            elementCloned.childNodes[1].setAttribute('ng-click','hideConsumos("'+id+'cloned'+'", '+element.offsetTop+')');
            elementCloned.style.top = (element.offsetTop - 10) + 'px';

            var linkFn = $compile(angular.element(elementCloned));
            var content = linkFn($scope);
            var elementContent = angular.element(document.getElementById("contentItems")).append(content);
            
            var element = document.getElementById('contentConsumos');
            var elementContent = angular.element(elementCloned).append(element);
            // Animation
            setTimeout(() => {
                elementCloned.classList.add('transition');
            }, 100);
        };

        $scope.hideDetail = function(id, top){
            var el = document.getElementById(id);
            el.classList.remove('transition');
        
            setTimeout(() => {
                $scope.grupoObj = {};
                var element = document.getElementById('contentBeneficios');
                var elementContent = angular.element(document.getElementById('wrappersContents')).append(element);
                el.remove();
                $scope.hideDescription();
                $scope.$apply();
            }, 300);
        };

        $scope.hideConsumos = function(id, top){
            var el = document.getElementById(id);
            el.classList.remove('transition');
        
            setTimeout(() => {
                var element = document.getElementById('contentConsumos');
                var elementContent = angular.element(document.getElementById('wrappersContents')).append(element);
                el.remove();
            }, 300);
        };

        $scope.resetConsumosTabs = function(tab){
            for(var i in $scope.consumos){
                $scope.consumos[i].active = false;
            }
            $scope.chart = tab.chart;
            $scope.consumosTable = tab;
            // $scope.factoryBar($scope.chart);
            tab.active = true;
        };
        $scope.changePeriodo = function(index){
            for(var i in $scope.radioPeriodo){
                $scope.radioPeriodo[i].active = false;
            }
            $scope.radioPeriodo[index].active = true;
        }

        $scope.consumos = {
            internet: {   
                icono: 'att-consumo-internet',
                tipo: 'Internet',
                titulos: ['Fecha', 'MB'],
                contenido: [
                    ['1 Sep', '8'],
                    ['2 Sep', '8'],
                    ['3 Sep', '8'],
                    ['4 Sep', '8'],
                    ['5 Sep', '8'],
                    ['6 Sep', '8'],
                    ['7 Sep', '8'],
                    ['8 Sep', '8'],
                    ['9 Sep', '0'],
                    ['10 Sep', '8'],
                    ['11 Sep', '8'],
                    ['12 Sep', '8'],
                    ['13 Sep', '8'],
                    ['15 Sep', '8'],
                    ['16 Sep', '8'],
                    ['17 Sep', '8'],
                    ['18 Sep', '8'],
                    ['19 Sep', '8'],
                    ['20 Sep', '20'],
                    ['21 Sep', '8'],
                    ['22 Sep', '8'],
                    ['23 Sep', '50'],
                    ['25 Sep', '8'],
                    ['26 Sep', '8'],
                    ['27 Sep', '8'],
                    ['28 Sep', '30'],
                    ['29 Sep', '8'],
                    ['30 Sep', '8'],
                ]
            },
            llamadas: {
                icono: 'att-consumo-llamadas',
                tipo: 'Llamadas',
                titulos: ['Número', 'Fecha', 'Minutos', 'Hora','Compañia','Localidad','Costo'],
                contenido: [
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '0', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '20', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '10', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '10', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],
                    ['556787001', '12 Dic', '5', '5:80','IUSACELL','CDMX','$5,00'],

                ]
            },
            mensajes:{
                icono: 'att-consumo-mensajes',
                tipo: 'Mensajes',
                titulos: [],
                contenido: []
            }
        };
       
       $scope.beneficios = {
           "color":"yellow",
           "grupos": [
               {
                   "tipoBolsa": "saldos",
                   "icon":"att-money-slim",
                   "nombre":"Saldo Total",
                   "disponible": "$ 100",
                   "detalle": [
                       {
                           "disponible": "$100",
                            "incluido": "",
                            "consumido": "",
                            "bolsas": [
                                {
                                    "nombre": "Saldo Todo Propósito",
                                    "incluido": "$ 100",
                                    "expiracion": "21 de noviembre del 2018",
                                    "congelado": false,
                                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                                },
                                {
                                    "nombre": "Saldo Comprado",
                                    "incluido": "$ 100",
                                    "expiracion": "21 de noviembre del 2018",
                                    "congelado": true,
                                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                                },
                                {
                                    "nombre": "Saldo de Regalo",
                                    "incluido": "$ 0",
                                    "expiracion": "NA",
                                    "congelado": false,
                                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                                }
                            ]
                       }
                   ]
               },
               {
                "tipoBolsa": "saldos",
                "icon":"att-a-slim",
                "nombre":"Monedas AT&T",
                "disponible": "$ 100",
                "detalle": [
                    {
                        "disponible": "$100",
                         "incluido": "",
                         "consumido": "",
                         "bolsas": [
                             {
                                 "nombre": "Monedas AT&T",
                                 "incluido": "$ 100",
                                 "expiracion": "21 de noviembre del 2018",
                                 "congelado": false,
                                 "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                             }
                         ]
                    }
                ]
            },
               {
                "tipoBolsa": "beneficios",
                "icon":"att-internet-slim",
                "nombre":"Internet Propio",
                "disponible": "1 GB",
                "detalle": [
                    {
                        "disponible": "$100",
                         "incluido": "1 GB",
                         "consumido": "0 GB",
                         "bolsas": [
                             {
                                 "nombre": "Saldo Todo Propósito",
                                 "incluido": "1 GB",
                                 "expiracion": "21 de noviembre del 2018",
                                 "congelado": false,
                                 "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                             }
                         ]
                    }
                ]
            },
            {
                "tipoBolsa": "beneficios",
                "icon":"att-group-slim",
                "nombre":"Redes Sociales",
                "disponible": "2 GB",
                "detalle": [
                    {
                         "consumido": "0 GB",
                         "bolsas": [
                             {
                                 "nombre": "Redes Sociales Beneficio Recarga (Facebook, WhatsApp, Twitter Uber, Instagram)",
                                 "incluido": "2 GB",
                                 "expiracion": "21 de noviembre del 2018",
                                 "congelado": false,
                                 "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                             }
                         ]
                    },
                    {
                         "bolsas": [
                             {
                                 "nombre": "Redes Sociales Beneficio Recarga (Facebook, WhatsApp, Twitter Uber, Instagram)",
                                 "incluido": "Ilimitadas",
                                 "expiracion": "21 de noviembre del 2018",
                                 "congelado": false,
                                 "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                             }
                         ]
                    }

                ]
            },
            {
                "tipoBolsa": "beneficios",
                "icon":"att-caller-history-slim",
                "nombre":"Llamadas",
                "disponible": "Ilimitadas"
            },
            {
                "tipoBolsa": "beneficios",
                "icon":"att-messaging-slim",
                "nombre":"Mensajes",
                "disponible": "Ilimitados"
            }
           ]
       };
        
       $scope.init = function(){
            var internet = $scope.consumos.internet;
            var llamadas = $scope.consumos.llamadas;
            var mensajes = $scope.consumos.mensajes;
            internet.chart = { labels: [], data: []};
            llamadas.chart = { labels: [], data: []};
            mensajes.chart = { labels: [], data: []};
        
            $scope.radioPeriodo = [{active: true},{active: false}];
            
            internet.active = true;
            $scope.consumosTable = internet;
            $scope.chart = internet.chart;
            
            setTimeout(function(){
                $scope.spin = true;
                $scope.$apply();
            },1000);
       };
    
       $scope.init();
    };
    controller.$inject = ['$scope','$rootScope','$routeParams', '$compile'];
    angular.module('app').controller('CarteraController', controller);

})();