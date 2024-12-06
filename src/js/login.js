document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de submit 
    const submitButton = document.getElementById('login-submit');
  
    // Evento de clique para o botão de submit
    submitButton.addEventListener('click', function () {
      // Obtém os valores dos campos de email e senha
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Verifica se os campos estão preenchidos
      if (!email || !password) {
        showDialog(`Por favor, preencha todos os campos.`,`warning`, function () {
        });
        // alert("Por favor, preencha todos os campos.");
        return;
      }
  
    // Busca os usuários no localStorage e converte em array (ou array vazio se não houver usuários)
    let users = JSON.parse(localStorage.getItem("users"));

    // Verifica se users está definido e é um array, caso contrário, define como um array vazio
    if (!Array.isArray(users)) {
        console.log("Nenhum usuário encontrado no localStorage. Inicializando `users` como array vazio.");
        users = []; // Inicializa `users` como array vazio se estiver null ou não for um array
    } else {
        console.log("Usuários carregados do localStorage:", users);
    }

      // Procura um usuário com email e senha correspondentes
      const loggedInUser = users.find(user => normalizeString(user.email) === normalizeString(email) && normalizeString(user.password) === normalizeString(password));
  
      if (loggedInUser) {
        // Salva o usuário logado no localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  
        // Redireciona para a página principal ou inicial
        window.location.href = "/html/listProcess.html";
      } else {
        showDialog(`Email ou senha incorretos. Tente novamente.`,`error`, function () {
        });
        // Exibe uma mensagem de erro
        // alert("Email ou senha incorretos. Tente novamente.");
      }
    });
  
    // Evento de clique para o link de cadastro
    const registrationLink = document.getElementById('registration-link');

    registrationLink.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      window.location.href = "/html/registrationUser.html"; // Redireciona para a página de cadastro
    });


    function normalizeString(str) {
        return str
            .trim() // Remove espaços em branco do início e do fim
            .replace(/\s+/g, '') // Remove todos os espaços em branco
            .toLowerCase() // Converte para minúsculas
            .normalize("NFD") // Normaliza os caracteres
            .replace(/[\u0300-\u036f]/g, ""); // Remove acentuação
    }

  });
  
  
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