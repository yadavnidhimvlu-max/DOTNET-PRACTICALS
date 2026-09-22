if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker Registered'));
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

displayCart();

function addToCart(product) {
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

function displayCart() {
    let cartList = document.getElementById('cartList');

    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement('li');

        li.textContent = item;

        cartList.appendChild(li);
    });
}