document.addEventListener('DOMContentLoaded', () => {
    const shoppingList = [
        { name: "Duona", price: 1.491 },
        { name: "Pienas", price: 0.9923 },
        { name: "Sūris", price: 3.789 },
        { name: "Kiaušiniai", price: 2.392 },
        { name: "Bananas", price: 1.194 }
    ];

    const shoppingListContainer = document.getElementById('shoppingList');

    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - `;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = `€${item.price.toFixed(2)}`;
        priceSpan.classList.add('price');

        listItem.appendChild(priceSpan);
        shoppingListContainer.appendChild(listItem);
    });
});