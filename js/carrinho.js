var listaCarrinho = []

window.onload = function () {
    listaCarrinho = JSON.parse(window.localStorage.getItem('carrinho'))
    console.log('Carrinho: ', listaCarrinho)
}

function montarCardProdutos() {
    document.getElementById('div-produto').innerHTML = ''
  
    for(var i = 0; i < listaProdutos.length; i++) {
      var conteudo = ''
      conteudo += `<div class="w3-card-4">`
      conteudo += `<img class="card-img" src="` + listaProdutos[i][2] + `">`
      conteudo += `<p>` + listaProdutos[i][1] + `</p>`
      conteudo += `<p class="price"> R$ ` + listaProdutos[i][4] + `</p>`
      if(listaProdutos[i][3] == false) {
        conteudo += `<button class="w3-button w3-green" onclick="comprar(` + listaProdutos[i][0] + `)"> Comprar </button>`
        conteudo += `</div>`
      } else {
        conteudo += `<button class="w3-button w3-disabled" onclick="comprar(` + listaProdutos[i][0] + `) disabled"> Adicionado ao carrinho </button>`
        conteudo += `</div>`
      }
      
  
      document.getElementById('div-produto').innerHTML += conteudo
    }
  }