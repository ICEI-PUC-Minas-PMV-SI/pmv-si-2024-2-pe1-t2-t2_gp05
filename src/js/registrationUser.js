
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const registrationButton = document.getElementById("account-creation");
    const accountTypeInputs = document.getElementsByName("account-type"); // Seleciona os radio buttons

    // Verifica se há um usuário a ser editado
    const userToEdit = JSON.parse(localStorage.getItem("userToEdit"));
    const users = JSON.parse(localStorage.getItem("users")) || [];


    if (userToEdit) {
        // Preenche os campos do formulário com os dados do usuário
        nameInput.value = userToEdit.name;
        emailInput.value = userToEdit.email;

        // Seleciona o tipo de conta correspondente
        for (const input of accountTypeInputs) {
            if (input.value === userToEdit.accountType) {
                input.checked = true;
                break;
            }
        }

        // Muda a descrição do botão para "Atualizar"
        registrationButton.textContent = "Atualizar";
    }

    registrationButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const fileBase64 = documentBase64;
        const selectedAccountType = Array.from(accountTypeInputs).find(input => input.checked)?.value;


        // Validações básicas
        if (!name || !email || !selectedAccountType || !password || (registrationButton.textContent === "Criar Conta" && (!password || !confirmPassword))) {
            showDialog(`Por favor, preencha todos os campos obrigatórios.`,`warning`, function () {
            });
            // alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }


        if (password !== confirmPassword) {
            showDialog(`As senhas não coincidem.`,`warning`, function () {
            });
            // alert("As senhas não coincidem.");
            return;
        }

        // Se estamos editando, não precisamos verificar se o email já existe
        if (registrationButton.textContent === "Criar Conta") {
            // Verifica se o email já está registrado
            const emailExists = users.some(user => user.email === email);
            if (emailExists) {
                showDialog(`Email já está registrado.`,`warning`, function () {
                });
                // alert("Esse email já está registrado.");
                return;
            }

            // Cria o objeto de novo usuário
            const newUser = {
                name: name,
                email: email,
                password: password,
                accountType: selectedAccountType, // Adiciona o tipo de conta
                file: documentBase64
            };

            // Adiciona o novo usuário ao array de usuários
            users.push(newUser);
        } else {
            // Atualiza o usuário no localStorage
            const index = users.findIndex(user => user.email === userToEdit.email);
            if (index !== -1) {
                users[index] = {
                    name: name,
                    email: email,
                    password: password || userToEdit.password, // Se a senha não for fornecida, mantém a antiga
                    accountType: selectedAccountType, // Atualiza o tipo de conta
                    file: documentBase64
                 };
            } else {
                showDialog(`Erro ao atualizar o usuário.`,`warning`, function () {
                });
                // alert("Erro ao atualizar o usuário.");
                return;
            }
        }

        msg = null;
        if (registrationButton.textContent === "Criar Conta")
            msg = "Conta criada com sucesso!"
         else{
            msg =  "Usuário atualizado com sucesso!"
         } ;

        // alert(registrationButton.textContent === "Criar Conta" ? "Conta criada com sucesso!" : "Usuário atualizado com sucesso!");
        showDialog(msg,`info`, function () {
             // Salva o array de usuários atualizado no localStorage
            localStorage.setItem("users", JSON.stringify(users));
            // Redireciona para a página de login
            window.location.href = "/index.html";
        });

    });

    // Evento para carregar o arquivo em Base64
    document.getElementById("file-upload").addEventListener("change", handleFileUpload);

    // Evento de clique para o link de login
    const loginLink = document.getElementById("login-link");

    loginLink.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "/index.html";
    });
    
});

// Função para tratar o upload do arquivo e converter para Base64
let documentBase64 = ""; // Inicializa a variável global para armazenar o Base64
function handleFileUpload(event) {
    const file = event.target.files[0];
    const fileInputText = document.querySelector('.file-input-text'); // Seleciona o elemento para exibir o nome do arquivo
    if (file) {

        // Verificar tamanho do arquivo (2 MB = 2 * 1024 * 1024 bytes)
        const maxFileSize = 2 * 1024 * 1024;
        if (file.size > maxFileSize) {
            showDialog(`O arquivo excede o limite de 2 MB. Por favor, selecione um arquivo menor.`,`error`, function () {
            });
            // alert("O arquivo excede o limite de 2 MB. Por favor, selecione um arquivo menor.");
            fileInputText.textContent = "Arquivo muito grande (limite: 2 MB).";
            documentBase64 = ""; // Limpa o valor se o arquivo não for válido
            return;
        }

        // Verifica se o arquivo é um jpeg ou jpg
        if (file.type === "image/jpeg" || file.type === "image/jpg") {
            const reader = new FileReader();

            // Define o nome do arquivo no campo de texto
            fileInputText.textContent = file.name;
        
            reader.onload = function(e) {
                documentBase64 = e.target.result; // Armazena o arquivo em Base64
            };
            reader.readAsDataURL(file); // Converte para Base64
        } else {
            showDialog(`Apenas arquivos PDF são permitidos.`,`error`, function () {
            });
            // alert("Apenas arquivos jpeg ou jpg são permitidos.");
            fileInputText.textContent = "Apenas arquivos jpeg ou jpg são permitidos.";
            documentBase64 = ""; // Limpa qualquer valor existente
            return;
        }  
    } else {
        fileInputText.textContent = "Nenhum arquivo escolhido"; // Limpa o texto se nenhum arquivo for selecionado
    }
}

// Função flexível para exibir o diálogo com ícones e mensagem contextualizada
function showDialog(message, type, onOkCallback, onCancelCallback = null) {
    // Mapeamento de tipos para ícones e cores
    const typeConfig = {
      error: {
        icon: "❌", // Ícone para erro
        color: "#e74c3c", // Vermelho para erro
        title: "Erro"
      },
      warning: {
        icon: "⚠️", // Ícone para alerta
        color: "#f1c40f", // Amarelo para alerta
        title: "Alerta"
      },
      info: {
        icon: "ℹ️", // Ícone para informação
        color: "#3498db", // Azul para informação
        title: "Informação"
      }
    };
  
    const config = typeConfig[type] || typeConfig.info; // Padrão para "info"
  
    // Cria o overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 1000;
  
    // Cria a caixa do diálogo
    const dialogBox = document.createElement("div");
    dialogBox.style.backgroundColor = "#fff";
    dialogBox.style.borderRadius = "8px";
    dialogBox.style.padding = "20px";
    dialogBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    dialogBox.style.textAlign = "center";
    dialogBox.style.maxWidth = "400px";
    dialogBox.style.width = "90%";
    dialogBox.style.fontFamily = "sans-serif";
  
    // Cria a seção de cabeçalho com ícone e título
    const header = document.createElement("div");
    header.style.marginBottom = "20px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.gap = "10px";
  
    // Adiciona o ícone
    const icon = document.createElement("span");
    icon.textContent = config.icon;
    icon.style.fontSize = "24px";
    icon.style.color = config.color;
  
    // Adiciona o título
    const title = document.createElement("strong");
    title.textContent = config.title;
    title.style.fontSize = "18px";
    title.style.color = config.color;
  
    header.appendChild(icon);
    header.appendChild(title);
  
    // Cria a mensagem do diálogo
    const dialogMessage = document.createElement("p");
    dialogMessage.textContent = message;
    dialogMessage.style.marginBottom = "20px";
  
    // Cria o botão OK
    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.style.backgroundColor = "#007bff";
    okButton.style.color = "#fff";
    okButton.style.border = "none";
    okButton.style.padding = "10px 20px";
    okButton.style.borderRadius = "5px";
    okButton.style.marginRight = onCancelCallback ? "10px" : "0"; // Adiciona margem apenas se houver botão Cancelar
    okButton.style.cursor = "pointer";
    okButton.style.fontFamily = "sans-serif";
  
    // Evento do botão OK
    okButton.addEventListener("click", () => {
      document.body.removeChild(overlay); // Remove o diálogo
      if (onOkCallback) onOkCallback(); // Executa o callback de OK
    });
  
    // Adiciona o botão OK ao diálogo
    dialogBox.appendChild(header);
    dialogBox.appendChild(dialogMessage);
    dialogBox.appendChild(okButton);
  
    // Cria e adiciona o botão Cancelar, se necessário
    if (onCancelCallback) {
      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancelar";
      cancelButton.style.backgroundColor = "#ccc";
      cancelButton.style.color = "#333";
      cancelButton.style.border = "none";
      cancelButton.style.padding = "10px 20px";
      cancelButton.style.borderRadius = "5px";
      cancelButton.style.cursor = "pointer";
      cancelButton.style.fontFamily = "sans-serif";
  
      // Evento do botão Cancelar
      cancelButton.addEventListener("click", () => {
        document.body.removeChild(overlay); // Remove o diálogo
        if (onCancelCallback) onCancelCallback(); // Executa o callback de Cancelar
      });
  
      dialogBox.appendChild(cancelButton); // Adiciona o botão Cancelar ao diálogo
    }
  
    overlay.appendChild(dialogBox);
    document.body.appendChild(overlay);
  }