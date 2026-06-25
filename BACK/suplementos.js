const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");
const modalNome = document.getElementById("modalNome");
const modalPreco = document.getElementById("modalPreco");
const qtdInput = document.getElementById("qtdModal");

const contador = document.getElementById("contadorCarrinho");

let qtdAtual = 1;
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function aumentar(botao){

    const input = botao.parentElement.querySelector("input");

    input.value = Number(input.value) + 1;
}

function diminuir(botao){

    const input = botao.parentElement.querySelector("input");

    if(Number(input.value) > 1){
        input.value = Number(input.value) - 1;
    }
}

function abrirProduto(botao){

    const card = botao.closest(".cards");

    const img = card.querySelector(".produto").src;
    const nome = card.querySelector(".titulo").textContent;
    const preco = card.querySelector(".preco").textContent;


    const qtdCard = card.querySelector(".quantidade input").value;

    qtdAtual = Number(qtdCard);

    modalImg.src = img;
    modalNome.textContent = nome;
    modalPreco.textContent = preco;
    qtdInput.value = qtdAtual;

    modal.classList.add("ativo");
}

function fecharModal(){
    modal.classList.remove("ativo");
}

modal.addEventListener("click", (e)=>{

    if(e.target === modal){
        fecharModal();
    }

});

function aumentarModal(){

    qtdAtual++;

    qtdInput.value = qtdAtual;
}

function diminuirModal(){

    if(qtdAtual > 1){

        qtdAtual--;

        qtdInput.value = qtdAtual;
    }
}

function adicionarCarrinho(){

    const produto = {

        nome: modalNome.textContent,
        preco: modalPreco.textContent,
        img: modalImg.src,
        quantidade: qtdAtual

    };

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContador();

    alert("Produto adicionado ao carrinho!");

    fecharModal();
}

function atualizarContador(){

    if(contador){

        contador.textContent = carrinho.length;

    }
}

atualizarContador();