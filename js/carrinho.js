var listaCarrinho = []

window.onload = function () {
    listaCarrinho = JSON.parse(window.localStorage.getItem('carrinho'))
    console.log('Carrinho: ', listaCarrinho)
    user = window.localStorage.getItem('user')
    if(user == 'admin'){
      let res = document.getElementById('login')
      res.innerHTML = 'admin'
      res.href = '' // removes the function to open modal
    }

    if(listaCarrinho != null){
        montarCardProdutos()
    }
}

function montarCardProdutos() {
    document.getElementById('div_carrinho').innerHTML = ''
  
    for(var i = 0; i < listaCarrinho.length; i++) {
      var conteudo = ''
      conteudo += `<div class="w3-card-4 w3-margin-bottom w3-white crush">`
      conteudo += `<img class="card_carrinho w3-margin-top" src="` + listaCarrinho[i][2] + `">`
      conteudo += `<p>` + listaCarrinho[i][1] + `</p>`
      conteudo += `<p class="price"> R$ ` + listaCarrinho[i][4] + `</p>`
      conteudo += `<button class="w3-button w3-red w3-margin-bottom" onclick="comprar(` + listaCarrinho[i][0] + `)"> Remover </button>`
      conteudo += `</div>`
      
  
      document.getElementById('div_carrinho').innerHTML += conteudo
    }
  }