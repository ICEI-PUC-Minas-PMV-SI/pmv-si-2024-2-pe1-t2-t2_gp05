// Redirecionamento Botão Voltar
document.addEventListener("DOMContentLoaded", function() {

    const backbuttonCreate = document.getElementById("back-button-view");
  
      backbuttonCreate.addEventListener("click", function(event) {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário
        window.location.href = "../html/listProcess.html";
      });
  });

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const processNumber = urlParams.get("processNumber");
    const processos = JSON.parse(localStorage.getItem("processos")) || [];
    const contextProcess = processos.find(prc => prc.processNumber === processNumber)

    if (contextProcess !== undefined) {
        const inputProcessNumber = document.getElementById('processNumber');
        inputProcessNumber.value = contextProcess.processNumber
        const lawyer = document.getElementById('lawyer');
        lawyer.value = contextProcess.lawyer
        const entryDate = document.getElementById('entryDate');
        entryDate.value = contextProcess.entryDate
        const clientName = document.getElementById('clientName');
        clientName.value = contextProcess.clientName
        const nationality = document.getElementById('nationality');
        nationality.value = contextProcess.nationality
        const clientDocument = document.getElementById('clientDocument');
        clientDocument.value = contextProcess.clientDocument
        const clientAddress = document.getElementById('clientAddress');
        clientAddress.value = contextProcess.clientAddress
        const subject = document.getElementById('subject');
        subject.value = contextProcess.subject
        const description = document.getElementById('description');
        description.value = contextProcess.description
    } else {
      showDialog(`Processo não encontrado.`,`error`, function () {
        // Redireciona para a página de login
        // window.location.href = "../html/listProcess.html";
    // return;        
      });
        // alert('Processo não encontrado')
    }
});
