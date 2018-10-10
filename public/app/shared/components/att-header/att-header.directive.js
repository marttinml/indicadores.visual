(function(){


	var directive = function(){
		
		var link = function(scope, element, attrs){
			scope.h1 = scope.h1 || 'h1';
			scope.h2 = scope.h2 || 'h2';
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/att-header/att-header.template.html',
	        link: link,
			scope:{
				h1:'=?h1',
				h2:'=?h2'
			}
		};

	};
	


	angular.module('app').directive('attHeader',directive);
})();