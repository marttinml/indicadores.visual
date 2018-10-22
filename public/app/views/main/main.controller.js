;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$scope'];

  function MainController($state, $scope){

    var _this = this;





    $scope.header = ['Canal','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

    $scope.canalAccesorios = [
      ['IVR Visual'     ,'0', '1',  '0',  '17', '0',  '2',  '9',  '0',  '0',  '24', '0',  '41'],
      ['IVR Voz'        ,'8', '2',  '0',  '0',  '7',  '4',  '0',  '0',  '3',  '0',  '0',  '13'],
      ['Mi AT&T Móvil'  ,'0', '3',  '84', '26', '0',  '0',  '5',  '0',  '0',  '0',  '34', '0'],
      ['Mi AT&T Web'    ,'0', '4',  '0',  '0',  '0',  '8',  '0',  '34', '0',  '0',  '0',  '0'],
      ['Mi Unefon Móvil','23','5',  '4',  '0',  '13', '10', '0',  '7',  '16', '0',  '3',  '7'],
      ['Mi Unefon Web'  ,'0', '97', '7',  '24', '0',  '12', '41', '0',  '0',  '64', '12', '0'],
      ['Total'          ,'31','124','95', '67', '20', '36', '55', '41', '19', '88', '49', '61']
    ];

      $scope.canalPagoFactura = [
        ['IVR Visual'     ,'0','1','0','17','0','2','0','0','0','24','0','41'],
        ['IVR Voz'        ,'0','2','0','0','7','4','0','0','0','0','0','13'],
        ['Mi AT&T Móvil'  ,'0','3','84','26','0','0','0','0','0','0','34','0'],
        ['Mi AT&T Web'    ,'0','4','0','0','0','8','0','34','0','0','0','0'],
        ['Mi Unefon Móvil','23','5','4','0','0','10','0','0','16','0','0','0'],
        ['Mi Unefon Web'  ,'0','97','0','24','0','12','41','0','0','64','12','0'],
        ['Total'          ,'0','7','0','0','0','56','7','0','0','16','0','0']
      ];

      $scope.canalRecargas = [
        ['IVR Visual'     ,'0','1','0','17','0','2','0','0','0','24','0','41'],
        ['IVR Voz'        ,'0','2','0','0','0','4','0','0','0','0','0','13'],
        ['Mi AT&T Móvil'  ,'0','3','84','26','0','7','0','0','7','0','34','0'],
        ['Mi AT&T Web'    ,'0','4','0','7','0','8','0','34','0','0','7','0'],
        ['Mi Unefon Móvil','23','5','4','0','0','10','0','0','16','0','0','0'],
        ['Mi Unefon Web'  ,'0','97','0','24','0','12','41','0','7','64','12','0'],
        ['Total'          ,'0','7','0','0','0','56','0','0','0','16','0','0']
      ];

      $scope.plataformaAccesorios = [
        ['Aul'     ,'0','1','0','17','0','2','0','0','0','24','0','41'],
        ['Rojo'        ,'0','2','0','0','0','4','0','0','0','0','0','13'],
        ['Amarillo'  ,'0','3','84','26','0','7','0','0','0','7','34','0'],
        ['Naranja'    ,'0','4','0','0','0','8','0','34','7','0','0','0'],
        ['Total','23','5','4','7','0','10','0','0','16','0','0','0']
      ];
  
        $scope.plataformaPagoFactura = [
          ['Aul'     ,'0','1','0','17','0','2','0','0','0','24','0','41'],
          ['Rojo'        ,'0','2','0','0','0','4','0','0','0','0','0','13'],
          ['Amarillo'  ,'0','3','84','26','0','7','0','0','0','0','34','0'],
          ['Naranja'    ,'0','4','0','0','0','8','0','34','0','0','0','0'],
          ['Total','23','5','4','0','0','10','0','0','16','0','0','0']
        ];
  
        $scope.plataformaRecargas = [
          ['Aul'     ,'0','1','0','17','0','2','0','0','0','24','0','41'],
          ['Rojo'        ,'0','2','0','0','0','4','0','0','0','0','0','13'],
          ['Amarillo'  ,'0','3','84','26','0','0','7','0','0','7','34','0'],
          ['Naranja'    ,'0','4','0','0','0','8','0','34','0','0','0','0'],
          ['Total','23','5','4','7','0','10','0','0','16','0','0','0']
        ];

    $scope.accesorios = { 
      table: $scope.canalAccesorios,
        chart:[
          {
            fill: false,
            label: "IVR Visual",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#CAA2DD',
            data: [],
          },
          {
            fill: false,
            label: "IVR Voz",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#9063CD',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#71C5E8',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#0568AE',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#FFB81C',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#EA7400',
            data: [],
          },
          {
            fill: false,
            label: "Total",
            backgroundColor: '#009FDB',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#009FDB',
            data: []
          }
      ] 
    };

    $scope.pagoFactura = { 
      table: $scope.canalPagoFactura,
        chart:[
          {
            fill: false,
            label: "IVR Visual",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#CAA2DD',
            data: [],
          },
          {
            fill: false,
            label: "IVR Voz",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#9063CD',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#71C5E8',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#0568AE',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#FFB81C',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#EA7400',
            data: [],
          },
          {
            fill: false,
            label: "Total",
            backgroundColor: '#009FDB',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#009FDB',
            data: []
          }
      ] 
    };

    

    $scope.recargas = { 
      table: $scope.canalRecargas,
        chart:[
          {
            fill: false,
            label: "IVR Visual",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#CAA2DD',
            data: [],
          },
          {
            fill: false,
            label: "IVR Voz",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#9063CD',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#71C5E8',
            data: [],
          },
          {
            fill: false,
            label: "Mi AT&T Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#0568AE',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Móvil",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#FFB81C',
            data: [],
          },
          {
            fill: false,
            label: "Mi Unefon Web",
            backgroundColor: '#ffffff',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#EA7400',
            data: [],
          },
          {
            fill: false,
            label: "Total",
            backgroundColor: '#009FDB',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderWidth: 2,
            borderColor: '#009FDB',
            data: []
          }
      ] 
    };

    

  var titles = [
    {of:"May 26, 2018", to:"" },
    {of:"May 01, 2018", to:"May 26, 2018" },
    {of:"May 01, 2018", to:"May 26, 2018" },
  ]

  this.isString = function(val){
      return isNaN(val);
  }

  $scope.chartDisplayAll = false;
  $scope.toggleChart = function(){
    !$scope.chartDisplayAll ? $scope.full() : $scope.min();
  };
  $scope.full = function(){
    $scope.chartDisplayAll = true;
    $scope.preFactory();
  };
  $scope.min = function(){
    $scope.chartDisplayAll = false;
    $scope.preFactory();
  };

    $scope.pageIndex = 0;
    this.mainOptions = {
      sectionsColor: ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(255,255,255)'],
      navigation: true,
      scrollingSpeed: 1000,
      change: (page, next) => {
       $scope.pageIndex = next - 1;
       $scope.preFactory();
      }
    };

    $scope.parseChart = function(obj){
      for(var i in obj.table){
            obj.chart[i].data = obj.table[i].slice(1);
      }
    };
    $scope.parseChart($scope.accesorios);
    $scope.parseChart($scope.pagoFactura);
    $scope.parseChart($scope.recargas);



    $scope.preFactory = function(){
      var chart = [];
      var newChart = [];
      switch($scope.pageIndex){
        case 0: chart = $scope.accesorios.chart; break;
        case 1: chart = $scope.pagoFactura.chart; break;
        case 2: chart = $scope.recargas.chart; break;
      };

      if($scope.chartDisplayAll){
        newChart = chart;
      }else{
        newChart[0] = chart[chart.length - 1];
      }
      $scope.factoryBar(newChart, 'myChart1');
    };
   

    $scope.factoryBar = function(obj, id){
      var ctx = document.getElementById(id).getContext('2d');
          Chart.defaults.global.defaultFontSize = 8;
          $scope.chart && $scope.chart.destroy();
          $scope.chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
              datasets: obj
          },

          // Configuration options go here
          options: {
              responsive: true, 
              maintainAspectRatio: false, 
              legend: {
                  display: true
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }

          }
      });
  };

  $scope.preFactory();
    // $scope.factoryBar($scope.accesorios.chart,  'myChart1');
    // $scope.factoryBar($scope.pagoFactura.chart, 'myChart2');
    // $scope.factoryBar($scope.recargas.chart,    'myChart3');

    $scope.tabs = [
      { title: "Canal", active: true, jsons: {
        accesorios: $scope.canalAccesorios,
        pagoFactura: $scope.canalPagoFactura,
        recargas: $scope.canalRecargas
      } },
      { title: "Plataforma", active: false, jsons: {
        accesorios: $scope.plataformaAccesorios,
        pagoFactura: $scope.plataformaPagoFactura,
        recargas: $scope.plataformaRecargas
      }}
    ];
    $scope.tabsToggle = function(tab){
      for(var i in $scope.tabs){
        $scope.tabs[i].active = false;
      }
      tab.active = true;
      $scope.accesorios.table = tab.jsons.accesorios;
      $scope.pagoFactura.table = tab.jsons.pagoFactura;
      $scope.recargas.table = tab.jsons.recargas;

      $scope.parseChart($scope.accesorios);
      $scope.parseChart($scope.pagoFactura);
      $scope.parseChart($scope.recargas);

      $scope.preFactory();
      // $scope.factoryBar($scope.accesorios.chart,  'myChart1');
      // $scope.factoryBar($scope.pagoFactura.chart, 'myChart2');
      // $scope.factoryBar($scope.recargas.chart,    'myChart3');

    };



  }

})();
