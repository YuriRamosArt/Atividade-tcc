
const modal = document.getElementById("modal");

const produtos = {
    coqueteleira: {
        id: "coqueteleira",
        nome: "DARKLAB - Coqueteleira 900ml",
        imagem: "./IMAGENS/coqueteleira.png",
        preco: 69.99,
        descricao: "Coqueteleira de 900ml ideal para preparar shakes e suplementos. Prática para levar à academia e utilizar durante sua rotina de treinos.",
        detalhes: "900ml • Coqueteleira • DARKLAB"
    },
    garrafa: {
        id: "garrafa",
        nome: "DARKLAB - Garrafa 500ml",
        imagem: "./IMAGENS/garrafaGrande.png",
        preco: 59.99,
        descricao: "Garrafa de 500ml ideal para transportar sua bebida favorita. Compacta e prática, auxilia na hidratação durante os exercícios físicos.",
        detalhes: "500ml • Garrafa esportiva • DARKLAB"
    },
    mochila: {
        id: "mochila",
        nome: "GROWT - Mochila Média",
        imagem: "./IMAGENS/mochilaG.png",
        preco: 99.99,
        descricao: "Mochila de tamanho médio, ideal para transportar roupas, acessórios e objetos pessoais. Uma opção prática para acompanhar sua rotina de treinos.",
        detalhes: "Tamanho médio • Mochila esportiva • GROWT"
    },
    bone: {
        id: "bone",
        nome: "SHARKPRO - Boné",
        imagem: "./IMAGENS/bone.png",
        preco: 49.99,
        descricao: "Boné esportivo ideal para complementar seu visual no dia a dia e durante atividades ao ar livre. Um acessório prático para sua rotina.",
        detalhes: "Boné • Acessório esportivo • SHARKPRO"
    },
    elastico: {
        id: "elastico",
        nome: "SHARKPRO - Elástico",
        imagem: "./IMAGENS/elastico.png",
        preco: 39.99,
        descricao: "Elástico de treino indicado para exercícios de resistência, alongamento e fortalecimento muscular. Um acessório versátil para diferentes atividades.",
        detalhes: "Elástico de treino • Resistência • SHARKPRO"
    },
    strap: {
        id: "strap",
        nome: "DARKLAB - Strap 1 Par",
        imagem: "./IMAGENS/strap.png",
        preco: 49.99,
        descricao: "Par de straps desenvolvido para auxiliar na pegada durante exercícios de musculação, oferecendo mais firmeza ao segurar barras e pesos.",
        detalhes: "1 par • Strap de musculação • DARKLAB"
    },
    cinturao: {
        id: "cinturao",
        nome: "Cinturão Skyhill Gym",
        imagem: "./IMAGENS/cinturao.png",
        preco: 399.90,
        descricao: "Cinturão esportivo desenvolvido para oferecer suporte à região abdominal e lombar durante exercícios de musculação.",
        detalhes: "Cinturão esportivo • Musculação • Skyhill Gym"
    },
    joelheira: {
        id: "joelheira",
        nome: "Joelheira Premium Neoprene - 7MM",
        imagem: "./IMAGENS/joelheira.png",
        preco: 179.90,
        descricao: "Joelheira de neoprene com 7mm de espessura, indicada para oferecer compressão e suporte aos joelhos durante os treinos.",
        detalhes: "7MM • Neoprene • Joelheira esportiva"
    }
};

const contador = document.getElementById("contadorCarrinho");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function abrirProduto(idProduto, botao) {
    const produto = produtos[idProduto];

    if (!produto) {
        alert("Acessório não encontrado!");
        return;
    }

    document.getElementById("modalImg").src = produto.imagem;
    document.getElementById("modalNome").textContent = produto.nome;
    document.getElementById("modalPreco").textContent = formatarPreco(produto.preco);
    document.getElementById("modalParcelamento").textContent = "ou 5x de " + formatarPreco(produto.preco / 5) + " sem juros";
    document.getElementById("modalDescricao").textContent = produto.descricao;

    const detalhes = document.getElementById("modalDetalhes");

    if (detalhes) {
        detalhes.textContent = produto.detalhes;
    }

    modal.dataset.produtoId = produto.id;

    let quantidade = 1;

    if (botao) {
        const input = botao.parentElement.querySelector(".quantidade input");

        if (input) {
            quantidade = Math.max(1, Math.min(99, Number(input.value) || 1));
        }
    }

    document.getElementById("qtdModal").value = quantidade;

    modal.classList.add("ativo");
}

function fecharModal() {
    modal.classList.remove("ativo");
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        fecharModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

function aumentarModal() {
    const input = document.getElementById("qtdModal");
    const quantidade = Number(input.value);

    if (quantidade < 99) {
        input.value = quantidade + 1;
    }
}

function diminuirModal() {
    const input = document.getElementById("qtdModal");
    const quantidade = Number(input.value);

    if (quantidade > 1) {
        input.value = quantidade - 1;
    }
}

function aumentar(botao) {
    const input = botao.parentElement.querySelector("input");
    const quantidade = Number(input.value);

    if (quantidade < 99) {
        input.value = quantidade + 1;
    }
}

function diminuir(botao) {
    const input = botao.parentElement.querySelector("input");
    const quantidade = Number(input.value);

    if (quantidade > 1) {
        input.value = quantidade - 1;
    }
}

function adicionarCarrinho() {
    const idProduto = modal.dataset.produtoId;
    const produto = produtos[idProduto];

    if (!produto) {
        alert("Acessório não encontrado!");
        return;
    }

    const quantidade = Number(document.getElementById("qtdModal").value);

    if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 99) {
        alert("Informe uma quantidade válida!");
        return;
    }

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(item => item.id === produto.id);

    if (produtoExistente) {
        produtoExistente.quantidade = Number(produtoExistente.quantidade) + quantidade;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: quantidade
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();

    alert("Produto adicionado ao carrinho!");

    fecharModal();
}

function atualizarContador() {
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const total = carrinho.reduce((soma, item) => {
        return soma + Number(item.quantidade || 0);
    }, 0);

    if (contador) {
        contador.textContent = total;
    }
}

atualizarContador();
