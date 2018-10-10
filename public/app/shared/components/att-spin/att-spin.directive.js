(function(){


	var directive = function(){
		
		var link = function(scope, element, attrs, ngModelCtrl){
			
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/att-spin/att-spin.template.html',
	        transclude: true,
	        link: link,
			scope:{
				
			}
		};

	};
	

	angular.module('app')
		.directive('attSpin',directive);
})();