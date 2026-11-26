const modal = document.getElementById("modal");

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
const modalImg = document.getElementById("modalImg");
const modalNome = document.getElementById("modalNome");
const modalPreco = document.getElementById("modalPreco");
const qtdInput = document.getElementById("qtdModal");

const contador = document.getElementById("contadorCarrinho");

let qtdAtual = 1;
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function aumentar(botao){

    const input = botao.parentElement.querySelector("input");

=======
>>>>>>> Stashed changes
const produtos = {

    wheyMax: {
        nome: "MAXWHEY Baunilha - 900g",

        imagemPrincipal: "./IMAGENS/wheyMax.png",

        mini1: "./IMAGENS/tabelaWhey.png",
        mini2: "./IMAGENS/scupWhey.png",
        mini3: "./IMAGENS/copoWhey.png",

        preco: "R$ 49,99",

        parcelamento: "ou 3x de R$ 16,66 sem juros",

        descricao: "Whey protein sabor baunilha, ideal para complementar sua alimentação e auxiliar na ingestão diária de proteínas.",

        detalhes: "900g • Sabor Baunilha • Suplemento proteico"
    },
    wheyFresh: {
        nome: "FRESHWHEY Chocolate e Avelã - 900g",

        imagemPrincipal: "./IMAGENS/wheyFresh.png",

        mini1: "./IMAGENS/wheyFresh.png",
        mini2: "./IMAGENS/wheyFresh.png",
        mini3: "./IMAGENS/wheyFresh.png",

        preco: "R$ 110,99",

        parcelamento: "ou 3x de R$ 37,00 sem juros",

        descricao: "Whey protein sabor chocolate e avelã, ideal para complementar a ingestão diária de proteínas. Uma opção saborosa e prática para fazer parte da sua alimentação.",

        detalhes: "900g • Chocolate e Avelã • Suplemento proteico"
    },

    creatina: {
        nome: "DARKLAB Creatina - 350g",

        imagemPrincipal: "./IMAGENS/creatina.png",

        mini1: "./IMAGENS/creatina.png",
        mini2: "./IMAGENS/creatina.png",
        mini3: "./IMAGENS/creatina.png",

        preco: "R$ 49,99",

        parcelamento: "ou 3x de R$ 16,66 sem juros",

        descricao: "Creatina em pó da DARKLAB, um suplemento utilizado para complementar a alimentação de quem pratica atividades físicas. Ideal para quem busca incluir a creatina na sua rotina de treinos.",

        detalhes: "350g • Creatina em pó • DARKLAB"
    },

    cafeina: {
        nome: "GROWTH Cafeína - 200mg",

        imagemPrincipal: "./IMAGENS/cafeina.png",

        mini1: "./IMAGENS/cafeina.png",
        mini2: "./IMAGENS/cafeina.png",
        mini3: "./IMAGENS/cafeina.png",

        preco: "R$ 49,99",

        parcelamento: "ou 3x de R$ 16,66 sem juros",

        descricao: "Suplemento de cafeína da GROWTH, apresentado na concentração de 200mg. Produto destinado a complementar a rotina de pessoas que buscam informações sobre suplementação esportiva.",

        detalhes: "200mg • Cafeína • GROWTH"
    },

    raze: {
        nome: "DARKLAB Raze Pré-Treino - 350g",

        imagemPrincipal: "./IMAGENS/dark_raze.png",

        mini1: "./IMAGENS/dark_raze.png",
        mini2: "./IMAGENS/dark_raze.png",
        mini3: "./IMAGENS/dark_raze.png",

        preco: "R$ 59,99",

        parcelamento: "ou 3x de R$ 20,00 sem juros",

        descricao: "Pré-treino da DARKLAB, apresentado em embalagem de 350g. Uma opção de suplemento voltada ao público que pratica atividades físicas e procura conhecer produtos da categoria pré-treino.",

        detalhes: "350g • Pré-treino • DARKLAB"
    },

    wheyFreshMorango: {
        nome: "FRESHWHEY Frutas Vermelhas - 900g",

        imagemPrincipal: "./IMAGENS/wheyFreshMorango.png",

        mini1: "./IMAGENS/wheyFreshMorango.png",
        mini2: "./IMAGENS/wheyFreshMorango.png",
        mini3: "./IMAGENS/wheyFreshMorango.png",

        preco: "R$ 110,99",

        parcelamento: "ou 3x de R$ 37,00 sem juros",

        descricao: "Whey protein sabor frutas vermelhas, desenvolvido para complementar a ingestão diária de proteínas. Uma alternativa para quem prefere sabores frutados na sua rotina alimentar.",

        detalhes: "900g • Frutas Vermelhas • Suplemento proteico"
    }

}

function abrirProduto(idProduto) {

    const produto = produtos[idProduto];

    if (!produto) {
        console.log("Produto não encontrado");
        return;
    }

    document.getElementById("modalImg").src = produto.imagemPrincipal;

    document.getElementById("nomeProduto").textContent = produto.nome;

    document.getElementById("precoProduto").textContent = produto.preco;

    document.getElementById("parcelamento").textContent = produto.parcelamento;

    document.getElementById("desProduto").textContent = produto.descricao;

    document.getElementById("detProduto").textContent = produto.detalhes;

    document.getElementById("mini1").src = produto.mini1;

    document.getElementById("mini2").src = produto.mini2;

    document.getElementById("mini3").src = produto.mini3;

    document.getElementById("qtdModal").value = 1;

    modal.style.display = "flex";
}


function fecharModal() {
    modal.style.display = "none";
}


function trocarImagem(imagem) {
    document.getElementById("modalImg").src = imagem.src;
}


function aumentarModal() {
    const input = document.getElementById("qtdModal");
    input.value = Number(input.value) + 1;
}


function diminuirModal() {
    const input = document.getElementById("qtdModal");
    if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
    }
}


window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
};

function aumentar(botao){
    const input = botao.parentElement.querySelector("input");
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    input.value = Number(input.value) + 1;
}

function diminuir(botao){
<<<<<<< Updated upstream
    const input = botao.parentElement.querySelector("input");
    if(Number(input.value) > 1){
        input.value = Number(input.value) - 1;
    }
}
=======
<<<<<<< Updated upstream

    const input = botao.parentElement.querySelector("input");

=======
    const input = botao.parentElement.querySelector("input");
>>>>>>> Stashed changes
    if(Number(input.value) > 1){
        input.value = Number(input.value) - 1;
    }
}

<<<<<<< Updated upstream
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
=======

/* INTERAÇÃO COM O CARRINHO */


/* =====================================
   INTERAÇÃO COM O CARRINHO AYSI
===================================== */

// Produto atualmente aberto no modal
let produtoSelecionado = null;

// Recuperar carrinho salvo
function obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

// Salvar carrinho
function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

// Converter preço de "R$ 49,99" para 49.99
function converterPreco(preco) {
    return Number(
        preco.replace("R$", "").trim().replace(/\./g, "").replace(",", ".")
    );
}

// Atualizar contador do cabeçalho
function atualizarContadorCarrinho() {
    const contador = document.getElementById("contadorCarrinho");

    if (!contador) return;

    const carrinho = obterCarrinho();

    const quantidadeTotal = carrinho.reduce((total, produto) => {
        return total + produto.quantidade;
    }, 0);

    contador.textContent = quantidadeTotal;
}

// Identificar o produto aberto no modal
function abrirProduto(idProduto) {

    const produto = produtos[idProduto];

    if (!produto) {
        console.log("Produto não encontrado");
        return;
    }

    produtoSelecionado = idProduto;

    document.getElementById("modalImg").src = produto.imagemPrincipal;
    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("precoProduto").textContent = produto.preco;
    document.getElementById("parcelamento").textContent = produto.parcelamento;
    document.getElementById("desProduto").textContent = produto.descricao;
    document.getElementById("detProduto").textContent = produto.detalhes;

    document.getElementById("mini1").src = produto.mini1;
    document.getElementById("mini2").src = produto.mini2;
    document.getElementById("mini3").src = produto.mini3;

    document.getElementById("qtdModal").value = 1;

    modal.style.display = "flex";
}

// Adicionar produto ao carrinho
function adicionarProdutoCarrinho() {

    if (!produtoSelecionado) {
        alert("Selecione um produto primeiro!");
        return;
    }

    const produto = produtos[produtoSelecionado];

    const quantidade = Number(
        document.getElementById("qtdModal").value
    );

    if (!Number.isInteger(quantidade) || quantidade < 1) {
        alert("Selecione uma quantidade válida!");
        return;
    }

    let carrinho = obterCarrinho();

    // Verificar se o produto já existe
    const produtoExistente = carrinho.find(item => {
        return item.id === produtoSelecionado;
    });

    if (produtoExistente) {

        // Somar quantidade
        produtoExistente.quantidade += quantidade;

    } else {

        // Cadastrar novo produto
        carrinho.push({
            id: produtoSelecionado,
            nome: produto.nome,
            preco: converterPreco(produto.preco),
            imagem: produto.imagemPrincipal,
            quantidade: quantidade
        });

    }

    salvarCarrinho(carrinho);
>>>>>>> Stashed changes

    alert("Produto adicionado ao carrinho!");

    fecharModal();
}

<<<<<<< Updated upstream
function atualizarContador(){

    if(contador){

        contador.textContent = carrinho.length;

    }
}

atualizarContador();
=======
// Atualizar contador quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    atualizarContadorCarrinho();
});

// Atualizar contador também nesta página
atualizarContadorCarrinho();
>>>>>>> Stashed changes
>>>>>>> Stashed changes
