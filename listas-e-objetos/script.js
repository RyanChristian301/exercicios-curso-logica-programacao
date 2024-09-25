
const lista = [1, 2, 3];
// Adiciona um elemento no final da lista.
lista.push(4);  // [1, 2, 3, 4]
lista.push(5);

console.log('push')
console.log(lista);
console.log('---------------------------------')


const lista1 = [1, 2, 3];
// Remove o ultimo elemento da lista e retornar a lista sem o elemento.
const ultimo = lista1.pop();  // último = 3, lista = [1, 2]

console.log('pop')
console.log(ultimo);
console.log('---------------------------------')


const lista3 = [1, 2];
const lista4 = [3, 4];
// Uni duas lista e retorna uma nova lista 
const listaFinal = lista3.concat(lista4);  // [1, 2, 3, 4]

console.log('concat')
console.log(listaFinal);
console.log('---------------------------------')


const numeros = [1, 2, 3];
// Percorre cada elementa de uma lista e executa algo para cada elemento
const dobrados = numeros.map(num => num * 2);  // [2, 4, 6]

console.log('map')
console.log(dobrados);
console.log('---------------------------------')

const lista6 = [1, 2, 3, 4];
const filtrados = lista.filter(num => num > 2);  // [3, 4]

console.log('filter')
console.log(filtrados);
console.log('---------------------------------')

const lista66 = [1, 2, 3, 4];

// splice, remove um item da lista,
// o primeiro parâmetro indica o índice(posição do item), o segundo parâmetro a quantidade de itens a remover
lista66.splice(1,1)




lista.forEach(num => console.log(num));



for (const numero of numeroList) {
    console.log(numero);
}




console.log('length')
const lista8 = [1, 2, 3];
console.log(lista8.length);  



//_____________________________________________________________________//

//Objeto

const pessoa = {
    nome: 'Erick',
    idade: 30,
    cpf: 1234567899,
    senha: 123,
    rg: 123456,
    ehCareca: true,
    filho:{
        nome: 'Ryan',
        idade: 16,
        ehDanado: true,
        estudaIntegral: true
    },
    emprego:{
        dataInicio: '15/05/2020'
    },
    hobby: {
        filme: 'Titanic',
        esporte: 'natacao',
        timeFavorito: 'Sport'
    },
}
 const listaPessoas = [pessoa]

 if(pessoa.ehCareca){
    console.log('Voce nao tem cabelo, compre um chapeu e esconda essa careca')
 }
 else{
    console.log(' OPA MEU AMIGO, VAMOS CORTAR ESSE CABELO EM!!!')
 }



























// const listaDeNumeros = [1,2,3,4,5,6]

// const listaDeFrutas = ['mamao', 'abacaxi', 'uva']



// const numeroList = [10, 20, 30, 40];

// for (const numero of numeroList) {
//     console.log(numero);
// }




// Objetos

// const pessoa = {
//     nome: "Erick",
//     idade: 31,
//     casado: true,
//     filho: {
//         nome: "Lucas",
//         idade: 1
//     },
//     saudar: function() {
//         return `Olá, meu nome é ${this.nome}.`;
//     }
// };

// console.log(pessoa.nome); // Erick
// console.log(pessoa.saudar()); // Olá, meu nome é Erick.
