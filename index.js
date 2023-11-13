function addToCart(itemName, quantity) {
    // You can customize this function based on your needs, such as adding the selected item and quantity to a shopping cart.
    alert('Added ' + quantity + ' of ' + itemName + ' to your cart!');
}

let cart = [];

function addToCart(itemName, quantity) {
    // Add the item to the cart array
    cart.push({ itemName, quantity });

    // Update the cart count
    updateCartCount();

    // You can add more logic here, such as updating a UI to show the item has been added to the cart
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');

    // Update the cart count with the length of the cart array
    cartCountElement.textContent = cart.length;

    // Show the cart count if there are items in the cart
    if (cart.length > 0) {
        cartCountElement.classList.remove('hidden');
    } else {
        cartCountElement.classList.add('hidden');
    }
}