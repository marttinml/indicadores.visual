/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {

        $scope.spin = false;
        $rootScope.career = "UNEFON";
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
                $("HTML, BODY").animate({ scrollTop: 0 }, 200);
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
                $("HTML, BODY").animate({ scrollTop: 0 }, 200);
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


        $scope.periodoActual = 0;
        $scope.periodoMax = 9;
        $scope.activeAnterior = true;
        $scope.activeSiguiente = false;
        $scope.d1 = new Date();
        $scope.d2 = new Date();
        $scope.d2.setDate($scope.d2.getDate() - 7 );
        $scope.meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre',];
        $scope.periodo = 'Del ' + $scope.d1.getDate() + ' de '+ $scope.meses[$scope.d1.getMonth()] + ' al ' + $scope.d2.getDate() + ' de '+ $scope.meses[$scope.d2.getMonth()];

        $scope.periodoAnterior = function(){
            if($scope.periodoActual < $scope.periodoMax){
                $scope.periodoActual++;
                $scope.activeAnterior = $scope.periodoActual < $scope.periodoMax ? true : false;
                $scope.activeSiguiente = true;
                $scope.d1.setDate($scope.d1.getDate() - 7 );
                $scope.d2.setDate($scope.d2.getDate() - 7 );
                $scope.periodo = 'Del ' + $scope.d1.getDate() + ' de '+ $scope.meses[$scope.d1.getMonth()] + ' al ' + $scope.d2.getDate() + ' de '+ $scope.meses[$scope.d2.getMonth()];
            }
        };
        $scope.periodoSiguiente = function(){
            if($scope.periodoActual > 0){
                $scope.periodoActual--;
                $scope.activeSiguiente = $scope.periodoActual > 0 ? false : true;
                $scope.activeAnterior = true;
                $scope.d1.setDate($scope.d1.getDate() + 7 );
                $scope.d2.setDate($scope.d2.getDate() + 7 );
                $scope.periodo = 'Del ' + $scope.d1.getDate() + ' de '+ $scope.meses[$scope.d1.getMonth()] + ' al ' + $scope.d2.getDate() + ' de '+ $scope.meses[$scope.d2.getMonth()];
            }
        };

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
                    ['7 Sep', '8']
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

                ]
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
                                    "descripcion": "Sirve para: <br/> <br/> Compra de paquetes de Beneficios de prepago (automáticamente a partir de recargas de $30.00 pesos)<br/> Compra de servicios adicionales (Prip, paquetes de datos, etc.)<br/> Consumo de servicios “pay as you go”:<br/> Minutos de telefonía nacional o de larga distancia mundial<br/> <br/> Datos para navegación en Internet (MB)<br/> Mensajes de texto (SMS) y multimedia (MMS)<br/>  Roaming Internacional<br/> <br/> Compra de contenido y servicios de valor agregado<br/> Pago de suscripciones disponibles para la oferta de prepago de Unefon<br/> SMS Premium<br/> Marcación a números 900s o con cobro por servicio"
                                },
                                {
                                    "nombre": "Saldo Comprado",
                                    "incluido": "$ 100",
                                    "expiracion": "21 de noviembre del 2018",
                                    "congelado": true,
                                    "descripcion": "Sirve para:<br/><br/> Compra de servicios adicionales (Prip, paquetes de datos, etc.)<br/> Consumo de servicios “pay as you go”: <br/>Minutos de telefonía nacional o de larga distancia mundial<br/><br/> Datos para navegación en Internet (MB)<br/>Mensajes de texto (SMS) y multimedia (MMS)<br/> Roaming Internacional <br/><br/> Compra de contenido y servicios de valor agregado<br/>Pago de suscripciones disponibles para la oferta de prepago de Unefon<br/>SMS Premium<br/>Marcación a números 900s o con cobro por servicio"
                                },
                                {
                                    "nombre": "Saldo de Regalo",
                                    "incluido": "$ 0",
                                    "expiracion": "NA",
                                    "congelado": false,
                                    "descripcion": "El Saldo de Regalo se otorga esporádica y promocionalmente y sirve para adquirir determinados servicios que se especifican en la promoción en la que se otorgue. <br/>  <br/> El Saldo de Regalo no se congela, ni acumula y su vigencia dependerá de las condiciones de cada promoción."
                                }
                            ]
                       }
                   ]
               },
               {
                "tipoBolsa": "saldos",
                "icon":"att-a-slim",
                "nombre":"Monedas AT&T",
                "disponible": "100",
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
                                 "descripcion": "Monto líquido equivalente a 1 peso de recarga, que se otorga de manera promocional y que está sujeto a una vigencia especifica."
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
                                 "descripcion": "Bolsa generada automáticamente a partir de recargas de $30.00 pesos, dependiendo la recarga es el monto del beneficio."
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
                                 "descripcion": "Es una cantidad de GB que se te asignan cada periodo para visualizar tus redes sociales con tu equipo móvil, al terminar los GB asignados existirán cargos adicionales que verás reflejados en tu facturación de servicio."
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
                                 "descripcion": "Es una cantidad de GB que se te asignan cada periodo para visualizar tus redes sociales con tu equipo móvil, al terminar los GB asignados existirán cargos adicionales que verás reflejados en tu facturación de servicio."
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

            if(!$routeParams.sesion){
                location.href = '#/passcode'
            }


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