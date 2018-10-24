;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$scope', '$http'];

  function MainController($state, $scope, $http){

    var _this = this;

    $scope.colors = ['#CAA2DD','#9063CD','#71C5E8','#0568AE','#FFB81C','#EA7400','#009FDB'];


    $scope.header = ['Canal','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    $http.get("../../../1.json").success(function (data) { $scope.canalAccesorios = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../2.json").success(function (data) { $scope.canalPagoFactura = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../3.json").success(function (data) { $scope.canalRecargas = data; console.log(data); }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../4.json").success(function (data) { $scope.plataformaAccesorios = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../5.json").success(function (data) { $scope.plataformaPagoFactura = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../6.json").success(function (data) { $scope.plataformaRecargas = data; }).error(function (data) {console.log("there was an error"); });



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
      var item = {
        fill: false,
        label: "IVR Visual",
        backgroundColor: '#CAA2DD',
        pointRadius: 4,
        pointBorderWidth: 2,
        borderWidth: 1,
        borderColor: '#CAA2DD',
        data: [],
        hidden: true
      };
      
      obj.chart = [];
      for(var i in obj.table){
          obj.chart[i] = angular.copy(item);
          obj.chart[i].label = obj.table[i][0];
          obj.chart[i].backgroundColor = $scope.colors[i];
          obj.chart[i].borderColor = $scope.colors[i];
          obj.chart[i].data = obj.table[i].slice(1);
          console.log(i);
          if(obj.table.length === (Number(i)+1)){
            obj.chart[i].hidden = false;
            obj.chart[i].borderWidth = 2;
          }
      }
    };

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
      $scope.factoryLine(newChart, 'myChart1');
      // $scope.factoryBar(newChart, 'myChart1');

    };
   

    $scope.factoryLine = function(obj, id){

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
            legendCallback: function(chart) {
              // Return the HTML string here.
          console.log(chart);
            },
              responsive: true, 
              maintainAspectRatio: false, 
              legend: {
                  display: true,
                  labels: {
                      // fontColor: 'rgb(255, 99, 132)'
                      boxWidth: 10,
                      boxHeight: 20

                  }
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

  $scope.factoryBar = function(obj, id){
    var ctx = document.getElementById(id).getContext('2d');
        Chart.defaults.global.defaultFontSize = 8;
        $scope.chart && $scope.chart.destroy();
        $scope.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

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
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }

        }
    });
};

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

    };

    $scope.init = function(){

      $scope.accesorios = { 
        table: $scope.canalAccesorios,
          chart:[] 
      };
  
      $scope.pagoFactura = { 
        table: $scope.canalPagoFactura,
          chart:[] 
      };
      $scope.recargas = { 
        table: $scope.canalRecargas,
          chart:[] 
      };

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

      $scope.parseChart($scope.accesorios);
      $scope.parseChart($scope.pagoFactura);
      $scope.parseChart($scope.recargas);
      $scope.preFactory();
    };



    setTimeout(function(){
      $scope.init();
      $scope.$apply();
    },500);

  }

})();
