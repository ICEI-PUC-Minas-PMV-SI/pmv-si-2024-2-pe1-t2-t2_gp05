
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"; // Biblioteca feather-icons
script.onload = () => {
    feather.replace(); 
};
document.head.appendChild(script);


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
    window.location.href = "../html/list.html"; // Redireciona para a nova página definida na variável
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const editRegisterLink = document.getElementById('edit-register-link'); // Seleciona o link "Editar Cadastro"

  // Adiciona um ouvinte de evento de clique ao link "Editar Cadastro"
  editRegisterLink.addEventListener('click', function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/registration.html";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const logoutLink = document.getElementById('logout-link'); // Seleciona o link "Sair Sessão"

  // Adiciona um ouvinte de evento de clique ao link "Sair Sessão"
  logoutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão de seguir o link

      // Pergunta ao usuário se ele realmente deseja sair
      const confirmLogout = confirm("Você realmente deseja sair?");
      if (confirmLogout) {
          // Se o usuário confirmar, redireciona para a página de login
          window.location.href = "../html/login.html"; // Altere para o caminho correto do seu arquivo de login
      }
      // Se não confirmar, o redirecionamento não acontece
  });
});



document.addEventListener("DOMContentLoaded", function() {

  const loginLink = document.getElementById("login-link");

  loginLink.addEventListener("click", function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário
    window.location.href = "../html/login.html";
  });
});


document.addEventListener("DOMContentLoaded", function() {

  const registrationLink = document.getElementById("registration-link");

  registrationLink.addEventListener("click", function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário
    window.location.href = "../html/registration.html";
  });
});


document.addEventListener("DOMContentLoaded", function() {

  const registrationButton = document.getElementById("account-creation");

    registrationButton.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/login.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {

  const loginButton = document.getElementById("submit");

    loginButton.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/list.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {

  const processButton = document.getElementById("new-process");

    processButton.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/create.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {

  const iconEdit = document.querySelectorAll(".edit-button");

  // Adiciona o evento de clique a cada botão de editar
  iconEdit.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/update.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {

  const iconView = document.querySelectorAll(".view-button"); // Como está a identificar por cla

  iconView.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/view.html";
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {

  const iconFile = document.querySelectorAll(".file-button"); // Como está a identificar por cla

  iconFile.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/documents.html";
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {

  const backbuttonCreate = document.getElementById("back-button-create");

    backbuttonCreate.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/list.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {

  const backbuttonUpload = document.getElementById("back-button-update");

    backbuttonUpload.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/list.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {

  const backbuttonDocuments = document.getElementById("back-button-documents");

    backbuttonDocuments.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/list.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {

  const backbuttonUpload = document.getElementById("back-button-upload");

    backbuttonUpload.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = "../html/documents.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {

  const newdocumentLawyerButton = document.getElementById("new-document-lawyer-button");

  newdocumentLawyerButton.addEventListener("click", function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário
    window.location.href = "../html/upload_lawyer.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {

  const newdocumentCustomerButton = document.getElementById("new-document-customer-button");

  newdocumentCustomerButton.addEventListener("click", function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário
    window.location.href = "../html/upload_customer.html";
  });
});

const selectElement = document.getElementById('filter-select');

// Função para alterar a cor conforme o valor selecionado
selectElement.addEventListener('change', function () {
    if (this.value === "") {
        // Placeholder selecionado, mantém a cor cinza
        this.style.color = 'gray';
    } else {
        // Outra opção selecionada, muda a cor para preto
        this.style.color = 'black';
    }
});


