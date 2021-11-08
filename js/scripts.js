var listaProdutos = [ [0, 'Ferrari F8 Tributo', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/ferrari_f8_tributo.jpg?itok=1TG8_Tnx', false],
                      [1, 'Lamborghini Huracán Evo', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/huracan-evo-.jpg?itok=8Yc8R3_R', false],
                      [2, 'Ford GT', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/ford-gt_1.jpg?itok=RTPBCvpp', false]]
var carrinho = []

window.onload = function () {
  montarCardProdutos()
}

function montarCardProdutos() {
  document.getElementById('div-produto').innerHTML = ''

  for(var i = 0; i < listaProdutos.length; i++) {
    var conteudo = ''
    conteudo += `<div class="w3-card-4">`
    conteudo += `<img class="card-img" src="` + listaProdutos[i][2] + `">`
    conteudo += `<p>` + listaProdutos[i][1] + `</p>`
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

  const yOffset = 100; 
  const element = document.getElementById(div);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  if(div == 'div_home')
    window.scrollTo({top: 0, behavior: 'smooth'});
  else
    window.scrollTo({top: y, behavior: 'smooth'});
}