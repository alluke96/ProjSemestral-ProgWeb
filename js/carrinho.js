var listaCarrinho = []

window.onload = function () {
    listaCarrinho = JSON.parse(window.localStorage.getItem('carrinho'))
    console.log('Carrinho: ', listaCarrinho)
}