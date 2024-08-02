document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    // Usuário e senha válidos
    const validUsername = "usuario123";
    const validPassword = "senha123";

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém os valores inseridos
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const cpf = document.getElementById("cpf").value;

        // Função para validar CPF
        function validarCPF(cpf) {
            return cpf.length === 11 && /^\d+$/.test(cpf);
        }

        // Verifica se os valores coincidem
        if (!validarCPF(cpf)) {
            errorMessage.textContent = "CPF inválido. Deve conter 11 dígitos numéricos.";
        } else if (username === validUsername && password === validPassword) {
            // Limpa a mensagem de erro e redireciona ou altera a página
            errorMessage.textContent = "";
            alert("Login bem-sucedido! Redirecionando...");
            window.location.href = "home.html"; // Exemplo de redirecionamento
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = "Usuário ou senha incorretos.";
        }
    });
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let message = '';

    if (!validateEmail(email)) {
        message += 'E-mail inválido.<br>';
    }

    if (!validateCPF(cpf)) {
        message += 'CPF inválido.<br>';
    }

    document.getElementById('message').innerHTML = message || 'Cadastro realizado com sucesso!';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCPF(cpf) {
    // Implementar validação de CPF aqui
    return true; // Apenas para exemplo
}
