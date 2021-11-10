var listaCarrinho = []
// localStorage.clear(); - Colocar no console

window.onload = function () {
    listaCarrinho = JSON.parse(window.localStorage.getItem('carrinho'))
    console.log('Carrinho: ', listaCarrinho)
    user = window.localStorage.getItem('user')
    if(user == 'admin'){
      let res = document.getElementById('login')
      res.innerHTML = 'admin'
      res.href = '' // removes the function to open modal
    }

    if(listaCarrinho.length > 0){
        montarCardProdutos()
        precoTotal()
    } else {
        // Carrinho vazio
    }
}

function montarCardProdutos() {
    document.getElementById('div_carrinho').innerHTML = ''
  
    for(var i = 0; i < listaCarrinho.length; i++) {
      var conteudo = ''
      conteudo += `<div class="w3-card-4 w3-white w3-margin content">`
      conteudo += `<img class="card_carrinho w3-margin" src="` + listaCarrinho[i][2] + `">`
      conteudo += `<div class="w3-card-4 w3-black w3-margin">`
      conteudo += `<p class="w3-margin">` + listaCarrinho[i][1] + `</p>`
      conteudo += `<p> R$ ` + listaCarrinho[i][4] + `</p>`
      conteudo += `</div>`
      conteudo += `<button class="w3-button w3-red w3-margin" onclick="remover(` + i + `)"> Remover </button>`
      conteudo += `</div>`
      
      document.getElementById('div_carrinho').innerHTML += conteudo
    }
}

function remover(id) {
    // alert(id)
    // delete listaCarrinho[id] // Não funciona pq gera elemento null
    // console.log(listaCarrinho)
    listaCarrinho.splice(id, 1)
    window.localStorage.setItem('carrinho', JSON.stringify(listaCarrinho))
    location.reload()
}

function precoTotal() {
    var precoTotal = 0
    for(var i = 0; i < listaCarrinho.length; i++) {
        precoTotal += listaCarrinho[i][5]
    }
    var conteudo = ''
    conteudo += `<p>Preço total: R$ ` + precoTotal.toFixed(2) + `</p>`
    conteudo += `<button class="w3-button w3-green w3-margin" onclick="finalizarCompra()"> Finalizar Compra </button>`
    document.getElementById('div_total').innerHTML += conteudo
}

function finalizarCompra() {
    alert('Compra finalizada! Obrigado!')
    window.localStorage.setItem('carrinho', '')
    location.reload()
}
