//Specific
// Redirecionamento Botão Voltar
document.addEventListener("DOMContentLoaded", function() {

    const backbuttonCreate = document.getElementById("back-button-create");
  
      backbuttonCreate.addEventListener("click", function(event) {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário
        window.location.href = "../html/listProcess.html";
      });
  });

// Local Storage (Salvar Processo) - Criar Processo
document.addEventListener("DOMContentLoaded", function() {
    // Recupera os processos existentes ou cria um novo array
    let processos = JSON.parse(localStorage.getItem("processos")) || [];
    // Obtém os dados do usuário logado
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Define o próximo processNumber como um número auto-incremental
    const novoProcessNumber = processos.length > 0 ? parseInt(processos[processos.length - 1].processNumber) + 1 : 1;

    // Atribui o processNumber ao campo do formulário
    document.getElementById("processNumber").value = novoProcessNumber.toString(); // Converte para string para manter o formato
  
    const submitButton = document.getElementById("create-submit-button");


  if (submitButton) {
      submitButton.addEventListener("click", function(event) {
          event.preventDefault();

          const processNumberc = document.getElementById("processNumber").value.trim(); // Agora já tem o valor atribuído
          const subjectc = document.getElementById("subject").value.trim();
          const entryDatec = document.getElementById("entryDate").value.trim();
          const lawyerc = document.getElementById("lawyer").value.trim();
          const clientNamec = document.getElementById("clientName").value.trim();
        
          // Validações básicas
          if (!processNumberc) {
            showDialog(`Por favor, preencha o campo Processo.`,`warning`, function () {                    
            });
            return; 
        }
        
        // Validações básicas
        if (!lawyerc) {
          showDialog(`Por favor, preencha o campo Advogado.`,`warning`, function () {
            // return;        
              });
              return; 
        }

        // Validações básicas
        if (!entryDatec ) {
          showDialog(`Por favor, preencha o campo Data Entrada.`,`warning`, function () {
            // return;        
              });
              return; 

          // alert("Por favor, preencha o campo Data Entrada.");
          // return;
      }

        // Validações básicas
        if (!clientNamec) {
          showDialog(`Por favor, preencha o campo Nome Cliente.`,`warning`, function () {
            // return;        
              });
              return; 
          // alert("Por favor, preencha o campo Nome Cliente.");
          // return;
      }


        // Validações básicas
          if (!subjectc) {
            showDialog(`Por favor, preencha o campo Assunto.`,`warning`, function () {
              // return;        
                });
                return; 
            // alert("Por favor, preencha o campo Assunto.");
            // return;
        }

            // Coleta os dados do formulário
            var processo = {
              processNumber: processNumberc,  // Agora já tem o valor atribuído
              subject: subjectc, 
              entryDate: entryDatec, 
              lawyer: lawyerc, 
              clientName: clientNamec, 
              nationality: document.getElementById("nationality").value,
              clientDocument: document.getElementById("clientDocument").value.trim(),
              clientAddress: document.getElementById("clientAddress").value.trim(),
              description: document.getElementById("description").value.trim(),
              status: "Em Andamento",
              createdBy: loggedInUser.name,
              documents: [] // Cria a chave documents como uma lista vazia
          };

          var processos = JSON.parse(window.localStorage.getItem("processos")) || [];
          // Adiciona o novo processo ao array
          processos.push(processo);
          // Armazena o array atualizado de volta no localStorage
          window.localStorage.setItem("processos", JSON.stringify(processos));

          // Opcional: Exibir uma mensagem de sucesso ou redirecionar o usuário
          showDialog(`Processo criado com sucesso!`,`info`, function () {
            window.location.href = "../html/listProcess.html";
              });
      });
  }
});
