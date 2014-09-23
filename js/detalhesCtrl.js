app.controller('detalhesCtrl', function($scope, $http, api, $routeParams) {
	api.getDetalhes($routeParams.id).success(function(data) {
		$scope.detalhes = data;
		// Fixing image link incorrectly inserted in backend
		$scope.detalhes.imagem = $scope.detalhes.imagem.replace(/'/g, "");
	});
});
