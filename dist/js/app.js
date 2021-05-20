//Nav item
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navMenu = document.querySelector('.navmenu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    showMenu = false;
  }
} //End nav item

// fadeOut navmenu when click any link 
let navLinks = navMenu.querySelectorAll('a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    hamburger.click();
  });
}


//Img Gallery
// Get the elements with class="column"
var elements = document.getElementsByClassName("col");

// Declare a loop variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%"; // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%"; // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "33.333%"; // IE10
    elements[i].style.flex = "33.333%";
  }
}
//End Gallery

// jQuery
//Venobox
(function () {
//  Smooth Scrolling 
$('a[href^="#"]').on('click',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
//This is the  height of sticky navbar (-....)
let scrollto = $target.offset().top - $('header').height();
  $('html, body').stop().animate({
      'scrollTop': scrollto
  }, 900);
});

  $('.venobox').venobox();
})();