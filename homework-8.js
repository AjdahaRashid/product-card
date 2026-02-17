import { products } from './products-data.js';

function renderAllCards() {
    const container = document.querySelector('.container-list');
    const template = document.getElementById('product-card-template');

    products.forEach(product => {
        const card = template.content.cloneNode(true);

        card.querySelector('img').src = `images/${product.imageFileName}`;
        card.querySelector('img').alt = product.name;
        card.querySelector('.product-category').textContent = product.category;
        card.querySelector('.product-name').textContent = product.name;
        card.querySelector('.product-description').textContent = product.description;
        card.querySelector('.product-price').textContent = `${product.price.toLocaleString('ru-RU')} ₽`;

        const compoundList = card.querySelector('.product-compound');

        product.compound.forEach(item => {
            const li = document.createElement('li');
            li.className = 'product-compound-item';
            li.textContent = item;
            compoundList.appendChild(li);
        });

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderAllCards);

// задание 4

function makeNameDescriptionArray(productsArray) {
    return productsArray.reduce((acc, product) => {
        const productObject = { [product.name]: product.description };
        acc.push(productObject);
        return acc;
    }, []);
}
const descriptionArray = makeNameDescriptionArray(products);
console.log(descriptionArray);

function getCountFromUser() {
    while (true) {
        const input = prompt('Сколько карточек отобразить? От 1 до 5');
        if (input) return 5;
        const num = Number(input);
        alert('Ошибка! Введите целое число от 1 до 5.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const count = getCountFromUser();
    const productsToShow = products.slice(0, count);
    renderCards(productsToShow);
});