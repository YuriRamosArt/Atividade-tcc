<<<<<<< Updated upstream
const modal = document.getElementById("modal");

const produtos = {

    coqueteleira: {

        nome: "DARKLAB - Coqueteleira 900ml",

        imagemPrincipal: "./IMAGENS/coqueteleira.png",

        preco: "R$ 69,99",

        descricao: "Coqueteleira de 900ml ideal para preparar shakes e suplementos. Prática para levar à academia e utilizar durante sua rotina de treinos.",

        detalhes: "900ml • Coqueteleira • DARKLAB"

    },


    garrafa: {

        nome: "DARKLAB - Garrafa 500ml",

        imagemPrincipal: "./IMAGENS/garrafaGrande.png",

        preco: "R$ 59,99",

        descricao: "Garrafa de 500ml ideal para transportar sua bebida favorita. Compacta e prática, auxilia na hidratação durante os exercícios físicos.",

        detalhes: "500ml • Garrafa esportiva • DARKLAB"

    },


    mochila: {

        nome: "GROWT - Mochila Média",

        imagemPrincipal: "./IMAGENS/mochilaG.png",

        preco: "R$ 99,99",

        descricao: "Mochila de tamanho médio, ideal para transportar roupas, acessórios e objetos pessoais. Uma opção prática para acompanhar sua rotina de treinos.",

        detalhes: "Tamanho médio • Mochila esportiva • GROWT"

    },


    bone: {

        nome: "SHARKPRO - Boné",

        imagemPrincipal: "./IMAGENS/bone.png",

        preco: "R$ 49,99",

        descricao: "Boné esportivo ideal para complementar seu visual no dia a dia e durante atividades ao ar livre. Um acessório prático para sua rotina.",

        detalhes: "Boné • Acessório esportivo • SHARKPRO"

    },


    elastico: {

        nome: "SHARKPRO - Elástico",

        imagemPrincipal: "./IMAGENS/elastico.png",

        preco: "R$ 39,99",

        descricao: "Elástico de treino indicado para exercícios de resistência, alongamento e fortalecimento muscular. Um acessório versátil para diferentes atividades.",

        detalhes: "Elástico de treino • Resistência • SHARKPRO"

    },


    strap: {

        nome: "DARKLAB - Strap 1 Par",

        imagemPrincipal: "./IMAGENS/strap.png",

        preco: "R$ 49,99",

        descricao: "Par de straps desenvolvido para auxiliar na pegada durante exercícios de musculação, oferecendo mais firmeza ao segurar barras e pesos.",

        detalhes: "1 par • Strap de musculação • DARKLAB"

    },


    cinturao: {

        nome: "Cinturão Skyhill Gym",

        imagemPrincipal: "./IMAGENS/cinturao.png",

        preco: "R$ 399,90",

        descricao: "Cinturão esportivo desenvolvido para oferecer suporte à região abdominal e lombar durante exercícios de musculação.",

        detalhes: "Cinturão esportivo • Musculação • Skyhill Gym"

    },


    joelheira: {

        nome: "Joelheira Premium Neoprene - 7MM",

        imagemPrincipal: "./IMAGENS/joelheira.png",

        preco: "R$ 179,90",

        descricao: "Joelheira de neoprene com 7mm de espessura, indicada para oferecer compressão e suporte aos joelhos durante os treinos.",

        detalhes: "7MM • Neoprene • Joelheira esportiva"

    }

};


// ======================================
// ABRIR PRODUTO
// ======================================

function abrirProduto(idProduto) {

    const produto = produtos[idProduto];

    if (!produto) {

        console.log("Acessório não encontrado!");

        return;

    }


    // IMAGEM PRINCIPAL
    document.getElementById("modalImg").src =
        produto.imagemPrincipal;


    // NOME
    document.getElementById("modalNome").textContent =
        produto.nome;


    // PREÇO
    document.getElementById("modalPreco").textContent =
        produto.preco;


    // DESCRIÇÃO
    document.getElementById("modalDescricao").textContent =
        produto.descricao;


    // DETALHES
    // Caso exista esse elemento no HTML
    const detalhes = document.getElementById("modalDetalhes");

    if (detalhes) {

        detalhes.textContent = produto.detalhes;

    }


    // QUANTIDADE INICIAL
    document.getElementById("qtdModal").value = 1;


    // ABRIR MODAL
    modal.classList.add("ativo");

}

function fecharModal() {

    modal.classList.remove("ativo");

}

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        fecharModal();
<<<<<<< Updated upstream

=======
=======

const modal = document.getElementById("modal");

const produtos = {

    coqueteleira: {
        id: "coqueteleira",
        nome: "DARKLAB - Coqueteleira 900ml",
        imagemPrincipal: "./IMAGENS/coqueteleira.png",
        preco: 69.99,
        descricao: "Coqueteleira de 900ml ideal para preparar shakes e suplementos. Prática para levar à academia e utilizar durante sua rotina de treinos.",
        detalhes: "900ml • Coqueteleira • DARKLAB"
    },

    garrafa: {
        id: "garrafa",
        nome: "DARKLAB - Garrafa 500ml",
        imagemPrincipal: "./IMAGENS/garrafaGrande.png",
        preco: 59.99,
        descricao: "Garrafa de 500ml ideal para transportar sua bebida favorita. Compacta e prática, auxilia na hidratação durante os exercícios físicos.",
        detalhes: "500ml • Garrafa esportiva • DARKLAB"
    },

    mochila: {
        id: "mochila",
        nome: "GROWT - Mochila Média",
        imagemPrincipal: "./IMAGENS/mochilaG.png",
        preco: 99.99,
        descricao: "Mochila de tamanho médio, ideal para transportar roupas, acessórios e objetos pessoais. Uma opção prática para acompanhar sua rotina de treinos.",
        detalhes: "Tamanho médio • Mochila esportiva • GROWT"
    },

    bone: {
        id: "bone",
        nome: "SHARKPRO - Boné",
        imagemPrincipal: "./IMAGENS/bone.png",
        preco: 49.99,
        descricao: "Boné esportivo ideal para complementar seu visual no dia a dia e durante atividades ao ar livre. Um acessório prático para sua rotina.",
        detalhes: "Boné • Acessório esportivo • SHARKPRO"
    },

    elastico: {
        id: "elastico",
        nome: "SHARKPRO - Elástico",
        imagemPrincipal: "./IMAGENS/elastico.png",
        preco: 39.99,
        descricao: "Elástico de treino indicado para exercícios de resistência, alongamento e fortalecimento muscular. Um acessório versátil para diferentes atividades.",
        detalhes: "Elástico de treino • Resistência • SHARKPRO"
    },

    strap: {
        id: "strap",
        nome: "DARKLAB - Strap 1 Par",
        imagemPrincipal: "./IMAGENS/strap.png",
        preco: 49.99,
        descricao: "Par de straps desenvolvido para auxiliar na pegada durante exercícios de musculação, oferecendo mais firmeza ao segurar barras e pesos.",
        detalhes: "1 par • Strap de musculação • DARKLAB"
    },

    cinturao: {
        id: "cinturao",
        nome: "Cinturão Skyhill Gym",
        imagemPrincipal: "./IMAGENS/cinturao.png",
        preco: 399.90,
        descricao: "Cinturão esportivo desenvolvido para oferecer suporte à região abdominal e lombar durante exercícios de musculação.",
        detalhes: "Cinturão esportivo • Musculação • Skyhill Gym"
    },

    joelheira: {
        id: "joelheira",
        nome: "Joelheira Premium Neoprene - 7MM",
        imagemPrincipal: "./IMAGENS/joelheira.png",
        preco: 179.90,
        descricao: "Joelheira de neoprene com 7mm de espessura, indicada para oferecer compressão e suporte aos joelhos durante os treinos.",
        detalhes: "7MM • Neoprene • Joelheira esportiva"
    }

};


// ======================================
// FORMATAR PREÇO
// ======================================

function formatarPreco(valor) {

    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// ======================================
// ABRIR PRODUTO
// ======================================

function abrirProduto(idProduto, botao) {

    const produto = produtos[idProduto];

    if (!produto) {

        console.log("Acessório não encontrado!");

        return;

    }


    // IMAGEM PRINCIPAL

    document.getElementById("modalImg").src =
        produto.imagemPrincipal;


    // NOME

    document.getElementById("modalNome").textContent =
        produto.nome;


    // PREÇO

    document.getElementById("modalPreco").textContent =
        formatarPreco(produto.preco);


    // PARCELAMENTO

    document.getElementById("modalParcelamento").textContent =
        "ou 5x de " + formatarPreco(produto.preco / 5) + " sem juros";


    // DESCRIÇÃO

    document.getElementById("modalDescricao").textContent =
        produto.descricao;


    // IDENTIFICAR PRODUTO

    modal.dataset.produtoId = produto.id;


    // QUANTIDADE INICIAL

    let quantidade = 1;

    if (botao) {

        const input = botao.parentElement.querySelector(".quantidade input");

        if (input) {

            quantidade = Number(input.value) || 1;

        }

    }

    document.getElementById("qtdModal").value = quantidade;


    // ABRIR MODAL

    modal.classList.add("ativo");

}


// ======================================
// FECHAR MODAL
// ======================================

function fecharModal() {

    modal.classList.remove("ativo");

}

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        fecharModal();

>>>>>>> Stashed changes
>>>>>>> Stashed changes
    }

});

<<<<<<< Updated upstream
document.addEventListener("keydown", (event) => {
=======
<<<<<<< Updated upstream
function aumentarModal(){
>>>>>>> Stashed changes

    if (event.key === "Escape") {

        fecharModal();

    }

});

function aumentarModal() {

    const input = document.getElementById("qtdModal");

    input.value = Number(input.value) + 1;

}


function diminuirModal() {

    const input = document.getElementById("qtdModal");

<<<<<<< Updated upstream
    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;
=======
        qtdInput.value = qtdAtual;
=======
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        fecharModal();

    }

});


// ======================================
// QUANTIDADE DO MODAL
// ======================================

function aumentarModal() {

    const input = document.getElementById("qtdModal");

    if (Number(input.value) < 99) {

        input.value = Number(input.value) + 1;
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    }

}

<<<<<<< Updated upstream

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

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const contador = document.getElementById("contadorCarrinho");


function adicionarCarrinho() {
=======
<<<<<<< Updated upstream
function adicionarCarrinho(){
>>>>>>> Stashed changes

    const produto = {

        nome: document.getElementById("modalNome").textContent,

        preco: document.getElementById("modalPreco").textContent,

        img: document.getElementById("modalImg").src,

        quantidade: Number(
            document.getElementById("qtdModal").value
        )

    };


    carrinho.push(produto);
=======

function diminuirModal() {

    const input = document.getElementById("qtdModal");

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;

    }

}


// ======================================
// QUANTIDADE DOS PRODUTOS
// ======================================

function aumentar(botao) {

    const input = botao.parentElement.querySelector("input");

    if (Number(input.value) < 99) {

        input.value = Number(input.value) + 1;

    }

}


function diminuir(botao) {

    const input = botao.parentElement.querySelector("input");

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;

    }

}


// ======================================
// CARRINHO
// ======================================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const contador = document.getElementById("contadorCarrinho");


// ======================================
// ADICIONAR AO CARRINHO
// ======================================

function adicionarCarrinho() {

    const idProduto = modal.dataset.produtoId;

    const produto = produtos[idProduto];

    if (!produto) {

        alert("Acessório não encontrado!");

        return;

    }


    const quantidade = Number(
        document.getElementById("qtdModal").value
    );

    if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 99) {

        alert("Informe uma quantidade válida!");

        return;

    }


    // VERIFICAR SE O PRODUTO JÁ EXISTE

    const produtoExistente = carrinho.find(

        item => item.id === produto.id

    );


    if (produtoExistente) {

        produtoExistente.quantidade += quantidade;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            preco: produto.preco,

            imagem: produto.imagemPrincipal,

            quantidade: quantidade

        });

    }


    // SALVAR CARRINHO
>>>>>>> Stashed changes


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

<<<<<<< Updated upstream

=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    atualizarContador();


    alert("Produto adicionado ao carrinho!");

<<<<<<< Updated upstream

=======
=======

    // ATUALIZAR CONTADOR

    atualizarContador();


    alert("Produto adicionado ao carrinho!");


>>>>>>> Stashed changes
>>>>>>> Stashed changes
    fecharModal();

}

<<<<<<< Updated upstream
function atualizarContador() {
=======
<<<<<<< Updated upstream
function atualizarContador(){
>>>>>>> Stashed changes

    if (contador) {

<<<<<<< Updated upstream
        contador.textContent = carrinho.reduce(

            (total, produto) => total + produto.quantidade,
=======
        contador.textContent = carrinho.length;
=======

// ======================================
// ATUALIZAR CONTADOR
// ======================================

function atualizarContador() {

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (contador) {

        contador.textContent = carrinho.reduce(

            (total, produto) => total + Number(produto.quantidade),
>>>>>>> Stashed changes

            0

        );
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    }

}

<<<<<<< Updated upstream
=======

// ======================================
// INICIALIZAR
// ======================================

>>>>>>> Stashed changes
atualizarContador();