document.addEventListener("DOMContentLoaded", function() {

    const backbuttonCreate = document.getElementById("back-button-documents");
  
      backbuttonCreate.addEventListener("click", function(event) {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário
        window.location.href = "/html/listProcess.html";
      });
  });

// Carregar documentos ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o número do processo a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber'); // Obtém como string

    // Obtém a lista de processos do Local Storage
    const processos = JSON.parse(localStorage.getItem("processos")) || [];

    //Utilizador Logado
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
        const newProcessButton = document.getElementById("new-document-lawyer-button");
        if (newProcessButton) {
            newProcessButton.style.display = "none"; // Esconde o botão
        }
      }


    // console.log("Processos no Local Storage:", processos);
    let listaProcessos;
    
    // Verifica o tipo de usuário
    if (loggedInUser.accountType === "cliente") {
      // Para "Cliente", filtrar processos criados por ele
      listaProcessos = processos.filter((processo) => normalizeString(processo.clientName) === normalizeString(loggedInUser.name));
    } else if (loggedInUser.accountType === "advogado") {
      // Para "Advogado", exibir todos os processos
      listaProcessos = processos;
    } else {
        showDialog(`Tipo de usuário inválido.`,`error`, function () {
          });
      return;
    }

    // Encontra o processo correspondente ao número do processo
    const processoAtual = listaProcessos.find(processo => processo.processNumber === processNumber); 

    // Verifica se o processo foi encontrado
    if (!processoAtual) {
        showDialog(`Tipo de usuário inválido.`,`error`, function () {
            window.location.href = "/html/listProcess.html"; // Redireciona se não encontrar o processo
        });
        
        return; // Para evitar continuar se o processo não foi encontrado
    }

    // Obtém os documentos do processo
    const documentos = processoAtual.documents || []; // Lista de documentos ou um array vazio

    const processTableBodyLawyer = document.getElementById("processTableBodyLawyer");
    const processTableBodyCustomer = document.getElementById("processTableBodyCustomer");

    // Limpa as tabelas antes de preencher
    processTableBodyLawyer.innerHTML = "";
    processTableBodyCustomer.innerHTML = "";

    // Tipos de documentos
    const tiposLawyer = ["Contrato", "Processo"];
    const tiposCustomer = [
        "Certidão Nascimento Requerente",
        "Certidão Nascimento Ascendente",
        "Certidão Casamento",
        "Documento Identificação",
        "Certidão Registro Criminal"
    ];

    // Preenchendo a tabela do advogado
    documentos.forEach(doc => {
        
        if (tiposLawyer.includes(doc.type)) {
            const row = document.createElement("tr");
            row.classList.add("table-row");

            // Define se o botão deve estar desabilitado com base no tipo do documento
            const isDisabled = (doc.file === ""); // Substitua "TIPO_ESPECIFICO" pela condição desejada

            // Verifica se o usuário logado é um cliente para ocultar os botões de editar, excluir e novo processo
            let actionButtons = "";
            if (loggedInUser.accountType === "cliente") {

                row.innerHTML = `
                <td class="table-cell">${doc.type}</td>
                <td class="table-cell">${new Date(doc.createdAt).toLocaleDateString()}</td>
                <td class="table-cell">${doc.createdBy}</td>
                <td class="table-action-cell">
                    <button id="download-button-lawyer" class="download-button ${isDisabled ? "disabled-button" : ""}" data-document-type="${doc.type}" ${isDisabled ? 'disabled' : ''} ${isDisabled ? 'title="Este documento não está disponível para download."' : 'title="Download Documento."'}> 
                    <i data-feather="download" class="document-icon-download"></i>
                    </button>
                </td>
            `;
            } else {
                row.innerHTML = `
                <td class="table-cell">${doc.type}</td>
                <td class="table-cell">${new Date(doc.createdAt).toLocaleDateString()}</td>
                <td class="table-cell">${doc.createdBy}</td>
                <td class="table-action-cell">
                    <button id="download-button-lawyer" class="download-button ${isDisabled ? "disabled-button" : ""}" data-document-type="${doc.type}" ${isDisabled ? 'disabled' : ''} ${isDisabled ? 'title="Este documento não está disponível para download."' : 'title="Download Documento."'}> 
                    <i data-feather="download" class="document-icon-download"></i>
                    </button>
                    <button class="document-trash-button" data-document-type="${doc.type}" title="Excluir Documento">
                        <i data-feather="trash" class="document-icon-trash"></i>
                    </button>
                </td>
            `;
            }

            processTableBodyLawyer.appendChild(row);
        }
    
        function normalizeString(str) {
            return str
                .trim() // Remove espaços em branco do início e do fim
                .replace(/\s+/g, '') // Remove todos os espaços em branco
                .toLowerCase() // Converte para minúsculas
                .normalize("NFD") // Normaliza os caracteres
                .replace(/[\u0300-\u036f]/g, ""); // Remove acentuação
        }
    
    });

    // Preenchendo a tabela do requerente
    documentos.forEach(doc => {
        if (tiposCustomer.includes(doc.type)) {
            const row = document.createElement("tr");
            row.classList.add("table-row");

            // Define se o botão deve estar desabilitado com base no tipo do documento
            const isDisabled = (doc.file === ""); // Substitua "TIPO_ESPECIFICO" pela condição desejada

            row.innerHTML = `
                <td class="table-cell">${doc.type}</td>
                <td class="table-cell">${new Date(doc.createdAt).toLocaleDateString()}</td>
                <td class="table-cell">${doc.createdBy}</td>
                <td class="table-action-cell">
                    <button id= "download-button-customer" class="download-button ${isDisabled ? "disabled-button" : ""}" data-document-type="${doc.type}" ${isDisabled ? "disabled" : ""} ${isDisabled ? 'title="Este documento não está disponível para download."' : 'title="Download Documento."'}>
                        <i data-feather="download" class="document-icon-download"></i>
                    </button>
                    <button class="document-trash-button" data-document-type="${doc.type}"  title="Excluir Documento">
                        <i data-feather="trash" class="document-icon-trash"></i>
                    </button>
                </td>
            `;
            processTableBodyCustomer.appendChild(row);
        }

    });

    // Inicializa os ícones Feather
    feather.replace();

    // Adiciona lógica para download e exclusão
    processTableBodyLawyer.addEventListener("click", function(event) {
        if (event.target.closest(".download-button")) {
            const documentType = event.target.closest(".download-button").getAttribute("data-document-type");
            // Localizar o documento usando o tipo de documento
            const index = processoAtual.documents.find(doc => normalizeString(doc.type) === normalizeString(documentType));
            // Cria um link temporário para download
            const link = document.createElement("a");
            link.href = index.file; // Base64 do documento
            link.download = `${documentType}.pdf`; // Define o nome do arquivo para download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Remove o link temporário após o download
            showDialog(`Download do documento ${documentType} realizado com sucesso.`,`info`, function () {
            });
            // alert(`Baixando documento: ${documentType}`);
        }

        if (event.target.closest(".document-trash-button")) {
            const documentType = event.target.closest(".document-trash-button").getAttribute("data-document-type");
            
            // if (confirm(`Tem certeza que deseja excluir o documento: ${documentType}?`)) {
            //     console.log(documentType)
            //     const tipoNormalizado = normalizeString(documentType); // Normaliza
            //     // Remove o documento da lista no Local Storage
            //     const index = processoAtual.documents.findIndex(doc => normalizeString(doc.type) === normalizeString(documentType));
            //     if (index !== -1) {
            //         processoAtual.documents.splice(index, 1); // Remove o documento
            //         localStorage.setItem("processos", JSON.stringify(processos)); // Atualiza o Local Storage
            //         alert(`Documento ${documentType} excluído com sucesso!`);
            //         window.location.reload()
            //     }
            // }

            // Exibe um diálogo de confirmação para excluir o processo
            showDialog(
                `Tem certeza que deseja excluir o documento?`,'warning', // Mensagem ajustada
                function() { // Ação para o botão OK (excluir)
                
                    const tipoNormalizado = normalizeString(documentType); // Normaliza
                    // Remove o documento da lista no Local Storage
                    const index = processoAtual.documents.findIndex(doc => normalizeString(doc.type) === normalizeString(documentType));
                        
                    if (index !== -1) {

                        // processoAtual.documents.splice(index, 1); // Remove o documento
                        // localStorage.setItem("processos", JSON.stringify(processos)); // Atualiza o Local Storage
                        // alert(`Documento ${documentType} excluído com sucesso!`);
                        // window.location.reload()

                        processoAtual.documents.splice(index, 1); // Remove o documento
                        localStorage.setItem("processos", JSON.stringify(processos)); // Atualiza o Local Storage
                        // alert(`Documento ${documentType} excluído com sucesso!`);
                        window.location.reload()
    
                    // // Exibe o diálogo de sucesso após excluir
                    // showDialog(`Processo excluído com sucesso!`, function () {
                    //     window.location.reload()
                    // });
                } else {
                    // Exibe o diálogo de erro

                    showDialog(`Erro: Processo não encontrado.`,`error`, function () {
                    });
        
                    // showDialog("Erro: Processo não encontrado.");
                }
                },
                function() { // Ação para o botão Cancelar (não excluir)
                console.log("Cancelado: O processo não foi excluído.");
                }
            );


        }
    });

    // Adiciona lógica para download e exclusão na tabela do requerente
    processTableBodyCustomer.addEventListener("click", function(event) {
        if (event.target.closest(".download-button")) {
            const documentType = event.target.closest(".download-button").getAttribute("data-document-type");
            // Localizar o documento usando o tipo de documento
            const index = processoAtual.documents.find(doc => normalizeString(doc.type) === normalizeString(documentType));
            // Cria um link temporário para download
            const link = document.createElement("a");
            link.href = index.file; // Base64 do documento
            link.download = `${documentType}.pdf`; // Define o nome do arquivo para download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Remove o link temporário após o download
            showDialog(`Download do documento ${documentType} realizado com sucesso.`,`info`, function () {
            });

            // alert(`Baixando documento: ${documentType}`);
        }    

        if (event.target.closest(".document-trash-button")) {
            const documentType = event.target.closest(".document-trash-button").getAttribute("data-document-type");
            
            // if (confirm(`Tem certeza que deseja excluir o documento: ${documentType}?`)) {
            //     const tipoNormalizado = normalizeString(documentType); // Normaliza
            //     const index = processoAtual.documents.findIndex(doc => normalizeString(doc.type) === tipoNormalizado);
            //     if (index !== -1) {
            //         processoAtual.documents.splice(index, 1); // Remove o documento
            //         localStorage.setItem("processos", JSON.stringify(processos)); // Atualiza o Local Storage
            //         alert(`Documento ${documentType} excluído com sucesso!`);
            //         window.location.reload()
            //         // Aqui você pode atualizar a tabela chamando uma função para recarregar os documentos
            //     }
            // }

            // Exibe um diálogo de confirmação para excluir o processo
            showDialog(
                `Tem certeza que deseja excluir o documento?`,'warning', // Mensagem ajustada
                function() { // Ação para o botão OK (excluir)
                
                    const tipoNormalizado = normalizeString(documentType); // Normaliza
                    const index = processoAtual.documents.findIndex(doc => normalizeString(doc.type) === tipoNormalizado);
                    
                    if (index !== -1) {

                        processoAtual.documents.splice(index, 1); // Remove o documento
                        localStorage.setItem("processos", JSON.stringify(processos)); // Atualiza o Local Storage
                        // alert(`Documento ${documentType} excluído com sucesso!`);
                        window.location.reload()
    
                    // Exibe o diálogo de sucesso após excluir
                    // showDialog(`Processo excluído com sucesso!`, function () {
                    //     window.location.reload()
                    // });
                } else {
                    // Exibe o diálogo de erro
                    showDialog(`Erro: Processo não encontrado.`,`error`, function () {
                    });
        
                    // showDialog("Erro: Processo não encontrado.");
                }
                },
                function() { // Ação para o botão Cancelar (não excluir)
                console.log("Cancelado: O processo não foi excluído.");
                }
            );
        }
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

document.addEventListener("DOMContentLoaded", function() {
    // Obtém o número do processo a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber'); // Obtém como string
    // Obtém a lista de processos do Local Storage
    const processos = JSON.parse(localStorage.getItem("processos")) || [];
    // Encontra o processo correspondente ao número do processo
    const processoAtual = processos.find(p => p.processNumber === processNumber); 
    // Função para lidar com o redirecionamento
    function handleRedirect(buttonType) {
        console.log("Número do processo:", processNumber);
        if (processNumber) {
            // Modifica a URL de acordo com o botão clicado
            const targetPage = buttonType === 'lawyer' ? '/html/uploadLawyer.html' : '/html/uploadCustomer.html';
            window.location.href = `${targetPage}?processNumber=${encodeURIComponent(processNumber)}`;
        } else {
            console.error("Número do processo não encontrado.");
        }
    }

    // Event listener para o botão de advogado
    const lawyerButton = document.getElementById("new-document-lawyer-button");
    if (lawyerButton) {
        lawyerButton.addEventListener("click", function() {
            handleRedirect('lawyer'); // Passa o tipo 'lawyer'
        });
    }

    // Event listener para o botão de cliente
    const customerButton = document.getElementById("new-document-customer-button");
    if (customerButton) {
        customerButton.addEventListener("click", function() {
            handleRedirect('customer'); // Passa o tipo 'customer'
        });
    }
});



// // Função para exibir o diálogo customizado com dois botões (OK e Cancelar)
// function showDialog(message, onOkCallback, onCancelCallback) {
//     // Cria o overlay
//     const overlay = document.createElement("div");
//     overlay.style.position = "fixed";
//     overlay.style.top = 0;
//     overlay.style.left = 0;
//     overlay.style.width = "100%";
//     overlay.style.height = "100%";
//     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     overlay.style.display = "flex";
//     overlay.style.justifyContent = "center";
//     overlay.style.alignItems = "center";
//     overlay.style.zIndex = 1000;
  
//     // Cria a caixa do diálogo
//     const dialogBox = document.createElement("div");
//     dialogBox.style.backgroundColor = "#fff";
//     dialogBox.style.borderRadius = "8px";
//     dialogBox.style.padding = "20px";
//     dialogBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
//     dialogBox.style.textAlign = "center";
//     dialogBox.style.maxWidth = "400px";
//     dialogBox.style.width = "90%";
//     dialogBox.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif
  
//     // Cria a mensagem do diálogo
//     const dialogMessage = document.createElement("p");
//     dialogMessage.textContent = message;
//     dialogMessage.style.marginBottom = "20px";
  
//     // Cria o botão OK
//     const okButton = document.createElement("button");
//     okButton.textContent = "OK";
//     okButton.style.backgroundColor = "#4976b6";
//     okButton.style.color = "#fff";
//     okButton.style.border = "none";
//     okButton.style.padding = "10px 20px";
//     okButton.style.borderRadius = "5px";
//     okButton.style.cursor = "pointer";
//     okButton.style.marginRight = "10px"; // Espaço entre os botões
//     okButton.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif
  
//     // Cria o botão Cancelar
//     const cancelButton = document.createElement("button");
//     cancelButton.textContent = "Cancelar";
//     cancelButton.style.backgroundColor = "#ccc";
//     cancelButton.style.color = "#fff";
//     cancelButton.style.border = "none";
//     cancelButton.style.padding = "10px 20px";
//     cancelButton.style.borderRadius = "5px";
//     cancelButton.style.cursor = "pointer";
//     cancelButton.style.fontFamily = "sans-serif"; // Define a fonte como sans-serif
  
//     // Adiciona o evento de clique ao botão OK
//     okButton.addEventListener("click", () => {
//       document.body.removeChild(overlay); // Remove o diálogo
//       if (onOkCallback) onOkCallback(); // Executa o callback de OK, se existir
//     });
  
//     // Adiciona o evento de clique ao botão Cancelar
//     cancelButton.addEventListener("click", () => {
//       document.body.removeChild(overlay); // Remove o diálogo
//       if (onCancelCallback) onCancelCallback(); // Executa o callback de Cancelar, se existir
//     });
  
//     // Monta o diálogo com os botões OK e Cancelar
//     const buttonContainer = document.createElement("div");
//     buttonContainer.style.display = "flex";
//     buttonContainer.style.justifyContent = "center";
//     buttonContainer.appendChild(okButton);
//     buttonContainer.appendChild(cancelButton);
  
//     // Monta o conteúdo final do diálogo
//     dialogBox.appendChild(dialogMessage);
//     dialogBox.appendChild(buttonContainer);
//     overlay.appendChild(dialogBox);
//     document.body.appendChild(overlay);
//   }

