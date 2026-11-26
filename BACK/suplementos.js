
const modal = document.getElementById("modal");

const produtos = {
    wheyMax: {
        nome: "MAXWHEY Baunilha - 900g",
        imagemPrincipal: "./IMAGENS/wheyMax.png",
        mini1: "./IMAGENS/tabelaWhey.png",
        mini2: "./IMAGENS/scupWhey.png",
        mini3: "./IMAGENS/copoWhey.png",
        preco: 49.99,
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
        preco: 110.99,
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
        preco: 49.99,
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
        preco: 49.99,
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
        preco: 59.99,
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
        preco: 110.99,
        parcelamento: "ou 3x de R$ 37,00 sem juros",
        descricao: "Whey protein sabor frutas vermelhas, desenvolvido para complementar a ingestão diária de proteínas. Uma alternativa para quem prefere sabores frutados na sua rotina alimentar.",
        detalhes: "900g • Frutas Vermelhas • Suplemento proteico"
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
    atualizarContadorCarrinho();
}

function formatarPreco(preco) {
    return Number(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function abrirProduto(idProduto) {
    const produto = produtos[idProduto];

    if (!produto) {
        console.log("Produto não encontrado");
        return;
    }

    produtoSelecionado = idProduto;

    document.getElementById("modalImg").src = produto.imagemPrincipal;
    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("precoProduto").textContent = formatarPreco(produto.preco);
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

function adicionarProdutoCarrinho() {
    if (!produtoSelecionado || !produtos[produtoSelecionado]) {
        alert("Selecione um produto primeiro!");
        return;
    }

    const produto = produtos[produtoSelecionado];

    const quantidade = Math.max(
        1,
        Number(document.getElementById("qtdModal").value) || 1
    );

    const carrinho = obterCarrinho();

    const produtoExistente = carrinho.find(item => {
        return item.id === produtoSelecionado;
    });

    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
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

    alert("Produto adicionado ao carrinho!");

    fecharModal();
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById("contadorCarrinho");

    if (!contador) return;

    const carrinho = obterCarrinho();

    const quantidadeTotal = carrinho.reduce((total, produto) => {
        return total + Number(produto.quantidade || 0);
    }, 0);

    contador.textContent = quantidadeTotal;
}

if (modal) {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", atualizarContadorCarrinho);

atualizarContadorCarrinho();
