app.factory("api", function($http) {
    var endpoint = "https://devweb.nexxera.com/pedidosweb";
    var _getCardapio = function() {
        return $http.get(endpoint + '/cardapio');
    };
    var _getPedidos = function() {
        return $http.get(endpoint + '/pedidos');
    };
    var _adicionarPedido = function(pedido) {
        return $http.post(endpoint + '/pedidos', pedido);
    };
    var _getDetalhes = function(id) {
        return $http.get(endpoint + '/item/' + id);
    };

    return {
        getCardapio : _getCardapio,
        getPedidos : _getPedidos,
        adicionarPedido : _adicionarPedido,
        getDetalhes : _getDetalhes
    };
});
