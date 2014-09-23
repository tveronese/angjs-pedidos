app.controller('pedidosCtrl', function($scope, $http, api) {
    $scope.cardapio = [];
    $scope.pedidos = [];
    var carregarCardapio = function() {
        api.getCardapio().success(function(data) {
            $scope.cardapio = data;
        });
    };
    carregarCardapio();
    var carregarPedidos = function() {
        api.getPedidos().success(function(data) {
            $scope.pedidos = data;
            $scope.atualizarValorPedido();
        });
    };
    carregarPedidos();
    $scope.ordenarCardapio = function(descricaoDoCampo) {
        $scope.campoOrdemCardapio = descricaoDoCampo;
        $scope.direcaoOrdemCardapio = !$scope.direcaoOrdemCardapio;
    };
    $scope.adicionarPedido = function(pedido) {
        api.adicionarPedido(pedido).success(function() {
            delete $scope.pedido;
            $scope.pedidoForm.$setPristine();
            carregarPedidos();
        });
    };
    $scope.atualizarValorPedido = function() {
        $scope.valorTotalPedido = 0;
        for (var i = 0; i < $scope.pedidos.length; i++) {
            var pedido = $scope.pedidos[i];
            $scope.valorTotalPedido += pedido.item.preco * pedido.quantidade;
        }
    };
    $scope.cancelarPedido = function(pedido) {
        var i = $scope.pedidos.indexOf(pedido);
        $scope.pedidos.splice(i, 1);
        $http.delete(endpoint + '/pedidos/' + pedido.item.id)
        .success(function() {
            carregarPedidos();
        })
        .error(function(data) {
            alert('erro ao cancelarPedido: ' + data);
        });
    };
    $scope.validarInput = function(campo) {
        return campo.$valid || campo.$pristine;
    };
});