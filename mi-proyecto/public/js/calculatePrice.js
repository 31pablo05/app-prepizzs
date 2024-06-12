// /public/js/calculatePrice.js

document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');
    const pricePerPizza = 5; // Precio fijo por prepizza, puedes cambiarlo según necesites

    quantityInput.addEventListener('input', () => {
        const quantity = parseInt(quantityInput.value, 10);
        if (!isNaN(quantity)) {
            priceInput.value = quantity * pricePerPizza;
        } else {
            priceInput.value = '';
        }
    });
});
