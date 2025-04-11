// main.js
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let cerrado = true;

function menus() {
  let desplazamientoActual = window.pageYOffset;

  if (desplazamientoActual <= 300) {
    nav.classList.remove('nav2');
    nav.className = 'nav1';
    nav.style.transition = '1s';
    menu.style.top = '80px';
    abrir.style.color = '#fff';
  } else {
    nav.classList.remove('nav1');
    nav.className = 'nav2';
    nav.style.transition = '1s';
    menu.style.top = '100px';
    abrir.style.color = '#000';
  }
}

function apertura() {
  if (cerrado) {
    menu.style.width = '70vw';
    cerrado = false;
  } else {
    menu.style.width = '0%';
    menu.style.overflow = 'hidden';
    cerrado = true;
  }
}

window.addEventListener('load', function () {
  $('#onload').fadeOut();
  document.body.classList.remove('hidden');
  menus();
});

abrir.addEventListener('click', apertura);

window.addEventListener('scroll', menus);
window.addEventListener('resize', function () {
  if (screen.width >= 700) {
    cerrado = true;
    menu.style.removeProperty('overflow');
    menu.style.removeProperty('width');
  }
});
