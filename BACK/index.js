let qtdModal = 1;
let produtoSelecionado = null;
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function abrirProduto(botao) {
    const card = botao.closest(".card");

    if (!card) return;

    const img = card.querySelector("img").src;
    const nome = card.querySelector("h3").innerText;
    const precoTexto = card.querySelector(".preco").innerText;
    const inputQuantidade = card.querySelector(".quantidade input");

    const valorEncontrado = precoTexto.match(/R\$\s*([\d.,]+)/);

    if (!valorEncontrado) {
        alert("Não foi possível identificar o preço do produto.");
        return;
    }

    const preco = Number(
        valorEncontrado[1]
            .replace(/\./g, "")
            .replace(",", ".")
    );

    produtoSelecionado = {
        id: nome.toLowerCase().replace(/\s+/g, "-"),
        nome: nome,
        preco: preco,
        imagem: img
    };

    qtdModal = Math.min(99, Math.max(1, parseInt(inputQuantidade.value) || 1));

    document.getElementById("modalImg").src = img;
    document.getElementById("modalNome").innerText = nome;
    document.getElementById("modalPreco").innerText = formatarPreco(preco);
    document.getElementById("qtdModal").value = qtdModal;

    atualizarTotalModal();

    document.getElementById("modal").classList.add("ativo");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("ativo");
    produtoSelecionado = null;
}

function aumentar(botao) {
    const input = botao.parentElement.querySelector("input");
    let valor = parseInt(input.value) || 1;

    if (valor < 99) {
        input.value = valor + 1;
    }
}

function diminuir(botao) {
    const input = botao.parentElement.querySelector("input");
    let valor = parseInt(input.value) || 1;

    if (valor > 1) {
        input.value = valor - 1;
    }
}

function aumentarModal() {
    if (qtdModal < 99) {
        qtdModal++;
        document.getElementById("qtdModal").value = qtdModal;
        atualizarTotalModal();
    }
}

function diminuirModal() {
    if (qtdModal > 1) {
        qtdModal--;
        document.getElementById("qtdModal").value = qtdModal;
        atualizarTotalModal();
    }
}

function atualizarTotalModal() {
    if (!produtoSelecionado) return;

    const total = produtoSelecionado.preco * qtdModal;

    document.getElementById("totalModal").innerText =
        "Total: " + formatarPreco(total);
}

function atualizarContador() {
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const contador = document.getElementById("contadorCarrinho");

    if (contador) {
        const totalItens = carrinho.reduce(
            (total, item) => total + Number(item.quantidade || 0),
            0
        );

        contador.innerText = totalItens;
    }
}

function adicionarCarrinho() {
    if (!produtoSelecionado) {
        alert("Selecione um produto primeiro!");
        return;
    }

    const input = document.getElementById("qtdModal");
    qtdModal = Number(input.value);

    if (!Number.isInteger(qtdModal) || qtdModal < 1 || qtdModal > 99) {
        alert("Escolha uma quantidade entre 1 e 99.");
        return;
    }

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(
        item => item.id === produtoSelecionado.id
    );

    if (produtoExistente) {
        produtoExistente.quantidade = Number(produtoExistente.quantidade) + qtdModal;
    } else {
        carrinho.push({
            id: produtoSelecionado.id,
            nome: produtoSelecionado.nome,
            preco: produtoSelecionado.preco,
            imagem: produtoSelecionado.imagem,
            quantidade: qtdModal
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();

    window.location.href = "./paginacarrinho.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const inputModal = document.getElementById("qtdModal");

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

    inputModal.addEventListener("input", function() {
        const valor = Number(this.value);

        if (Number.isInteger(valor) && valor >= 1 && valor <= 99) {
            qtdModal = valor;
            atualizarTotalModal();
        }
    });

    atualizarContador();
});
