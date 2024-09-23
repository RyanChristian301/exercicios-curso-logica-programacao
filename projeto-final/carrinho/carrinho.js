// // Função para carregar os itens do carrinho da memória (localStorage)
// function loadCartItems() {
//     // Recupera o carrinho do localStorage
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartItemsDiv = document.getElementById('cart-items');

//     cartItemsDiv.innerHTML = ''; // Limpa a área de exibição antes de adicionar os itens

//     if (cart.length === 0) {
//         cartItemsDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
//         return;
//     }

//     // Exibe os itens do carrinho
//     cart.forEach((item, index) => {
//         const itemDiv = document.createElement('div');
//         itemDiv.innerHTML = `
//             <h3>${item.name}</h3>
//             <p>Preço: R$${item.price}</p>
//             <button onclick="removeFromCart(${index})">Remover</button>
//         `;
//         cartItemsDiv.appendChild(itemDiv);
//     });
// }

// // Função para remover um item do carrinho
// function removeFromCart(itemIndex) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Remove o item do carrinho pelo índice
//     cart.splice(itemIndex, 1);

//     // Atualiza o carrinho no localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Recarrega os itens do carrinho
//     loadCartItems();
// }

// // Função para finalizar a compra
// function finalizePurchase() {
//     alert('Compra finalizada com sucesso!');
//     localStorage.removeItem('cart'); // Limpa o carrinho
//     loadCartItems(); // Recarrega o carrinho vazio
// }

// // Carrega os itens do carrinho quando a página é carregada
// window.onload = loadCartItems;
