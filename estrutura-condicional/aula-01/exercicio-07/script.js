document.addEventListener("DOMContentLoaded", function() {
    
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificarPalpite() {
       // Crie a logica aqui!
    }

    document.getElementById('btnTentar').addEventListener('click', verificarPalpite);
});
