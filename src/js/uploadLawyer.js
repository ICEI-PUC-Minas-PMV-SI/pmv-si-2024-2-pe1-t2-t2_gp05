document.addEventListener("DOMContentLoaded", function() {
    // Obtém o número do processo a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber'); // Obtém como string
    
    // Obtém a lista de processos do Local Storage
    const processos = JSON.parse(localStorage.getItem("processos")) || [];
        
    // Encontra o processo correspondente ao número do processo
    const processoAtual = processos.find(p => p.processNumber === processNumber); 

    const backbuttonCreate = document.getElementById("back-button-upload");
  
    backbuttonCreate.addEventListener("click", function(event) {
      event.preventDefault();  // Impede o comportamento padrão de envio do formulário
      window.location.href = `/html/viewDocuments.html?processNumber=${encodeURIComponent(processNumber)}`;
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber');
    const processos = JSON.parse(localStorage.getItem("processos")) || [];
    const processoAtual = processos.find(p => p.processNumber === processNumber);
    // Obtém os dados do usuário logado
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


    if (!processoAtual) {
        showDialog(`Processo não encontrado.`,`error`, function () {
        return;        
          });

    }

    document.getElementById("processNumber").value = processoAtual.processNumber;
    document.getElementById("lawyer").value = processoAtual.lawyer;
    document.getElementById("clientName").value = processoAtual.clientName;
    document.getElementById("documentType").value = processoAtual.documentType;

    // Evento para salvar as alterações sem recarregar a página
    document.getElementById("update-submit-button-Lawyer").addEventListener("click", function(event) {
        event.preventDefault();
        
        // event.preventDefault(); // Garante que a página não recarregue
        const urlParams = new URLSearchParams(window.location.search);
        const processNumber = urlParams.get('processNumber');
        const processos = JSON.parse(localStorage.getItem("processos")) || [];
        const processoAtual = processos.find(p => p.processNumber === processNumber);
        const doctype = document.getElementById("documentType").value; // Tipo do documento
        const fileBase64 = documentBase64;


        if (!processoAtual) {
            showDialog(`Processo não encontrado para salvar.`,`warnging`, function () {
            });
            // alert("Processo não encontrado para salvar.");
            return;
        }

        if (!doctype) {
            showDialog(`Por favor, preencha o campo Tipo Documento.`,`warnging`, function () {
            });
            // alert("Por favor, preencha o campo Tipo Documento");
            return; // Impede o envio do formulário
        }

        if (!fileBase64 ) {
            showDialog(`Por favor, informe o documento.`,`warnging`, function () {
            });

            // alert("Por favor, informe o documento.");
            return; // Impede o envio do formulário
        }


        // Cria um novo documento para adicionar à lista de documentos do processo
        const newDocument = {
            id: `doc${processoAtual.documents.length + 1}`, // ID incremental
            type: doctype, // Tipo do documento
            createdAt: new Date().toISOString(), // Data atual
            createdBy: loggedInUser.name, // Nome do advogado
            file: fileBase64
        };
        
    
        // Adiciona o novo documento ao processo
        processoAtual.documents.push(newDocument);
    
        // Atualiza o processo no Local Storage
        const index = processos.findIndex(proc => proc.processNumber === processNumber);
        if (index !== -1) {
            processos[index] = processoAtual;
            localStorage.setItem("processos", JSON.stringify(processos));

            showDialog(`Documento foi adicionado ao processo com sucesso!`,`info`, function () {
                window.location.href = `/html/viewDocuments.html?processNumber=${encodeURIComponent(processNumber)}`;
            });

        } else {
            showDialog(`Erro ao atualizar o processo.`,`error`, function () {
            });
        }
    });

    // Evento para carregar o arquivo em Base64
    document.getElementById("file-upload").addEventListener("change", handleFileUpload);
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

         
        // Verifica se o arquivo é um PDF
        if (file.type === "application/pdf") {
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

            // alert("Apenas arquivos PDF são permitidos.");
            fileInputText.textContent = "Apenas arquivos PDF são permitidos.";
            documentBase64 = ""; // Limpa qualquer valor existente
            return;
        }  
    } else {
        fileInputText.textContent = "Nenhum arquivo escolhido"; // Limpa o texto se nenhum arquivo for selecionado
    }
}



