angular
    .module("css-trans.directive",[])
    .directive("cssTrans", cssTrans);
    
    
function cssTrans(){
	return {
		restrict : "E",
		template : "<div class='txtseason'></div>"
	};
};
