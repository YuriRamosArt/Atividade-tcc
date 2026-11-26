const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagemLogin");
const areaVerificacao = document.getElementById("areaVerificacao");

const mostrarSenha = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");
const iconeOlho = document.getElementById("iconeOlho");

function mostrarMensagem(texto, sucesso = false) {
    mensagem.textContent = texto;

    mensagem.style.color = sucesso ? "green" : "red";
}

// LOGIN
formLogin.addEventListener("submit", async (event) => {

    event.preventDefault();

    const emailValor = email.value.trim();
    const senhaValor = senha.value;

    // Verificar formato do email
    if (!email.checkValidity()) {
        mostrarMensagem("Digite um e-mail válido.");
        return;
    }

    // Verificar tamanho da senha
    if (senhaValor.length < 8) {
        mostrarMensagem("A senha precisa ter no mínimo 8 caracteres.");
        return;
    }

    try {

        const resposta = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailValor,
                senha: senhaValor
            })
        });

        const dados = await resposta.json();

        if (resposta.status === 403 && dados.emailNaoVerificado) {

            mostrarMensagem("Verifique seu e-mail antes de entrar.");

            areaVerificacao.hidden = false;

            return;
        }

        if (!resposta.ok) {
            mostrarMensagem(dados.mensagem || "E-mail ou senha incorretos.");
            return;
        }

        mostrarMensagem("Login realizado com sucesso!", true);

        window.location.href = "./perfi.html";

    } catch (erro) {

        mostrarMensagem("Não foi possível conectar ao servidor.");

        console.error(erro);
    }

});


// ENVIAR CÓDIGO DE VERIFICAÇÃO
document.getElementById("enviarCodigo").addEventListener("click", async () => {

    try {

        const resposta = await fetch("/api/auth/enviar-codigo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value.trim()
            })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mostrarMensagem(dados.mensagem || "Não foi possível enviar o código.");
            return;
        }

        mostrarMensagem("Código enviado! Confira seu e-mail.", true);

    } catch (erro) {

        mostrarMensagem("Erro ao enviar o código.");

    }

});


// CONFIRMAR CÓDIGO
document.getElementById("verificarCodigo").addEventListener("click", async () => {

    const codigo = document.getElementById("codigo").value.trim();

    if (!/^\d{6}$/.test(codigo)) {
        mostrarMensagem("Digite um código válido de 6 números.");
        return;
    }

    try {

        const resposta = await fetch("/api/auth/verificar-codigo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value.trim(),
                codigo: codigo
            })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            mostrarMensagem(dados.mensagem || "Código incorreto ou expirado.");
            return;
        }

        mostrarMensagem("E-mail verificado com sucesso! Faça seu login.", true);

        areaVerificacao.hidden = true;

    } catch (erro) {

        mostrarMensagem("Não foi possível verificar o código.");

    }

});
mostrarSenha.addEventListener("click", () => {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";

        iconeOlho.src = "./IMAGENS/olhoAberto.png";

        mostrarSenha.setAttribute("aria-label", "Ocultar senha");

    } else {

        campoSenha.type = "password";

        iconeOlho.src = "./IMAGENS/olho-fechado.png";

        mostrarSenha.setAttribute("aria-label", "Mostrar senha");
    }

});
