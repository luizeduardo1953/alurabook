const menuHamburguer = document.querySelector('.cabecalho__menu-hamburguer');
const ul = document.querySelector('.lista-menu');
const menuCategorias = document.querySelector('.opcoes__item');
const cabecalho = document.querySelector('.cabecalho');


menuHamburguer.addEventListener('click', () => {
    if (ul.style.display === 'block') {
        ul.style.display = 'none';
        menuHamburguer.style.background = "var(--branco) url('../img/Menu.svg') no-repeat center";
    } else {
        ul.style.display = 'block';
        menuHamburguer.style.background = "var(--font-azul) url('../img/MenuAberto.svg') no-repeat center";
    }
});





