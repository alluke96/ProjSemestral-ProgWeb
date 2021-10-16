function cadastro(){
    alert("TODO")
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
window.onscroll = function() {scrollLock()};

function scrollLock() {
    var header = document.getElementById("myTopnav");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}