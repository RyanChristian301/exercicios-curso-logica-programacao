document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnVerificar").addEventListener("click", verificarPromocao);
});

function verificarPromocao() {
    const idade = parseInt(document.getElementById('idade').value);
    const estudante = document.getElementById('estudante').value;

    let resultado = '';

  

    document.getElementById('resultado').innerHTML = resultado;
}
