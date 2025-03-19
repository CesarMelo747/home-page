document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#carouselExample");
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Cambia de imagen cada 3 segundos
        wrap: true // Permite la rotación infinita
    });

    carouselElement.addEventListener("mouseover", function () {
        carousel.pause(); // Pausa el carrusel cuando el usuario pasa el mouse sobre él
    });

    carouselElement.addEventListener("mouseleave", function () {
        carousel.cycle(); // Reanuda el carrusel cuando el usuario retira el mouse
    });
});
