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

    }

});

document.addEventListener("keydown", (event) => {

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

    if (Number(input.value) > 1) {

        input.value = Number(input.value) - 1;

    }

}


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

    const produto = {

        nome: document.getElementById("modalNome").textContent,

        preco: document.getElementById("modalPreco").textContent,

        img: document.getElementById("modalImg").src,

        quantidade: Number(
            document.getElementById("qtdModal").value
        )

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

function atualizarContador() {

    if (contador) {

        contador.textContent = carrinho.reduce(

            (total, produto) => total + produto.quantidade,

            0

        );

    }

}

atualizarContador();