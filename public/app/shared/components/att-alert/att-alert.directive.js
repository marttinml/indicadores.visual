(function(){


	var directive = function(){
		
		var link = function(scope, element, attrs){
			// scope.h1 = scope.h1 || 'h1';
			// scope.h2 = scope.h2 || 'h2';
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/att-alert/att-alert.template.html',
	        link: link,
			scope:{
				options:'=?options',
			}
		};

	};
	


	angular.module('app').directive('attAlert',directive);
})();