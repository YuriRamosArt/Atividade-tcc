
const modal = document.getElementById("modal");
const qtdInput = document.getElementById("qtdModal");
let produtoSelecionado = null;

const produtos = {
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
        preco: 160,
        descricao: "Kit composto por 5 peças, sendo 3 camisetas e 2 shorts Dry Fit. Uma opção prática para quem busca variedade de roupas para atividades físicas e treinos.",
        detalhes: "5 peças • 3 camisetas + 2 shorts • Dry Fit"
    },
    kitFitness: {
        nome: "Kit Conjunto Fitness Top Duplo + Legging",
        imagemPrincipal: "./IMAGENS/kitfitnese.png",
        mini1: "./IMAGENS/kitfitnese.png",
        mini2: "./IMAGENS/kitfitnese.png",
        mini3: "./IMAGENS/kitfitnese.png",
        preco: 120,
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

function formatarPreco(preco) {
    return Number(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function obterCarrinho() {
    try {
        const carrinho = JSON.parse(localStorage.getItem("carrinho"));
        return Array.isArray(carrinho) ? carrinho : [];
    } catch {
        return [];
    }
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function abrirProduto(idProduto, botao) {
    const produto = produtos[idProduto];

    if (!produto) {
        alert("Produto não encontrado.");
        return;
    }

    produtoSelecionado = idProduto;

    const card = botao ? botao.closest(".cards") : null;
    const quantidadeCard = card ? card.querySelector(".quantidade input") : null;
    const quantidade = quantidadeCard ? Number(quantidadeCard.value) : 1;

    document.getElementById("modalImg").src = produto.imagemPrincipal;
    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("precoProduto").textContent = formatarPreco(produto.preco);
    document.getElementById("parcelamento").textContent = `5x de ${formatarPreco(produto.preco / 5)} sem juros`;
    document.getElementById("desProduto").textContent = produto.descricao;
    document.getElementById("detProduto").textContent = produto.detalhes;

    document.getElementById("mini1").src = produto.mini1;
    document.getElementById("mini2").src = produto.mini2;
    document.getElementById("mini3").src = produto.mini3;

    qtdInput.value = Math.min(99, Math.max(1, quantidade));
    modal.classList.add("ativo");
}

function fecharModal() {
    modal.classList.remove("ativo");
    produtoSelecionado = null;
}

function trocarImagem(imagem) {
    document.getElementById("modalImg").src = imagem.src;
}

function aumentarModal() {
    qtdInput.value = Math.min(99, Number(qtdInput.value || 1) + 1);
}

function diminuirModal() {
    qtdInput.value = Math.max(1, Number(qtdInput.value || 1) - 1);
}

function aumentar(botao) {
    const input = botao.parentElement.querySelector("input");
    input.value = Math.min(99, Number(input.value || 1) + 1);
}

function diminuir(botao) {
    const input = botao.parentElement.querySelector("input");
    input.value = Math.max(1, Number(input.value || 1) - 1);
}

function adicionarCarrinho() {
    if (!produtoSelecionado || !produtos[produtoSelecionado]) {
        alert("Selecione um produto.");
        return;
    }

    const produto = produtos[produtoSelecionado];
    const quantidade = Math.min(99, Math.max(1, Number(qtdInput.value) || 1));
    const carrinho = obterCarrinho();
    const existente = carrinho.find(item => item.id === produtoSelecionado);

    if (existente) {
        existente.quantidade = Number(existente.quantidade || 0) + quantidade;
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
    atualizarContador();
    alert("Produto adicionado ao carrinho!");
    fecharModal();
}

function atualizarContador() {
    const contador = document.getElementById("contadorCarrinho");

    if (contador) {
        const carrinho = obterCarrinho();
        const quantidadeTotal = carrinho.reduce(
            (total, item) => total + Number(item.quantidade || 0),
            0
        );

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

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.classList.contains("ativo")) {
        fecharModal();
    }
});

atualizarContador();
