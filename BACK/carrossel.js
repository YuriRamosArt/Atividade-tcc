const banner = document.querySelector(".banner");
const imagens = document.querySelectorAll(".banner img");

let indice = 0;

function mostrarSlide() {
    banner.style.transform = `translateX(-${indice * 100}%)`;
}

// Botão direita
document.querySelector(".direita").addEventListener("click", () => {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarSlide();
});

// Botão esquerda
document.querySelector(".esquerda").addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    mostrarSlide();
});

// Troca automática
setInterval(() => {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarSlide();
}, 5000);