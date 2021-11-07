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