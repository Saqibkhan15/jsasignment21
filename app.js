var products = [
    { image: 'images/1.webp', name: 'Samsung S24ultra 12/256GB Physical dual DS Box Pack', price: 'Rs249,999' },
    { image: 'images/2.webp', name: 'Product Sony Xperia 1 mark 3 ,5 Mark 3,2,1', price: 'Rs 35,500' },
    { image: 'images/3.webp', name: 'Redmi k40 Gaming Device', price: 'Rs 59,000' },
    { image: 'images/4.webp', name: 'Apple iPhone 13 Pro Max 256GB (with PTA Approved)', price: 'Rs 278,000' }
];

var productCards = document.getElementById('productCards');
products.forEach(function(product) {
    var card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="cardImgTop" alt="${product.name}">
            <div class="cardBody">
                <h5 class="cardTitle">${product.name}</h5>
                <p class="cardText">${product.price}</p>
                <button class="btn btnLight"><i class="fa fa-heart"></i></button>
            </div>
        </div>
    `;
    productCards.appendChild(card);
});
