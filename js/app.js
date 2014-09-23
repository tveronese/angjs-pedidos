var app = angular.module('pedidosApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when("/cardapio", { templateUrl : 'cardapio.html', controller : 'pedidosCtrl' } );
	$routeProvider.when("/detalhes/:id", { templateUrl : 'detalhes.html', controller : 'detalhesCtrl' } );
	$routeProvider.otherwise({ redirectTo : '/cardapio' });
});
