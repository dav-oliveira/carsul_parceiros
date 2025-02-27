// Inicialização do carrossel
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Setas de navegação
    responsive: [
        {
            breakpoint: 768, // Para dispositivos menores
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false // Remove setas em telas menores
            }
        }
    ]
});

// Manipulação do pop-up
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("close-btn");

    // Mostra o pop-up ao carregar a página
    popup.classList.add("ativo");

    // Fecha ao clicar no botão de fechar
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("ativo");
    });

    // Fecha ao clicar fora do conteúdo do pop-up
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("ativo");
        }
    });
});
