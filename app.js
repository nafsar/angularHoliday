var app = angular.module("myApp", []);

app.directive("cssTrans", function() {
	return {
		restrict : "E",
		template : "<div class='txtseason'></div>"
	};
});
