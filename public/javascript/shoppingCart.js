document.addEventListener('DOMContentLoaded', function () {
    // Sample data for demonstration purposes
    const sampleData = [
        { id: 1, name: 'Strawberry Delight', price: 19.99, quantity: 1 },
        // Add more sample data as needed
    ];

    // Function to render cart items
    function renderCartItems() {
        const cartItemsContainer = document.querySelector('.grid-cols-1');
        const cartTotalElement = document.getElementById('cart-total');

        // Clear existing items
        cartItemsContainer.innerHTML = '';

        // Calculate total
        let total = 0;

        // Render each item
        sampleData.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('bg-pink-300', 'p-4', 'rounded-md', 'shadow-md');
            cartItem.dataset.productId = item.id;

            // Cart item content
            cartItem.innerHTML = `
            <div class="flex justify-between items-center">
                <img src="./images/Strawberry-Cream-Filled-Doughnuts.jpg" alt="Product Image" class="w-20 h-20 object-cover rounded">
                <div class="ml-4">
                    <h3 class="text-xl font-bold font-sans mb-2">${item.name}</h3>
                    <p class="text-lg font-sans text-black">${item.description}</p>
                </div>
            </div>
            <div class="mt-4 flex justify-between items-center">
                <div class="flex items-center">
                    <button class="text-black text-3xl px-2 focus:outline-none font-bold" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="text-xl font-bold mx-2">${item.quantity}</span>
                    <button class="text-black text-2xl px-2 focus:outline-none font-bold" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <p class="text-2xl font-bold text-[#4D767A]">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="mt-4 flex justify-end">
                <button class="text-pink-500 hover:underline focus:outline-none" onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;

            // Update total
            total += item.price * item.quantity;

            cartItemsContainer.appendChild(cartItem);
        });

        // Update total element
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Function to update quantity
    window.updateQuantity = function (productId, quantityChange) {
        const item = sampleData.find(item => item.id === productId);

        if (quantityChange === -1 && item.quantity > 1) {
            item.quantity--;
        } else if (quantityChange === 1) {
            item.quantity++;
        }

        // Re-render cart items
        renderCartItems();
    };

    // Function to remove item
    window.removeItem = function (productId) {
        const index = sampleData.findIndex(item => item.id === productId);
        if (index !== -1) {
            sampleData.splice(index, 1);
        }

        // Re-render cart items
        renderCartItems();
    };

    // Initial rendering
    renderCartItems();
});