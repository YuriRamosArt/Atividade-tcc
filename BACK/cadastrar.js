
// CAMPOS DO FORMULÁRIO

const formCadastro = document.getElementById("formCadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");

const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const mensagem = document.getElementById("mensagem");


// FUNÇÃO PARA MOSTRAR OU OCULTAR SENHA

function configurarOlho(input, botao, icone) {

    botao.addEventListener("click", () => {

        const senhaVisivel = input.type === "password";

        input.type = senhaVisivel ? "text" : "password";

        icone.src = senhaVisivel
            ? "./IMAGENS/olhoAberto.png"
            : "./IMAGENS/olhoFechado.png";

        botao.setAttribute(
            "aria-label",
            senhaVisivel ? "Ocultar senha" : "Mostrar senha"
        );

    });

}


// OLHO DA SENHA

configurarOlho(
    senha,
    document.getElementById("mostrarSenha"),
    document.getElementById("iconeOlhoSenha")
);


// OLHO DA CONFIRMAÇÃO

configurarOlho(
    confirmarSenha,
    document.getElementById("mostrarConfirmarSenha"),
    document.getElementById("iconeOlhoConfirmar")
);


// VALIDAÇÃO DO CADASTRO

formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagem.textContent = "";
    mensagem.style.color = "red";

    // VERIFICAR CAMPOS

    if (!nome.value.trim() || !email.value.trim() ||
        !senha.value || !confirmarSenha.value) {

        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    // VALIDAR FORMATO DO EMAIL

    if (!email.checkValidity()) {

        mensagem.textContent = "Digite um e-mail com formato válido.";
        email.focus();
        return;
    }

    // VALIDAR TAMANHO DA SENHA

    if (senha.value.length < 8) {

        mensagem.textContent =
            "A senha precisa ter pelo menos 8 caracteres.";

        senha.focus();
        return;
    }

    // CONFIRMAR SENHA

    if (senha.value !== confirmarSenha.value) {

        mensagem.textContent =
            "As senhas não são iguais. Verifique novamente.";

        confirmarSenha.focus();
        return;
    }

    // CADASTRO VALIDADO

    mensagem.style.color = "green";

    mensagem.textContent =
        "Todos os campos foram validados com sucesso!";

});
