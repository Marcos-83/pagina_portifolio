const btnAbrirMenu = document.getElementById('btn-abrir-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnAbrirMenu.addEventListener('click', ()=> {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=> {
    menuMobile.classList.remove('abrir-menu');
});