document.addEventListener("DOMContentLoaded", function() {
    
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificarPalpite() {
        const palpite = parseInt(document.getElementById('palpite').value);
       // Crie a logica aqui!

        document.getElementById('resultado').innerHTML = resultado;
    }

    document.getElementById('btnTentar').addEventListener('click', verificarPalpite);
});
