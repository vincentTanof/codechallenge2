function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function saveCart(cartItems) {
    saveToLocalStorage('cart', cartItems);
}

function loadCart() {
    return getFromLocalStorage('cart') || [];  // Return an empty array if the cart is empty
}

function addToCart(product) {
    const cart = loadCart();
    cart.push(product);  
    saveCart(cart);     
}

function displayCartItems() {
    const cartItems = loadCart();  
    const cartList = document.getElementById('cart-items');
    cartItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);  
    });
}
