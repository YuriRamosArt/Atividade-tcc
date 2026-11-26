<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

const modal = document.getElementById("modal");

const produtos = {
<<<<<<< Updated upstream

    berserk: {
        nome: "Ruler of the Deep – Berserk",

        imagemPrincipal: "./IMAGENS/berzerkCamisaA.png",

        mini1: "./IMAGENS/berzerkCamisaA.png",
        mini2: "./IMAGENS/berzerkCamisaA.png",
        mini3: "./IMAGENS/berzerkCamisaA.png",

        preco: "R$ 79,99",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Camiseta Ruler of the Deep – Berserk, ideal para quem gosta de unir estilo e personalidade. Uma peça com inspiração no universo Berserk, perfeita para compor looks casuais e esportivos.",

        detalhes: "Camiseta • Estampa Berserk • Uso casual"
    },

    legDay: {
        nome: "Oversized - Leg Day",

        imagemPrincipal: "./IMAGENS/legDayCamisa.png",

        mini1: "./IMAGENS/legDayCamisa.png",
        mini2: "./IMAGENS/legDayCamisa.png",
        mini3: "./IMAGENS/legDayCamisa.png",

        preco: "R$ 79,99",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Camiseta Oversized Leg Day, desenvolvida para quem gosta de demonstrar sua paixão pelo universo fitness. Seu estilo oversized proporciona um visual moderno e descontraído.",

        detalhes: "Camiseta • Modelo Oversized • Estilo Fitness"
    },

    kitRoupa: {
        nome: "Kit 5 Peças Dry Fit",

        imagemPrincipal: "./IMAGENS/kitRoupa.png",

        mini1: "./IMAGENS/kitRoupa.png",
        mini2: "./IMAGENS/kitRoupa.png",
        mini3: "./IMAGENS/kitRoupa.png",

        preco: "R$ 160,00",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Kit composto por 5 peças, sendo 3 camisetas e 2 shorts Dry Fit. Uma opção prática para quem busca variedade de roupas para atividades físicas e treinos.",

        detalhes: "5 peças • 3 camisetas + 2 shorts • Dry Fit"
    },

    kitFitness: {
        nome: "Kit Fitness Top Duplo + Legging",

        imagemPrincipal: "./IMAGENS/kitfitnese.png",

        mini1: "./IMAGENS/kitfitnese.png",
        mini2: "./IMAGENS/kitfitnese.png",
        mini3: "./IMAGENS/kitfitnese.png",

        preco: "R$ 120,00",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Conjunto fitness composto por top duplo e legging. Uma combinação prática para quem procura conforto e estilo durante os exercícios físicos.",

        detalhes: "Conjunto • Top Duplo + Legging • Fitness"
    },

    legging: {
        nome: "Legging Graphite Black",

        imagemPrincipal: "./IMAGENS/legginggraphite.png",

        mini1: "./IMAGENS/legginggraphite.png",
        mini2: "./IMAGENS/legginggraphite.png",
        mini3: "./IMAGENS/legginggraphite.png",

        preco: "R$ 80,90",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Legging Graphite Black, uma peça versátil para compor looks esportivos. Ideal para acompanhar exercícios físicos, treinos e atividades do dia a dia.",

        detalhes: "Legging • Cor Graphite Black • Fitness"
    },

    conjuntoPreto: {
        nome: "Conjunto Preto - Shorts e Top",

        imagemPrincipal: "./IMAGENS/conjutonigger.png",

        mini1: "./IMAGENS/conjutonigger.png",
        mini2: "./IMAGENS/conjutonigger.png",
        mini3: "./IMAGENS/conjutonigger.png",

        preco: "R$ 109,99",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Conjunto fitness na cor preta, composto por shorts e top. Uma combinação versátil para quem procura praticidade e um visual esportivo durante os treinos.",

        detalhes: "Conjunto • Shorts + Top • Cor Preta"
    },

    conjuntoBlue: {
        nome: "Conjunto Blue Light - Calça e Top",

        imagemPrincipal: "./IMAGENS/kitazul.png",

        mini1: "./IMAGENS/kitazul.png",
        mini2: "./IMAGENS/kitazul.png",
        mini3: "./IMAGENS/kitazul.png",

        preco: "R$ 189,99",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Conjunto Blue Light composto por calça e top. Uma opção de roupa fitness para quem deseja combinar estilo e praticidade na hora de praticar atividades físicas.",

        detalhes: "Conjunto • Calça + Top • Blue Light"
    },

    camisetaPreta: {
        nome: "Camiseta - Malha Fina Preta",

        imagemPrincipal: "./IMAGENS/camisapreta.png",

        mini1: "./IMAGENS/camisapreta.png",
        mini2: "./IMAGENS/camisapreta.png",
        mini3: "./IMAGENS/camisapreta.png",

        preco: "R$ 69,99",

        parcelamento: "Consulte as condições de pagamento",

        descricao: "Camiseta preta de malha fina, uma peça básica e versátil para compor diferentes combinações. Ideal para quem procura um visual simples e moderno.",

        detalhes: "Camiseta • Malha Fina • Cor Preta"
    }

};

// ABRIR PRODUTO

function abrirProduto(idProduto) {

=======
    berserk: {
        nome: "Ruler of the Deep – Berserk",
        imagemPrincipal: "./IMAGENS/berzerkCamisaA.png",
        mini1: "./IMAGENS/berzerkCamisaA.png",
        mini2: "./IMAGENS/berzerkCamisaA.png",
        mini3: "./IMAGENS/berzerkCamisaA.png",
        preco: 79.99,
        descricao: "Camiseta Ruler of the Deep – Berserk, ideal para quem gosta de unir estilo e personalidade. Uma peça com inspiração no universo Berserk, perfeita para compor looks casuais e esportivos.",
        detalhes: "Camiseta • Estampa Berserk • Uso casual"
    },
    legDay: {
        nome: "Oversized - Leg Day",
        imagemPrincipal: "./IMAGENS/legDayCamisa.png",
        mini1: "./IMAGENS/legDayCamisa.png",
        mini2: "./IMAGENS/legDayCamisa.png",
        mini3: "./IMAGENS/legDayCamisa.png",
        preco: 79.99,
        descricao: "Camiseta Oversized Leg Day, desenvolvida para quem gosta de demonstrar sua paixão pelo universo fitness. Seu estilo oversized proporciona um visual moderno e descontraído.",
        detalhes: "Camiseta • Modelo Oversized • Estilo Fitness"
    },
    kitRoupa: {
        nome: "Kit 5 Peças Dry Fit",
        imagemPrincipal: "./IMAGENS/kitRoupa.png",
        mini1: "./IMAGENS/kitRoupa.png",
        mini2: "./IMAGENS/kitRoupa.png",
        mini3: "./IMAGENS/kitRoupa.png",
        preco: 160.00,
        descricao: "Kit composto por 5 peças, sendo 3 camisetas e 2 shorts Dry Fit. Uma opção prática para quem busca variedade de roupas para atividades físicas e treinos.",
        detalhes: "5 peças • 3 camisetas + 2 shorts • Dry Fit"
    },
    kitFitness: {
        nome: "Kit Fitness Top Duplo + Legging",
        imagemPrincipal: "./IMAGENS/kitfitnese.png",
        mini1: "./IMAGENS/kitfitnese.png",
        mini2: "./IMAGENS/kitfitnese.png",
        mini3: "./IMAGENS/kitfitnese.png",
        preco: 120.00,
        descricao: "Conjunto fitness composto por top duplo e legging. Uma combinação prática para quem procura conforto e estilo durante os exercícios físicos.",
        detalhes: "Conjunto • Top Duplo + Legging • Fitness"
    },
    legging: {
        nome: "Legging Graphite Black",
        imagemPrincipal: "./IMAGENS/legginggraphite.png",
        mini1: "./IMAGENS/legginggraphite.png",
        mini2: "./IMAGENS/legginggraphite.png",
        mini3: "./IMAGENS/legginggraphite.png",
        preco: 80.90,
        descricao: "Legging Graphite Black, uma peça versátil para compor looks esportivos. Ideal para acompanhar exercícios físicos, treinos e atividades do dia a dia.",
        detalhes: "Legging • Cor Graphite Black • Fitness"
    },
    conjuntoPreto: {
        nome: "Conjunto Preto - Shorts e Top",
        imagemPrincipal: "./IMAGENS/conjutonigger.png",
        mini1: "./IMAGENS/conjutonigger.png",
        mini2: "./IMAGENS/conjutonigger.png",
        mini3: "./IMAGENS/conjutonigger.png",
        preco: 109.99,
        descricao: "Conjunto fitness na cor preta, composto por shorts e top. Uma combinação versátil para quem procura praticidade e um visual esportivo durante os treinos.",
        detalhes: "Conjunto • Shorts + Top • Cor Preta"
    },
    conjuntoBlue: {
        nome: "Conjunto Blue Light - Calça e Top",
        imagemPrincipal: "./IMAGENS/kitazul.png",
        mini1: "./IMAGENS/kitazul.png",
        mini2: "./IMAGENS/kitazul.png",
        mini3: "./IMAGENS/kitazul.png",
        preco: 189.99,
        descricao: "Conjunto Blue Light composto por calça e top. Uma opção de roupa fitness para quem deseja combinar estilo e praticidade na hora de praticar atividades físicas.",
        detalhes: "Conjunto • Calça + Top • Blue Light"
    },
    camisetaPreta: {
        nome: "Camiseta - Malha Fina Preta",
        imagemPrincipal: "./IMAGENS/camisapreta.png",
        mini1: "./IMAGENS/camisapreta.png",
        mini2: "./IMAGENS/camisapreta.png",
        mini3: "./IMAGENS/camisapreta.png",
        preco: 69.99,
        descricao: "Camiseta preta de malha fina, uma peça básica e versátil para compor diferentes combinações. Ideal para quem procura um visual simples e moderno.",
        detalhes: "Camiseta • Malha Fina • Cor Preta"
    }
};

let produtoSelecionado = null;

function obterCarrinho() {
    try {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    } catch {
        return [];
    }
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function formatarPreco(preco) {
    return Number(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function abrirProduto(idProduto) {
>>>>>>> Stashed changes
    const produto = produtos[idProduto];

    if (!produto) {
        console.log("Produto não encontrado!");
        return;
    }

<<<<<<< Updated upstream
    document.getElementById("modalImg").src =
        produto.imagemPrincipal;

    document.getElementById("nomeProduto").textContent =
        produto.nome;

    document.getElementById("precoProduto").textContent =
        produto.preco;

    document.getElementById("parcelamento").textContent =
        produto.parcelamento;

    document.getElementById("desProduto").textContent =
        produto.descricao;

    document.getElementById("detProduto").textContent =
        produto.detalhes;

    document.getElementById("mini1").src =
        produto.mini1;

    document.getElementById("mini2").src =
        produto.mini2;

    document.getElementById("mini3").src =
        produto.mini3;

    document.getElementById("qtdModal").value = 1;
=======
    produtoSelecionado = idProduto;

    document.getElementById("modalImg").src = produto.imagemPrincipal;
    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("precoProduto").textContent = formatarPreco(produto.preco);
    document.getElementById("parcelamento").textContent = "Consulte as condições de pagamento";
    document.getElementById("desProduto").textContent = produto.descricao;
    document.getElementById("detProduto").textContent = produto.detalhes;

    document.getElementById("mini1").src = produto.mini1;
    document.getElementById("mini2").src = produto.mini2;
    document.getElementById("mini3").src = produto.mini3;

    document.getElementById("qtdModal").value = 1;
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    modal.classList.add("ativo");
}

<<<<<<< Updated upstream
// FECHAR MODAL

function fecharModal() {

    modal.classList.remove("ativo");

}

// TROCAR IMAGEM

function trocarImagem(imagem) {

    document.getElementById("modalImg").src =
        imagem.src;

}

// AUMENTAR QUANTIDADE

function aumentarModal() {

    const input = document.getElementById("qtdModal");

    input.value = Number(input.value) + 1;

}

// DIMINUIR QUANTIDADE

function diminuirModal() {

    const input = document.getElementById("qtdModal");

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;
=======
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes

    }

}

<<<<<<< Updated upstream
// QUANTIDADE DOS CARDS

function aumentar(botao) {

    const input = botao.parentElement.querySelector("input");

    input.value = Number(input.value) + 1;

}

function diminuir(botao) {

    const input = botao.parentElement.querySelector("input");

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;

    }

}

// CARRINHO

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const contador = document.getElementById("contadorCarrinho");

function adicionarCarrinho() {

    const produto = {

        nome: document.getElementById("nomeProduto").textContent,

        preco: document.getElementById("precoProduto").textContent,

        img: document.getElementById("modalImg").src,

        quantidade: Number(document.getElementById("qtdModal").value)
=======
function adicionarCarrinho(){

    const produto = {

        nome: modalNome.textContent,
        preco: modalPreco.textContent,
        img: modalImg.src,
        quantidade: qtdAtual
>>>>>>> Stashed changes

    };

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

<<<<<<< Updated upstream
=======
=======
function fecharModal() {
    modal.classList.remove("ativo");
}

function trocarImagem(imagem) {
    document.getElementById("modalImg").src = imagem.src;
}

function aumentarModal() {
    const input = document.getElementById("qtdModal");
    input.value = Math.max(1, Number(input.value) || 1) + 1;
}

function diminuirModal() {
    const input = document.getElementById("qtdModal");
    input.value = Math.max(1, (Number(input.value) || 1) - 1);
}

function aumentar(botao) {
    const input = botao.parentElement.querySelector("input");
    input.value = Math.max(1, Number(input.value) || 1) + 1;
}

function diminuir(botao) {
    const input = botao.parentElement.querySelector("input");
    input.value = Math.max(1, (Number(input.value) || 1) - 1);
}

function adicionarCarrinho() {
    if (!produtoSelecionado || !produtos[produtoSelecionado]) {
        alert("Selecione um produto!");
        return;
    }

    const produto = produtos[produtoSelecionado];
    const quantidade = Math.max(1, Number(document.getElementById("qtdModal").value) || 1);

    const carrinho = obterCarrinho();
    const existente = carrinho.find(item => item.id === produtoSelecionado);

    if (existente) {
        existente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produtoSelecionado,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagemPrincipal,
            quantidade: quantidade
        });
    }

    salvarCarrinho(carrinho);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    atualizarContador();

    alert("Produto adicionado ao carrinho!");

    fecharModal();
<<<<<<< Updated upstream

}

// ATUALIZAR CONTADOR

function atualizarContador() {

    if (contador) {
=======
<<<<<<< Updated upstream

}

function atualizarContador(){

    if(contador){
>>>>>>> Stashed changes

        contador.textContent = carrinho.length;

    }

}

<<<<<<< Updated upstream
// FECHAR CLICANDO FORA DO MODAL

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        fecharModal();

    }

});

atualizarContador();
=======
atualizarContador();
=======
}

function atualizarContador() {
    const contador = document.getElementById("contadorCarrinho");

    if (contador) {
        const carrinho = obterCarrinho();
        const quantidadeTotal = carrinho.reduce((total, item) => total + Number(item.quantidade || 0), 0);
        contador.textContent = quantidadeTotal;
    }
}

if (modal) {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", atualizarContador);
atualizarContador();
>>>>>>> Stashed changes
>>>>>>> Stashed changes
