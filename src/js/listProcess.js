
document.addEventListener("DOMContentLoaded", function () {
  // console.log("list.js carregado");

  const searchInput = document.getElementById("filter-select");
  const searchButton = document.getElementById("search-button");

  // Função para carregar processos do Local Storage
  function carregarProcessos(processosFiltrados = null) {
      const processos = JSON.parse(localStorage.getItem("processos")) || [];
      const processTableBody = document.getElementById("processTableBody");
      
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Obtém os dados do usuário logado
      if (!loggedInUser) {
        showDialog(`Você precisa estar logado para acessar esta página.`,`info`, function () {
          // Redireciona para a página de login
          window.location.href = "/index.html";
          return;
        });
      }

            // Verifica o tipo de usuário
      if (loggedInUser.accountType === "cliente") {
        // Esconde o botão "Novo Processo" para clientes
        const newProcessButton = document.getElementById("new-process");
        if (newProcessButton) {
            newProcessButton.style.display = "none"; // Esconde o botão
        }
      }

      let listaProcessos;
      
      // Verifica o tipo de usuário
      if (loggedInUser.accountType === "cliente") {
        // Para "Cliente", filtrar processos criados por ele
        listaProcessos = processos.filter((processo) => normalizeString(processo.clientName) === normalizeString(loggedInUser.name));
      } else if (loggedInUser.accountType === "advogado") {
        // Para "Advogado", exibir todos os processos
        listaProcessos = processos;
      } else {
        showDialog(`Tipo de usuário inválido.`, function () {
          return;
        });
      }

      // Se houver processos filtrados, usá-los; caso contrário, usar todos os processos
      listaProcessos = processosFiltrados  || listaProcessos;

      // Limpar a tabela atual
      processTableBody.innerHTML = "";

      // Adicionar cada processo como uma nova linha na tabela
      listaProcessos.forEach((processo) => {
          // console.log("Adicionando processo:", processo);
          const row = document.createElement("tr");
          row.className = "table-row";
          
          // Verifica se o usuário logado é um cliente para ocultar os botões de editar, excluir e novo processo
          let actionButtons = "";
          if (loggedInUser.accountType !== "cliente") {
              // Só exibe os botões de editar e excluir se o usuário não for do tipo "cliente"
              actionButtons = `
                  <button id="view-${processo.processNumber}" class="view-button" data-process-number="${processo.processNumber}" title="Visualizar Processo">
                      <i data-feather="eye" class="view-icon"></i>
                  </button>
                  <button id="edit-${processo.processNumber}" class="edit-button" data-process-number="${processo.processNumber}" title="Editar Processo"> 
                      <i data-feather="edit" class="edit-icon"></i>
                  </button>
                  <button id="file-${processo.processNumber}" class="file-button" data-process-number="${processo.processNumber}" title="Visualizar Documentos Associados">
                      <i data-feather="file" class="file-icon"></i>
                  </button>
                  <button id="trash-${processo.processNumber}" class="trash-button" data-process-number="${processo.processNumber}" title="Excluir Processo">
                      <i data-feather="trash" class="trash-icon"></i>
                  </button>
              `;
          } else {
              // Se for cliente, exibe apenas o botão de visualizar processo
              actionButtons = `
              <button id="view-${processo.processNumber}" class="view-button" data-process-number="${processo.processNumber}" title="Visualizar Processo">
                      <i data-feather="eye" class="view-icon"></i>
                  </button>
              <button id="file-${processo.processNumber}" class="file-button" data-process-number="${processo.processNumber}" title="Upload Ficheiro do Processo">
                      <i data-feather="file" class="file-icon"></i>
                  </button>    
              `;
          }

          row.innerHTML = `
              <td class="table-cell process-number">${processo.processNumber}</td>
              <td class="table-cell">${processo.subject}</td>
              <td class="table-cell">${new Date(processo.entryDate).toLocaleDateString()}</td>
              <td class="table-cell">${processo.lawyer}</td>
              <td class="table-cell">${processo.clientName}</td>
              <td class="status-badge ${
                  processo.status === "Concluído" ? "status-finished" : "status-in-progress"
              }">${processo.status}</td>
              <td class="table-action-cell">
                  ${actionButtons}
              </td>
          `;

          processTableBody.appendChild(row);
          
      });

      // Inicializar ícones
      if (typeof feather !== "undefined") {
        feather.replace();
      }

      // Reatribuir eventos após o carregamento
      atribuirEventosAosBotoes();

      // Inicializar os ícones após a adição das linhas
      if (typeof feather !== "undefined") {
          feather.replace();
      } else {
          console.error("Feather Icons não está definido");
      }

      function normalizeString(str) {
        return str
            .trim() // Remove espaços em branco do início e do fim
            .replace(/\s+/g, '') // Remove todos os espaços em branco
            .toLowerCase() // Converte para minúsculas
            .normalize("NFD") // Normaliza os caracteres
            .replace(/[\u0300-\u036f]/g, ""); // Remove acentuação
    }

  }

  // Função para filtrar processos
  function filtrarProcessos(query) {
      console.log("filtrar processo");
      const processos = JSON.parse(localStorage.getItem("processos")) || [];
      const lowerCaseQuery = query.toLowerCase();

      // Filtrar processos com base em todos os campos
      const processosFiltrados = processos.filter((processo) => {
          return (
              (processo.processNumber || "").toLowerCase().includes(lowerCaseQuery) ||
              (processo.subject || "").toLowerCase().includes(lowerCaseQuery) ||
              (new Date(processo.entryDate).toLocaleDateString() || "").includes(lowerCaseQuery) ||
              (processo.lawyer || "").toLowerCase().includes(lowerCaseQuery) ||
              (processo.clientName || "").toLowerCase().includes(lowerCaseQuery) ||
              (processo.status || "").toLowerCase().includes(lowerCaseQuery)
          );
      });

      return processosFiltrados;
  }

  // Evento de clique no botão de pesquisa
  searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      const query = searchInput.value.trim();

      if (query) {
          const processosFiltrados = filtrarProcessos(query);
          carregarProcessos(processosFiltrados);
      } else {
          // Se o campo de busca estiver vazio, recarregar todos os processos
          carregarProcessos();
      }
  });

  // Evento de entrada no campo de busca
  searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim();

      if (query === "") {
          carregarProcessos(); // Recarregar todos os processos se o campo for apagado
      }
  });

  // Carregar a tabela inicialmente com todos os processos
  carregarProcessos();
});


// Redirecionamento Ícones 
document.addEventListener("DOMContentLoaded", function() {
  const iconView = document.querySelectorAll(".view-button"); // Como está a identificar por cla
  iconView.forEach(function(button) {
    button.addEventListener("click", function(event) {
      const processNumber = button.id.replace('view-','')
      console.log("Número do processo:", processNumber);
      if (processNumber) {
          window.location.href = `/html/viewProcess.html?processNumber=${encodeURIComponent(processNumber)}`;
      } else {
          console.error("Número do processo não encontrado.");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const iconEdit = document.querySelectorAll(".edit-button");
  // Adiciona o evento de clique a cada botão de editar
  iconEdit.forEach(function(button) {
    button.addEventListener("click", function(event) {
      const processNumber = button.id.replace('edit-','')
      console.log("Número do processo:", processNumber);
      if (processNumber) {
          window.location.href = `/html/updateProcess.html?processNumber=${encodeURIComponent(processNumber)}`;
      } else {
          console.error("Número do processo não encontrado.");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const iconFile = document.querySelectorAll(".file-button"); // Como está a identificar por cla
  iconFile.forEach(function(button) {
    button.addEventListener("click", function(event) {
      const processNumber = button.id.replace('file-','')
      console.log("Número do processo:", processNumber);
      if (processNumber) {
          window.location.href = `/html/viewDocuments.html?processNumber=${encodeURIComponent(processNumber)}`;
      } else {
          console.error("Número do processo não encontrado.");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Carregar processos do Local Storage
  const processos = JSON.parse(localStorage.getItem("processos")) || [];
  const iconTrash = document.querySelectorAll(".trash-button"); // Como está a identificar por cla
  
  iconTrash.forEach(function(button) {
    button.addEventListener("click", function(event) {
      const processNumber = button.id.replace('trash-','')
      
      console.log("Número do processo:", processNumber);
      
      // Atualiza o processo no Local Storage
      const index = processos.findIndex(proc => proc.processNumber === processNumber);
      if (index !== -1) {
          
       
          // Exibe um diálogo de confirmação para excluir o processo
          showDialog(
            `Tem certeza que deseja excluir o processo ${processNumber}?`,`warning`, // Mensagem ajustada
            function() { // Ação para o botão OK (excluir)
              const index = processos.findIndex(proc => proc.processNumber === processNumber);
              if (index !== -1) {
                // Remove o processo do array
                processos.splice(index, 1);
                // Atualiza o Local Storage
                localStorage.setItem("processos", JSON.stringify(processos));
                window.location.reload()
              } else {
                // Exibe o diálogo de erro
                showDialog("Erro: Processo não encontrado.", function () {
                });
              }
            },
            function() { 
              console.log("Cancelado: O processo não foi excluído.");
            }
          );
        
        } else {
          showDialog(`Erro: Processo não encontrado.`, function () {
          });
        }
    });
  });
});

function atribuirEventosAosBotoes() {
  document.querySelectorAll(".view-button").forEach((button) => {
      button.addEventListener("click", (event) => {
          const processNumber = button.dataset.processNumber;
          window.location.href = `/html/viewProcess.html?processNumber=${encodeURIComponent(processNumber)}`;
      });
  });

  document.querySelectorAll(".edit-button").forEach((button) => {
      button.addEventListener("click", (event) => {
          const processNumber = button.dataset.processNumber;
          window.location.href = `/html/updateProcess.html?processNumber=${encodeURIComponent(processNumber)}`;
      });
  });

  document.querySelectorAll(".file-button").forEach((button) => {
      button.addEventListener("click", (event) => {
          const processNumber = button.dataset.processNumber;
          window.location.href = `/html/viewDocuments.html?processNumber=${encodeURIComponent(processNumber)}`;
      });
  });

  document.querySelectorAll(".trash-button").forEach((button) => {
      button.addEventListener("click", (event) => {
          const processNumber = button.dataset.processNumber;
          const processos = JSON.parse(localStorage.getItem("processos")) || [];
          const index = processos.findIndex((p) => p.processNumber === processNumber);
          
          if (index !== -1) {
              showDialog(
                  `Tem certeza que deseja excluir o processo ${processNumber}?`,
                  "warning",
                  function () {
                      processos.splice(index, 1);
                      localStorage.setItem("processos", JSON.stringify(processos));
                      carregarProcessos();
                  },
                  function () {
                      console.log("Exclusão cancelada.");
                  }
              );
          } else {
              showDialog("Erro: Processo não encontrado.");
          }
      });
  });
}



