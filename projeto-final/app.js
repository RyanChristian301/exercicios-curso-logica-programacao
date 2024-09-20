// Lista de produtos estática (ou poderia ser recuperada de uma API)
let productList = [
    { id: 1, name: 'Notebook', price: 2500 },
    { id: 2, name: 'Mouse', price: 50 },
    { id: 3, name: 'Teclado', price: 120 },
    { id: 4, name: 'Monitor', price: 800 }
];

// Verifica se o usuário está logado
let loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
    document.getElementById('search').style.display = 'block'; // Exibe a barra de busca
    document.getElementById('login-link').textContent = 'Logout'; // Muda o texto de login para logout
    document.getElementById('login-link').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        alert('Logout realizado com sucesso!');
        window.location.reload(); // Recarrega a página
    });
}

// Função para exibir produtos
function displayProducts(products) {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = ''; // Limpa a lista antes de gerar

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: R$${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
        `;
        productListDiv.appendChild(productItem);
    });
}

// Exibe todos os produtos ao carregar a página
window.onload = function() {
    displayProducts(productList); // Exibe todos os produtos inicialmente
};

// Função de busca de produtos
function searchProduct() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts); // Exibe os produtos que correspondem à busca
    } else {
        document.getElementById('product-list').innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    // Verifica se o usuário está logado
    if (!loggedInUser) {
        alert('Por favor, faça login para adicionar itens ao carrinho.');
        return;
    }

    // Recupera o carrinho do localStorage ou inicializa um novo carrinho
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adiciona o produto ao carrinho
    const product = productList.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho atualizado no localStorage
        alert(`${product.name} adicionado ao carrinho!`);
    }
}
