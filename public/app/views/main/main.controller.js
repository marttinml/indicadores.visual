;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$scope', '$http'];

  function MainController($state, $scope, $http){

    var _this = this;

    $scope.colors = ['#4CA90C','#4CA90C','#71C5E8','#71C5E8','#FFB81C','#FFB81C','#009FDB'];


    $scope.header = ['Canal','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct'];
    $http.get("../../../1.json").success(function (data) { $scope.canalaccesos = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../2.json").success(function (data) { $scope.canalPagoFactura = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../3.json").success(function (data) { $scope.canalRecargas = data; console.log(data); }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../4.json").success(function (data) { $scope.plataformaaccesos = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../5.json").success(function (data) { $scope.plataformaPagoFactura = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../6.json").success(function (data) { $scope.plataformaRecargas = data; }).error(function (data) {console.log("there was an error"); });



  $scope.isString = function(val){
      return isNaN(val);
  }

  $scope.chartDisplayAll = false;
  $scope.toggleChart = function(){
    !$scope.chartDisplayAll ? $scope.full() : $scope.min();
  };
  $scope.fullScreen = false;
  $scope.labelChart = '';
  $scope.lastWrapper = '';
  $scope.lastChart = '';
  $scope.full = function(obj, label, id, lastWrapper){
    var element = document.getElementById(id);
    var xd = document.getElementById('xd');
    var wrapper = document.getElementById('wrapper');
    wrapper.style.top = (element.offsetTop - 70) + 'px';
    setTimeout(function(){
      $scope.labelChart = label;
      $scope.lastWrapper = lastWrapper;
      $scope.lastChart = id;
      $scope.fullScreen = true;
      wrapper.style.visibility = 'visible';
      angular.element(xd).append(element);
      $scope.$apply();
    },50);
  };
  $scope.min = function(){
    $scope.fullScreen = false;
    // $scope.chartfill.destroy();
    var element = document.getElementById($scope.lastChart);

    setTimeout(function(){
      wrapper.style.visibility = 'hidden';
      angular.element(document.getElementById($scope.lastWrapper)).append(element);
    },300);
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
        case 0: chart = $scope.accesos.chart; break;
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
          Chart.defaults.global.defaultFontSize = 10;
          // $scope.chart && $scope.chart.destroy();
          var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct'],
              datasets: obj
          },
          options: {
              responsive: true, 
              maintainAspectRatio: false,
              legend: {
                  // onClick: (e) => e.stopPropagation(),
                  display: true,
                  labels: {
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
      return myChart;
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
            labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct'],
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
    };

    $scope.init = function(){

      $scope.accesos = { 
        table: $scope.canalaccesos,
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
        { title: "Datos por Canal", active: true, jsons: {
          accesos: $scope.canalaccesos,
          pagoFactura: $scope.canalPagoFactura,
          recargas: $scope.canalRecargas
        } },
        { title: "Graficas por Canal", active: false, jsons: {
          accesos: $scope.plataformaaccesos,
          pagoFactura: $scope.plataformaPagoFactura,
          recargas: $scope.plataformaRecargas
        }}
      ];

      $scope.parseChart($scope.accesos);
      $scope.parseChart($scope.pagoFactura);
      $scope.parseChart($scope.recargas);

      $scope.factoryLine($scope.accesos.chart, 'myChart1');
      $scope.factoryLine($scope.pagoFactura.chart, 'myChart2');
      $scope.factoryLine($scope.recargas.chart, 'myChart3');

    };



    setTimeout(function(){
      $scope.init();
      $scope.$apply();
    },500);

  }

})();
