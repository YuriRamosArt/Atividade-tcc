let qtdModal = 1;

function abrirProduto(botao) {
    const card = botao.closest(".card");

    const img = card.querySelector("img").src;
    const nome = card.querySelector("h3").innerText;
    const preco = card.querySelector(".preco").innerText;

    const qtdCard = card.querySelector(".quantidade input").value;

    document.getElementById("modalImg").src = img;
    document.getElementById("modalNome").innerText = nome;
    document.getElementById("modalPreco").innerText = preco;

    qtdModal = parseInt(qtdCard);
    document.getElementById("qtdModal").value = qtdModal;

    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function aumentar(btn) {
    const input = btn.parentElement.querySelector("input");
    input.value = parseInt(input.value) + 1;
}

function diminuir(btn) {
    const input = btn.parentElement.querySelector("input");

    let valor = parseInt(input.value);
    if (valor > 1) {
        input.value = valor - 1;
    }
}

function aumentarModal() {
    qtdModal++;
    document.getElementById("qtdModal").value = qtdModal;
}

function diminuirModal() {
    if (qtdModal > 1) {
        qtdModal--;
        document.getElementById("qtdModal").value = qtdModal;
    }
}

function adicionarCarrinho() {
    const nome = document.getElementById("modalNome").innerText;
    const quantidade = qtdModal;

    alert(`${nome} adicionado ao carrinho! Quantidade: ${quantidade}`);

    fecharModal();
}