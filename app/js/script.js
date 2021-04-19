window.onload = function () {
    window.scrollTo(0, 0);
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("body").style.height = "auto";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("body").style.overflowX = "hidden";
  };

  
function navbarToggle() {
  document.getElementById("nav-active").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementById("body").style.height = "100vh";
  document.getElementById("body").style.overflow = "hidden";
}

function navbarClose() {
  document.getElementById("nav-active").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
}

function scrollToTop (){
    window.scrollTo(0, 0);
}