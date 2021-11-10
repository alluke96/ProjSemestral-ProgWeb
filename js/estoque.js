var listaProdutos = [ [0, 'Ferrari F8 Tributo', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/ferrari_f8_tributo.jpg?itok=1TG8_Tnx', false, '3.500.000,00', 3500000],
                      [1, 'Lamborghini Huracán Evo', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/huracan-evo-.jpg?itok=8Yc8R3_R', false, '4.200.000,00', 4200000],
                      [2, 'Ford GT', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/ford-gt_1.jpg?itok=RTPBCvpp', false, '2.100.000,00', 2100000],
                      [3, 'Porsche Cayenne', 'https://cdn.adtechpanda.com/bf4c74a9-9a7a-4f9c-9d26-8203bc2f158e/', false, '459.000,00', 459000],
                      [4, 'Land Rover Range Rover Evoque', 'https://cdn.adtechpanda.com/1101afe7-106a-4b1f-9617-56702bf9c635/', false, '281.000,00', 281000],
                      [5, 'Mercedes Benz GLA', 'https://cdn.adtechpanda.com/83cac15f-276d-4f59-ad55-c4cdf42a0caf/', false, '185.000,00', 185000],
                      [6, 'Volvo XC60 ', 'https://cdn.adtechpanda.com/2ac0ec2a-c71d-4cad-b94a-99e84ecc44a5/', false, '245.000,00', 245000],
                      [7, 'BMW X1', 'https://cdn.adtechpanda.com/c0e99d16-dc26-4636-993a-2b6308c36d7f/', false, '195.000,00', 195000],
                      [8, 'Toyota SW4', 'https://cdn.adtechpanda.com/e7fb3e2c-5762-4631-acad-ba102918ea65/', false, '175.000,00', 175000],
                      [9, 'BMW Série 3', 'https://cdn.adtechpanda.com/eff0c72d-1150-4d0a-b0b2-596077ca17df/', false, '195.000,00', 195000]]
// [id, nome, img, no_carrinho, preco_exibicao, preco_numeral]

var carrinho = []

window.onload = function () {
  montarCardProdutos()
  user = window.localStorage.getItem('user')
    if(user == 'admin'){
      let res = document.getElementById('login')
      res.innerHTML = 'admin'
      res.href = '' // removes the function to open modal
    }
}

function montarCardProdutos() {
  document.getElementById('div-produto').innerHTML = ''

  for(var i = 0; i < listaProdutos.length; i++) {
    var conteudo = ''
    conteudo += `<div class="w3-card-4 w3-margin-bottom">`
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

function comprar(id) {
  listaProdutos[id][3] = true
  carrinho.push(listaProdutos[id])
  window.localStorage.setItem('carrinho', JSON.stringify(carrinho))
  montarCardProdutos()
}


function login(){
  let login = document.getElementById('email_login')
  let senha = document.getElementById('senha_login')
  if(login.value == 'admin' && senha.value == 'admin'){
    let res = document.getElementById('login')
    res.innerText = 'admin'
    alert('Bem vindo admin!')
  }
}

function setResponsiveHamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// When the user scrolls the page, execute scrollLock
window.onscroll = function() {scrollLock(); scrollFunction();}

function scrollLock() {
    var header = document.getElementById("myTopnav");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn_scrollTop").style.display = "block";
  } else {
    document.getElementById("btn_scrollTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToFunction(div) {
  // var elmntToView = document.getElementById(div);
  // elmntToView.scrollIntoView(); 

  const yOffset = 70; 
  const element = document.getElementById(div);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  if(div == 'div_home')
    window.scrollTo({top: 0, behavior: 'smooth'});
  else
    window.scrollTo({top: y, behavior: 'smooth'});
}