console.log('testeee')

const menu = document.getElementById('menu');
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const cartCounter = document.getElementById('cart-counter');
const addressInput = document.getElementById('address');
const addressWarn = document.getElementById('address-warn');


// Adicionando um event listener ao botão
cartBtn.addEventListener("click", function() {
    // Alterando o estilo de exibição do modal do carrinho para "flex" quando o botão é clicado
    cartModal.style.display = "flex";
});

