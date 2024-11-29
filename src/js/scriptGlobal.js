// Verifica se o usuário está logado
document.addEventListener("DOMContentLoaded", function () {
  // Tenta obter o usuário logado do localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Verifica se o usuário não está logado e se não está na página de login
  if (!loggedInUser && !window.location.pathname.includes("login.html")) {
      
    showDialog(`Você precisa estar logado para acessar esta página.`,`info`, function () {
        // Redireciona para a página de login
       window.location.href = "../html/login.html"; // Ajuste o caminho conforme necessário
       return;
      });
    
    // alert("Você precisa estar logado para acessar esta página.");

      // Redireciona para a página de login
      // window.location.href = "../html/login.html"; // Ajuste o caminho conforme necessário
   
      // Aborta a execução do restante do script
      
  }

  // Caso o usuário esteja na página de login, e já esteja logado, redirecione para o painel ou outra página
  if (loggedInUser && window.location.pathname.includes("login.html")) {
    showDialog(`Você precisa estar logado para acessar esta página.`,`info`, function () {
      // Redireciona para a página de login
      window.location.href = "../html/login.html";
      return;
    });

    // alert("Você já está logado. Redirecionando para o painel.");
      // window.location.href = "../html/dashboard.html"; // Substitua pelo caminho da página inicial após login
      // Aborta a execução do restante do script
  
  }

    // Se o usuário passou pela verificação, executa o restante do script
    // inicializarSistema(); // Função que contém o restante do código

});

// Toda lógica subsequente encapsulada em uma função
// function inicializarSistema() {
//Icons
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"; // Biblioteca feather-icons
script.onload = () => {
    feather.replace(); 
};
document.head.appendChild(script);

//Menu
document.addEventListener('DOMContentLoaded', function() {
  function toggleMenu() {
      let subMenu = document.getElementById("sub-menu");
      subMenu.classList.toggle("open-menu");

      // Selecionar o ícone de chevron usando getElementById
      const chevronIcon = document.getElementById("topbar-chevron-icon");
      
      // Verifica se o sub-menu está aberto e alterna o ícone
      if (subMenu.classList.contains("open-menu")) {
          chevronIcon.setAttribute("data-feather", 'chevron-down'); // Muda para chevron-down
      } else {
          chevronIcon.setAttribute("data-feather", "chevron-up"); // Muda para chevron-up
      }
      
      feather.replace(); // Atualiza os ícones após a mudança
  }

  // Para que a função seja chamada quando clicar no ícone de logout
  const logoutIcon = document.querySelector(".logout-button");
  logoutIcon.addEventListener("click", toggleMenu);
});

// SubMenu
document.addEventListener('DOMContentLoaded', function() {
  const chevronIcon = document.getElementById("menu-chevron-icon");
  const menuProcess = document.getElementById("menu-process");
  const menuPainel = document.getElementById("menu-painel");

  // Define o menu como visível por padrão
  menuProcess.style.display = "block"; 
  chevronIcon.firstElementChild.setAttribute("data-feather", "chevron-down"); // Muda o ícone para chevron-down

  // Adiciona o ouvinte de evento de clique ao menu-painel
  menuPainel.addEventListener('click', function() {
      // Alternar a visibilidade do menu-process
      if (menuProcess.style.display === "none" || menuProcess.style.display === "") {
          menuProcess.style.display = "block"; // Mostra o menu
          chevronIcon.firstElementChild.setAttribute("data-feather", "chevron-down"); // Muda o ícone para chevron-down
          sessionStorage.setItem("menuVisible", "true"); // Armazena estado
      } else {
          menuProcess.style.display = "none"; // Esconde o menu
          chevronIcon.firstElementChild.setAttribute("data-feather", "chevron-up"); // Muda o ícone para chevron-up
          sessionStorage.setItem("menuVisible", "false"); // Armazena estado
      }

      feather.replace(); // Atualiza os ícones Feather
  });

  menuProcess.addEventListener('click', function() {
    window.location.href = "../html/listProcess.html"; // Redireciona para a nova página definida na variável
  });
});

// Redirecionamento Create
document.addEventListener("DOMContentLoaded", function() {
  const processButton = document.getElementById("new-process");
    processButton.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/createProcess.html";
    });
});

// Redirecionamento Edit
document.addEventListener("DOMContentLoaded", function() {
  const iconEdit = document.querySelectorAll(".edit-button");
  // Adiciona o evento de clique a cada botão de editar
  iconEdit.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/updateProcess.html";
    });
  });
});

// Obtem os dados logados
document.addEventListener('DOMContentLoaded', function() {
  const editRegisterLink = document.getElementById('edit-register-link'); // Seleciona o link "Editar Cadastro"

  // Adiciona um ouvinte de evento de clique ao link "Editar Cadastro"
  editRegisterLink.addEventListener('click', function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário

      // Obtém os dados do usuário logado
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        
      if (loggedInUser) {
          // Salva os dados do usuário no localStorage para a página de edição
          localStorage.setItem("userToEdit", JSON.stringify(loggedInUser));
      }


      window.location.href = "../html/registrationUser.html";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const logoutLink = document.getElementById('logout-link'); // Seleciona o link "Sair Sessão"

  // Adiciona um ouvinte de evento de clique ao link "Sair Sessão"
  logoutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão de seguir o link


      showDialog(
        `Você realmente deseja sair?`,'warning', // Mensagem ajustada
        function() {
                   // Se o usuário confirmar, remove os dados do usuário do Local Storage
         localStorage.removeItem("loggedInUser"); // Remove o usuário logado
         localStorage.removeItem("userToEdit"); // Remove o usuário a ser editado se necessário
        
        // Se o usuário confirmar, redireciona para a página de login
        window.location.href = "../html/login.html"; // Altere para o caminho correto do seu arquivo de login

        },
        function() { // Ação para o botão Cancelar (não excluir)
        console.log("Cancelado: O processo não foi excluído.");
        }
      );

      // // Pergunta ao usuário se ele realmente deseja sair
      // const confirmLogout = confirm("Você realmente deseja sair?");
      // if (confirmLogout) {
          
      //    // Se o usuário confirmar, remove os dados do usuário do Local Storage
      //    localStorage.removeItem("loggedInUser"); // Remove o usuário logado
      //    localStorage.removeItem("userToEdit"); // Remove o usuário a ser editado se necessário
        
      //   // Se o usuário confirmar, redireciona para a página de login
      //   window.location.href = "../html/login.html"; // Altere para o caminho correto do seu arquivo de login

      // }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Obtém o usuário logado do localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Recupera o objeto do usuário logado

  if (loggedInUser) {
    // Atualiza o nome do usuário no HTML
    const userNameSpan = document.querySelector(".user-info span");
    const userNameHeader = document.querySelector(".sub-menu-user-info h3");
    const userNameAvatar = document.querySelector(".user-avatar");
    const userNameAvatarSub = document.querySelector(".sub-menu-user-avatar");
    

    userNameSpan.textContent = loggedInUser.name; // Atualiza o nome no top bar
    userNameHeader.textContent = loggedInUser.name; // Atualiza o nome no submenu
    
    // Atualiza o avatar se o usuário tiver um arquivo de imagem
    if (loggedInUser.file) {
      userNameAvatar.src = loggedInUser.file; // Define o caminho da imagem
      userNameAvatarSub.src = loggedInUser.file;
    } else {
      userNameAvatar.src = "../assets/user.jpg"; // Caminho padrão caso não tenha um avatar
      userNameAvatarSub.src = "../assets/user.jpg";
    }

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
// // Função flexível para exibir o diálogo com 1 ou 2 botões
// function showDialog(message, onOkCallback, onCancelCallback = null) {
//   // Cria o overlay
//   const overlay = document.createElement("div");
//   overlay.style.position = "fixed";
//   overlay.style.top = 0;
//   overlay.style.left = 0;
//   overlay.style.width = "100%";
//   overlay.style.height = "100%";
//   overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//   overlay.style.display = "flex";
//   overlay.style.justifyContent = "center";
//   overlay.style.alignItems = "center";
//   overlay.style.zIndex = 1000;

//   // Cria a caixa do diálogo
//   const dialogBox = document.createElement("div");
//   dialogBox.style.backgroundColor = "#fff";
//   dialogBox.style.borderRadius = "8px";
//   dialogBox.style.padding = "20px";
//   dialogBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
//   dialogBox.style.textAlign = "center";
//   dialogBox.style.maxWidth = "400px";
//   dialogBox.style.width = "90%";
//   dialogBox.style.fontFamily = "sans-serif";

//   // Cria a mensagem do diálogo
//   const dialogMessage = document.createElement("p");
//   dialogMessage.textContent = message;
//   dialogMessage.style.marginBottom = "20px";

//   // Cria o botão OK
//   const okButton = document.createElement("button");
//   okButton.textContent = "OK";
//   okButton.style.backgroundColor = "#007bff";
//   okButton.style.color = "#fff";
//   okButton.style.border = "none";
//   okButton.style.padding = "10px 20px";
//   okButton.style.borderRadius = "5px";
//   okButton.style.marginRight = onCancelCallback ? "10px" : "0"; // Adiciona margem apenas se houver botão Cancelar
//   okButton.style.cursor = "pointer";
//   okButton.style.fontFamily = "sans-serif";

//   // Evento do botão OK
//   okButton.addEventListener("click", () => {
//     document.body.removeChild(overlay); // Remove o diálogo
//     if (onOkCallback) onOkCallback(); // Executa o callback de OK
//   });

//   // Adiciona o botão OK ao diálogo
//   dialogBox.appendChild(dialogMessage);
//   dialogBox.appendChild(okButton);

//   // Cria e adiciona o botão Cancelar, se necessário
//   if (onCancelCallback) {
//     const cancelButton = document.createElement("button");
//     cancelButton.textContent = "Cancelar";
//     cancelButton.style.backgroundColor = "#ccc";
//     cancelButton.style.color = "#333";
//     cancelButton.style.border = "none";
//     cancelButton.style.padding = "10px 20px";
//     cancelButton.style.borderRadius = "5px";
//     cancelButton.style.cursor = "pointer";
//     cancelButton.style.fontFamily = "sans-serif";

//     // Evento do botão Cancelar
//     cancelButton.addEventListener("click", () => {
//       document.body.removeChild(overlay); // Remove o diálogo
//       if (onCancelCallback) onCancelCallback(); // Executa o callback de Cancelar
//     });

//     dialogBox.appendChild(cancelButton); // Adiciona o botão Cancelar ao diálogo
//   }

//   overlay.appendChild(dialogBox);
//   document.body.appendChild(overlay);
// }

// // Exemplo de uso: Apenas o botão OK
// document.addEventListener("DOMContentLoaded", function () {
//   const okOnlyButton = document.getElementById("okOnlyButton");
//   okOnlyButton.addEventListener("click", function () {
//     showDialog("Este é um diálogo com apenas OK.", () => {
//       console.log("Botão OK foi clicado.");
//     });
//   });

//   // Exemplo de uso: OK e Cancelar
//   const confirmButton = document.getElementById("confirmButton");
//   confirmButton.addEventListener("click", function () {
//     showDialog(
//       "Tem certeza que deseja excluir o processo?",
//       () => {
//         console.log("Processo excluído com sucesso!");
//       },
//       () => {
//         console.log("Ação de exclusão cancelada.");
//       }
//     );
//   });
// });

// // Função para exibir o diálogo customizado com dois botões (OK e Cancelar)
// function showDialog(message, onOkCallback, onCancelCallback) {
//   // Cria o overlay
//   const overlay = document.createElement("div");
//   overlay.style.position = "fixed";
//   overlay.style.top = 0;
//   overlay.style.left = 0;
//   overlay.style.width = "100%";
//   overlay.style.height = "100%";
//   overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//   overlay.style.display = "flex";
//   overlay.style.justifyContent = "center";
//   overlay.style.alignItems = "center";
//   overlay.style.zIndex = 1000;

//   // Cria a caixa do diálogo
//   const dialogBox = document.createElement("div");
//   dialogBox.style.backgroundColor = "#fff";
//   dialogBox.style.borderRadius = "8px";
//   dialogBox.style.padding = "20px";
//   dialogBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
//   dialogBox.style.textAlign = "center";
//   dialogBox.style.maxWidth = "400px";
//   dialogBox.style.width = "90%";
//   dialogBox.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif

//   // Cria a mensagem do diálogo
//   const dialogMessage = document.createElement("p");
//   dialogMessage.textContent = message;
//   dialogMessage.style.marginBottom = "20px";

//   // Cria o botão OK
//   const okButton = document.createElement("button");
//   okButton.textContent = "OK";
//   okButton.style.backgroundColor = "#4976b6";
//   okButton.style.color = "#fff";
//   okButton.style.border = "none";
//   okButton.style.padding = "10px 20px";
//   okButton.style.borderRadius = "5px";
//   okButton.style.cursor = "pointer";
//   okButton.style.marginRight = "10px"; // Espaço entre os botões
//   okButton.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif

//   // Cria o botão Cancelar
//   const cancelButton = document.createElement("button");
//   cancelButton.textContent = "Cancelar";
//   cancelButton.style.backgroundColor = "#ccc";
//   cancelButton.style.color = "#fff";
//   cancelButton.style.border = "none";
//   cancelButton.style.padding = "10px 20px";
//   cancelButton.style.borderRadius = "5px";
//   cancelButton.style.cursor = "pointer";
//   cancelButton.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif

//   // Adiciona o evento de clique ao botão OK
//   okButton.addEventListener("click", () => {
//     document.body.removeChild(overlay); // Remove o diálogo
//     if (onOkCallback) onOkCallback(); // Executa o callback de OK, se existir
//   });

//   // Adiciona o evento de clique ao botão Cancelar
//   cancelButton.addEventListener("click", () => {
//     document.body.removeChild(overlay); // Remove o diálogo
//     if (onCancelCallback) onCancelCallback(); // Executa o callback de Cancelar, se existir
//   });

//   // Monta o diálogo com os botões OK e Cancelar
//   const buttonContainer = document.createElement("div");
//   buttonContainer.style.display = "flex";
//   buttonContainer.style.justifyContent = "center";
//   buttonContainer.appendChild(okButton);
//   buttonContainer.appendChild(cancelButton);

//   // Monta o conteúdo final do diálogo
//   dialogBox.appendChild(dialogMessage);
//   dialogBox.appendChild(buttonContainer);
//   overlay.appendChild(dialogBox);
//   document.body.appendChild(overlay);
// }


// }
// document.getElementById('numericInput').addEventListener('input', function (e) {
//   // Remove qualquer caractere que não seja dígito
//   this.value = this.value.replace(/[^0-9]/g, '');
// });