document.getElementById('cadastro-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Recupera os usuários cadastrados do localStorage ou cria um array vazio
    let users = JSON.parse(localStorage.getItem('users')) || [];


    // Verifica se o usuário já existe
    const userExists = users.find(user => user.username === newUsername);

    if (userExists) {
        alert('Este usuário já está cadastrado. Tente outro nome.');
        return;
    }

    // Adiciona o novo usuário à lista de usuários
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuário cadastrado com sucesso!');
    window.location.href = '../tela-login/login.html';
});


// criar lista de usuario
const usuarios = [{ nome: 'a', senha: 1 }, { nome: 'b', senha: 2 }, { nome: 'c', senha: 3 }]

for (const user of usuarios) {
    console.log(user)
}

console.log('------------------------------------')

const userNaoExistente = usuarios.find(u => u.nome === 'd')

console.log(userNaoExistente)

if (userNaoExistente) {

} else {
    console.log(' voce pode se cadastrar!!!!')
}



