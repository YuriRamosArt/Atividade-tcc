// Carrinho AYSI - usa a mesma chave "carrinho" em todas as páginas.
const CHAVE_CARRINHO = "carrinho";

function lerCarrinho() {
    try {
        const dados = JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.error("Não foi possível ler o carrinho:", erro);
        return [];
    }
}

function salvarCarrinho(itens) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
}

function formatarMoeda(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function converterPreco(preco) {
    if (typeof preco === "number") return preco;
    const numero = String(preco || "")
        .replace(/[R$\s]/g, "")
        .replace(/\./g, "")
        .replace(",", ".");
    const valor = Number(numero);
    return Number.isFinite(valor) ? valor : 0;
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById("contadorCarrinho");
    if (!contador) return;
    const quantidade = lerCarrinho().reduce(
        (total, produto) => total + Math.max(0, Number(produto.quantidade) || 0), 0
    );
    contador.textContent = quantidade;
}

function renderizarCarrinho() {
    const lista = document.getElementById("listaProdutos");
    if (!lista) return;

    const vazio = document.getElementById("carrinhoVazio");
    const itens = lerCarrinho();
    lista.replaceChildren();

    if (vazio) vazio.hidden = itens.length !== 0;

    itens.forEach((produto, indice) => {
        const artigo = document.createElement("article");
        artigo.className = "produto";

        const imagemBox = document.createElement("div");
        imagemBox.className = "produto-imagem";
        const imagem = document.createElement("img");
        imagem.src = produto.img || "";
        imagem.alt = produto.nome || "Produto";
        imagemBox.appendChild(imagem);

        const info = document.createElement("div");
        info.className = "produto-info";
        const nome = document.createElement("h2");
        nome.textContent = produto.nome || "Produto sem nome";
        const preco = document.createElement("span");
        preco.className = "preco";
        preco.textContent = formatarMoeda(converterPreco(produto.preco));
        info.append(nome, preco);

        const controle = document.createElement("div");
        controle.className = "produto-controle";
        const quantidade = document.createElement("div");
        quantidade.className = "quantidade";

        const menos = document.createElement("button");
        menos.type = "button";
        menos.textContent = "−";
        menos.setAttribute("aria-label", "Diminuir quantidade");
        menos.addEventListener("click", () => alterarQuantidade(indice, -1));

        const numero = document.createElement("span");
        numero.textContent = Number(produto.quantidade) || 1;

        const mais = document.createElement("button");
        mais.type = "button";
        mais.textContent = "+";
        mais.setAttribute("aria-label", "Aumentar quantidade");
        mais.addEventListener("click", () => alterarQuantidade(indice, 1));

        quantidade.append(menos, numero, mais);

        const remover = document.createElement("button");
        remover.type = "button";
        remover.className = "remover";
        remover.textContent = "REMOVER";
        remover.addEventListener("click", () => removerProduto(indice));

        controle.append(quantidade, remover);
        artigo.append(imagemBox, info, controle);
        lista.appendChild(artigo);
    });

    atualizarResumo(itens);
    atualizarContadorCarrinho();
}

function alterarQuantidade(indice, variacao) {
    const itens = lerCarrinho();
    if (!itens[indice]) return;

    itens[indice].quantidade = (Number(itens[indice].quantidade) || 1) + variacao;

    if (itens[indice].quantidade <= 0) {
        itens.splice(indice, 1);
    }

    salvarCarrinho(itens);
    renderizarCarrinho();
}

function removerProduto(indice) {
    const itens = lerCarrinho();
    itens.splice(indice, 1);
    salvarCarrinho(itens);
    renderizarCarrinho();
}

function atualizarResumo(itens) {
    const subtotal = itens.reduce((soma, produto) => {
        return soma + converterPreco(produto.preco) * (Number(produto.quantidade) || 1);
    }, 0);

    const frete = subtotal === 0 ? 0 : (subtotal >= 199 ? 0 : 15);
    const elementoSubtotal = document.getElementById("subtotal");
    const elementoFrete = document.getElementById("frete");
    const elementoTotal = document.getElementById("total");

    if (elementoSubtotal) elementoSubtotal.textContent = formatarMoeda(subtotal);
    if (elementoFrete) elementoFrete.textContent = subtotal === 0 ? "A calcular" : (frete === 0 ? "Grátis" : formatarMoeda(frete));
    if (elementoTotal) elementoTotal.textContent = formatarMoeda(subtotal + frete);
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrinho();

    const limpar = document.getElementById("limparCarrinho");
    if (limpar) {
        limpar.addEventListener("click", () => {
            salvarCarrinho([]);
            renderizarCarrinho();
        });
    }

    const form = document.getElementById("formCheckout");
    if (form) {
        form.addEventListener("submit", (evento) => {
            evento.preventDefault();
            if (lerCarrinho().length === 0) {
                alert("Adicione pelo menos um produto ao carrinho.");
                return;
            }
            alert("Checkout demonstrativo: nenhum pedido ou pagamento real foi realizado.");
        });
    }

    const pagamento = document.getElementById("formasPagamento");
    if (pagamento) {
        pagamento.addEventListener("click", () => {
            alert("As formas de pagamento estão demonstradas no rodapé da página.");
        });
    }
});

window.addEventListener("storage", (evento) => {
    if (evento.key === CHAVE_CARRINHO) renderizarCarrinho();
});
