window.onscroll = function() {
    changeNavbarColor();
};

function changeNavbarColor() {
    var navbar = document.getElementById("navbar");
    var scrollTop = window.scrollY;
    var links = navbar.querySelectorAll(".navbar-light .navbar-nav .nav-link");

    // Define os pontos de scroll em pixels
    var startScroll = 200; // Quando a navbar começa a mudar de transparência
    var endScroll = 500; // Quando a navbar se torna totalmente sólida

    // Calcula a opacidade com base na posição de scroll
    var opacity;
    if (scrollTop < startScroll) {
        opacity = 0; // Totalmente transparente
        navbar.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.1)';
        links.forEach(function(link) {
            link.style.color = "#FFFFFF"; // Branco
        });
    } else if (scrollTop >= endScroll) {
        opacity = 0.8;
        navbar.style.boxShadow = '0 1px 5px rgba(0, 0, 0, 0.1)';
        links.forEach(function(link) {
            link.style.color = "#000000"; // Preto
        });
    } else {
        // Calcula a opacidade gradual entre startScroll e endScroll
        opacity = (scrollTop - startScroll) / (endScroll - startScroll);
        navbar.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.1)';
        links.forEach(function(link) {
            link.style.color = "#FFFFFF"; // Preto
        });
    }

    // Aplica a cor de fundo com opacidade crescente conforme o scroll
    navbar.style.backgroundColor = `rgba(244, 245, 247, ${opacity})`; // Cor azul com opacidade

}

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menuMobile = document.querySelector('.menuMobile');

    toggler.addEventListener('click', function () {
        menuMobile.classList.toggle('active');
    });
});