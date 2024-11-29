// Local Storage (DELETE) - Excluir Processo
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
        console.error("Processo não encontrado:", processNumber);
        alert("Processo não encontrado.");
        window.location.href = "../html/listProcess.html"; // Redireciona se não encontrar o processo
        return; // Para evitar continuar se o processo não foi encontrado
    }
  
    document.getElementById("update-submit-button").addEventListener("click", function(event) {
        event.preventDefault();

       

        // Atualiza o processo no Local Storage
        const index = processos.findIndex(proc => proc.processNumber === processNumber);
        if (index !== -1) {
            processos[index] = updatedProcesso; // Atualiza o processo
            processos.splice(index, 1);
            localStorage.setItem("processos", JSON.stringify(processos));
            alert(`Processo ${updatedProcesso.processNumber} atualizado com sucesso!`);
            window.location.href = '../html/listProcess.html'; // Redireciona para a lista
        } else {
            alert("Erro ao atualizar o processo."); // Notificação de erro caso não encontre
        }
    });
});
