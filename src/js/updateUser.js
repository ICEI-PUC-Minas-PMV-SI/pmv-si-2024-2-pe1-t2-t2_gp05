document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const updateButton = document.getElementById("update-account");

    // Carrega os dados do usuário do localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        nameInput.value = storedUser.name || "";
        emailInput.value = storedUser.email || "";
        passwordInput.value = storedUser.password || ""; // Pode deixar o campo senha vazio por segurança
    }

    // Evento para atualizar as informações do usuário
    updateButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validação básica
        if (!name || !email || !password || !confirmPassword) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        // Cria o objeto atualizado do usuário
        const updatedUser = {
            name: name,
            email: email,
            password: password
        };

        // Salva o usuário atualizado no localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Informações atualizadas com sucesso!");

        // Opcional: Redirecionar ou limpar o formulário após a atualização
        window.location.href = "../html/profile.html"; // Exemplo de redirecionamento
    });
});
