/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {

        $scope.spin = false;
        $scope.career = "UNEFON";
        $scope.titulo = "BENEFICIOS";

        $scope.showDetail = function(item, id){

            $scope.grupo = item;
            $scope.career;
            var element = document.getElementById(id);
            var elementCloned =  element.cloneNode(true);
            elementCloned.classList.add('wrapper-item-cloned');
            elementCloned.setAttribute('id', id + 'cloned');
            elementCloned.removeAttribute('ng-repeat');
            elementCloned.childNodes[1].setAttribute('ng-click','hideDetail("'+id+'cloned'+'", '+element.offsetTop+')');
            elementCloned.style.top = (element.offsetTop - 10) + 'px';

            var linkFn = $compile(angular.element(elementCloned));
            var content = linkFn($scope);
            var elementContent = angular.element(document.getElementById("contentItems")).append(content);
            
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
            
            // console.log(elementCloned.childNodes[5].childNodes[1]);
            // elementCloned.childNodes[5].childNodes[5].childNodes[1].setAttribute('id','myChartCloned');
            
            var element = document.getElementById('contentConsumos');
            var elementContent = angular.element(elementCloned).append(element);
            // Animation
            setTimeout(() => {
                elementCloned.classList.add('transition');
                // $scope.factoryBar($scope.chart);
            }, 100);
        };

        $scope.hideDetail = function(id, top){
            var el = document.getElementById(id);
            el.classList.remove('transition');
        
            setTimeout(() => {
                $scope.grupo = {};
                el.remove();
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
                                    "descripción": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga"
                                }
                            ]
                       }
                   ]
               }
           ]
       }
       
       
       
        $scope.cartera = {
        "color":"blue",
        "titulo":"CARTERA",
        "career":"UNEFON",
        "fechaCorte": "07 de Octubre",
        "proximaAsignacion": "27 días",
        "grupos": [
            {
                "icon": "att-money-slim",
                "nombre": "Saldo Total",
                "disponible": "$220",
                "saldo": {
                    "saldo": "$20",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                },
                "beneficios": {
                    "saldo": "$200",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                }
            },
            {
                "icon": "att-a-slim",
                "nombre": "Monedas",
                "disponible": "$0",
                "monedas": {
                    "saldo": "$0",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                }
            },
            {
            "icon": "att-internet-slim",
            "nombre": "Internet",
            "disponible": "6 GB",
            "limitado": {
                "incluido": "14 GB",
                "consumido": "7 GB",
                "disponible":"6 GB",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Internet Incluido en plan",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Internet Promoción",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-group-slim",
            "nombre": "Redes Sociales",
            "disponible": "···",
            "ilimitado": {
                "incluido": "Ilimitado",
                "consumido": "1 GB",
                "descripcion": "Esta bolsa te la puedes gastar en FB TW WA SP INS UB",
            },
            "limitado": {
                "incluido": "2 GB",
                "consumido": "0 GB",
                "disponible":"2 GB",
                "descripcion": "Esta bolsa te la puedes gastar en FB TW WA SP INS UB",
            },
            "bolsas":[{
                    "nombre": "Redes Sociales incluidas",
                    "incluido": "2 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Redes sociales",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-messaging-slim",
            "nombre": "Mensajes",
            "disponible": "Ilimitado",
            "ilimitado": {
                "incluido": "Ilimitado",
                "consumido": "42 SMS",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Internet Incluido en plan",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Internet Promoción",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-caller-history-slim",
            "nombre": "Llamadas",
            "disponible": "Ilimitadas",
            "ilimitado": {
                "incluido": "Ilimitado",
                "consumido": "42 min",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Minutos incluidos comunidad AT&T",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Minutos incluidos otros destinos",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        }]
    };
        
    var internet = $scope.consumos.internet;
    var llamadas = $scope.consumos.llamadas;
    var mensajes = $scope.consumos.mensajes;
    internet.chart = { labels: [], data: []};
    llamadas.chart = { labels: [], data: []};
    mensajes.chart = { labels: [], data: []};

    for(j in internet.contenido){
        var jtem = internet.contenido[j];
        internet.chart.labels.push(jtem[0]);
        internet.chart.data.push(Number(jtem[1]));
    }
    for(j in llamadas.contenido){
        var jtem = llamadas.contenido[j];
        llamadas.chart.labels.push(jtem[1]);
        llamadas.chart.data.push(Number(jtem[2]));
    }
    for(j in mensajes.contenido){
        var jtem = mensajes.contenido[j];
        mensajes.chart.labels.push(jtem[0]);
        mensajes.chart.data.push(jtem[0]);
    }

    
    $scope.radioPeriodo = [{active: true},{active: false}];
    
    internet.active = true;
    $scope.consumosTable = internet;
    $scope.chart = internet.chart;
    $scope.carrer = $scope.cartera.color === 'yellow'? 'rgba(255,198,0,.8)' : 'rgba(0,159,219,.8)';

    setTimeout(function(){
        $scope.spin = true;
        $scope.$apply();
    },1000);
    
    };
    controller.$inject = ['$scope','$rootScope','$routeParams', '$compile'];
    angular.module('app').controller('CarteraController', controller);

})();