document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnVerificar").addEventListener("click", verificarPromocao);
});

function verificarPromocao() {
    const idade = parseInt(document.getElementById('idade').value);
    const estudante = document.getElementById('estudante').value;

    let resultado = '';

    if (isNaN(idade) || idade <= 0) {
        resultado = 'Por favor, insira uma idade válida.';
    } else {
        if (idade < 18 || (estudante === 'sim' && idade < 60)) {
            resultado = `<p>Parabéns! Você tem direito à promoção de ingressos.</p>`;
        } else {
            resultado = `<p>Desculpe, você não se qualifica para a promoção.</p>`;
        }
    }

    document.getElementById('resultado').innerHTML = resultado;
}
