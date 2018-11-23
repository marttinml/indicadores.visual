;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$scope', '$http'];

  function MainController($state, $scope, $http){

    $scope.header = ['Canal','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct'];
    $http.get("../../../01.json").success(function (data) { $scope.accesos = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../02.json").success(function (data) { $scope.pagoFactura = data; }).error(function (data) {console.log("there was an error"); });
    $http.get("../../../03.json").success(function (data) { $scope.recargas = data; }).error(function (data) {console.log("there was an error"); });

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

  $scope.full = function(obj, label, id, lastWrapper, icon){
    var element = document.getElementById(id);
    var xd = document.getElementById('xd');
    var wrapper = document.getElementById('wrapper');
    wrapper.style.top = (element.offsetTop - 88) + 'px';
    setTimeout(function(){
      $scope.labelChart = label;
      $scope.icon = icon;
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
    var element = document.getElementById($scope.lastChart);

    setTimeout(function(){
      wrapper.style.visibility = 'hidden';
      angular.element(document.getElementById($scope.lastWrapper)).append(element);
    },300);
  };

    $scope.factoryLine = function(obj, id){

      var ctx = document.getElementById(id).getContext('2d');
          Chart.defaults.global.defaultFontSize = 10;
          var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: obj.labels,
              datasets: [
                {
                  fill: false,
                  label: "IVR Visual",
                  backgroundColor: '#009FDB',
                  pointRadius: 4,
                  pointBorderWidth: 2,
                  borderWidth: 1,
                  borderColor: '#009FDB',
                  data: obj.data,
                  hidden: false
                }
              ]
          },
          options: {
              responsive: true, 
              maintainAspectRatio: false,
              legend: {
                  display: false,
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

    $scope.tabsToggle = function(tab){
      for(var i in $scope.tabs){
        $scope.tabs[i].active = false;
      }
      tab.active = true;
    };


    $scope.parseToChart = function(data){
      var obj = { labels:[], data: [] };
      data.reverse();

      for(var i in data){
        var item = data[i];
        var monto = item.monto || item.cantidad;
        monto = monto.replace("$","");
        monto = monto.replace(",","");
        obj.labels.push(item.periodo);
        obj.data.push(monto);
      }
      return obj;
    };

    $scope.init = function(){

      $scope.accesosChart = $scope.parseToChart($scope.accesos);
      $scope.pagoFacturaChart = $scope.parseToChart($scope.pagoFactura);
      $scope.recargasChart = $scope.parseToChart($scope.recargas);

      $scope.factoryLine($scope.accesosChart, 'myChart1');
      $scope.factoryLine($scope.pagoFacturaChart, 'myChart2');
      $scope.factoryLine($scope.recargasChart, 'myChart3');

    };



    setTimeout(function(){
      $scope.init();
      $scope.$apply();
    },500);

  }

})();
