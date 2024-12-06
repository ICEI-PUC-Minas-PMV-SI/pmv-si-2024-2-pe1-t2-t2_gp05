// Verifica se o usuário está logado
document.addEventListener("DOMContentLoaded", function () {
    // Tenta obter o usuário logado do localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    // Verifica se o usuário não está logado e se não está na página de login
    if (!loggedInUser && !window.location.pathname.includes("index.html")) {
        showDialog(`Você precisa estar logado para acessar esta página.`,`error`, function () {
            // Redireciona para a página de login
            window.location.href = "/index.html";
        return;        
          });
        // return;
    }
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const backbuttonCreate = document.getElementById("back-button-update");
      backbuttonCreate.addEventListener("click", function(event) {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário
        window.location.href = "/html/listProcess.html";
      });
  });


// Local Storage (UPDATE) - Atualizar Processo
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o número do processo a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber'); // Obtém como string

    // Obtém a lista de processos do Local Storage
    const processos = JSON.parse(localStorage.getItem("processos")) || [];

    // Verifica o conteúdo do localStorage
    console.log("Processos no localStorage:", processos);
    
    // Encontra o processo correspondente ao número do processo
    const processoAtual = processos.find(p => p.processNumber === processNumber); 

    // Verifica se o processo foi encontrado
    if (!processoAtual) {
        showDialog(`Processo não encontrado.`,`error`, function () {
            // Redireciona para a página de login
            window.location.href = "/html/listProcess.html";
        return;        
          });

    }

    // Preenche os campos do formulário com os dados do processo
    document.getElementById("processNumber").value = processoAtual.processNumber; // Campo desabilitado
    document.getElementById("lawyer").value = processoAtual.lawyer; // Campo desabilitado
    document.getElementById("entryDate").value = processoAtual.entryDate; // Campo desabilitado
    document.getElementById("clientName").value = processoAtual.clientName; // Campo editável
    document.getElementById("nationality").value = processoAtual.nationality; // Campo editável
    document.getElementById("clientDocument").value = processoAtual.clientDocument; // Campo editável
    document.getElementById("clientAddress").value = processoAtual.clientAddress; // Campo editável
    document.getElementById("subject").value = processoAtual.subject; // Campo editável
    document.getElementById("description").value = processoAtual.description; // Campo editável

    document.getElementById("update-submit-button").addEventListener("click", function(event) {
        event.preventDefault();

        //const processNumberc = document.getElementById("processNumber").value.trim(); // Agora já tem o valor atribuído
        const subjectc = document.getElementById("subject").value.trim();
        const clientNamec = document.getElementById("clientName").value.trim();

        // Validações básicas
        if (!subjectc) {
            showDialog(`Por favor, preencha o campo Assunto.`,`warning`, function () {
            });
            // alert("Por favor, preencha o campo Assunto.");
            return;
        }

        // Validações básicas
        if (!clientNamec) {
            showDialog(`Por favor, preencha o campo Nome Cliente.`,`warning`, function () {
            });
            // alert("Por favor, preencha o campo Nome Cliente.");
            return;
        }


        // Capturando os valores dos campos
        const updatedProcesso = {
            processNumber: processoAtual.processNumber, // Mantém o número do processo original
            lawyer: processoAtual.lawyer, // Mantém o advogado original
            entryDate: document.getElementById("entryDate").value.trim(),
            clientName: clientNamec, //document.getElementById("clientName").value.trim(),
            nationality: document.getElementById("nationality").value, // Campo editável
            clientDocument: document.getElementById("clientDocument").value.trim(),
            clientAddress: document.getElementById("clientAddress").value.trim(),
            subject: subjectc, //document.getElementById("subject").value.trim(),
            description: document.getElementById("description").value.trim(),
            status: processoAtual.status || "Em Andamento", // Mantém o mesmo status ou define um padrão
            documents: processoAtual.documents // Mantém a lista de documentos
        };

        // Atualiza o processo no Local Storage
        const index = processos.findIndex(proc => proc.processNumber === processNumber);
        if (index !== -1) {
            processos[index] = updatedProcesso; // Atualiza o processo
            localStorage.setItem("processos", JSON.stringify(processos));
            // alert(`Processo ${updatedProcesso.processNumber} atualizado com sucesso!`);
            showDialog(`Processo ${updatedProcesso.processNumber} atualizado com sucesso!`,`info`, function () {
                window.location.href = '/html/listProcess.html'; // Redireciona para a lista
            });

        } else {
            alert("Erro ao atualizar o processo."); // Notificação de erro caso não encontre
        }
    });
});

// Local Storage (UPDATE) - Atualizar Processo
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o número do processo a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get('processNumber'); // Obtém como string

    // Obtém a lista de processos do Local Storage
    const processos = JSON.parse(localStorage.getItem("processos")) || [];

    // Verifica o conteúdo do localStorage
    console.log("Processos no localStorage:", processos);
    
    // Encontra o processo correspondente ao número do processo
    const processoAtual = processos.find(p => p.processNumber === processNumber); 

    // Verifica se o processo foi encontrado
    if (!processoAtual) {
        showDialog(`Processo não encontrado.`,`error`, function () {
            // Redireciona para a página de login
            window.location.href = "/html/listProcess.html";
        return;        
          });

    }

    document.getElementById("complete-button").addEventListener("click", function(event) {

        // Capturando os valores dos campos
        const updatedProcesso = {
            processNumber: processoAtual.processNumber, // Mantém o número do processo original
            lawyer: processoAtual.lawyer, // Mantém o advogado original
            entryDate: document.getElementById("entryDate").value.trim(),
            clientName: document.getElementById("clientName").value.trim(),
            nationality: document.getElementById("nationality").value, // Campo editável
            clientDocument: document.getElementById("clientDocument").value.trim(),
            clientAddress: document.getElementById("clientAddress").value.trim(),
            subject: document.getElementById("subject").value.trim(),
            description: document.getElementById("description").value.trim(),
            status: "Concluído", // Mantém o mesmo status ou define um padrão
            documents: processoAtual.documents // Mantém a lista de documentos
        };

        // Atualiza o processo no Local Storage
        const index = processos.findIndex(proc => proc.processNumber === processNumber);
        if (index !== -1) {
            processos[index] = updatedProcesso; // Atualiza o processo
            localStorage.setItem("processos", JSON.stringify(processos));

            // Editado por Carol
            const statusElement = document.querySelector(`.table-row[data-process-number="${processNumber}"] .status-badge`);

            // alert(`Processo ${updatedProcesso.processNumber} atualizado com sucesso!`);
            showDialog(`Processo ${updatedProcesso.processNumber} atualizado com sucesso!`,`info`, function () {
                window.location.href = '/html/listProcess.html'; // Redireciona para a lista
            });

        } else {
            alert("Erro ao atualizar o processo."); // Notificação de erro caso não encontre
        }
    });
});
