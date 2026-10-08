const modal = document.getElementById("modal");

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
    input.value = Number(input.value) + 1;
}

function diminuir(botao){
    const input = botao.parentElement.querySelector("input");
    if(Number(input.value) > 1){
        input.value = Number(input.value) - 1;
    }
}