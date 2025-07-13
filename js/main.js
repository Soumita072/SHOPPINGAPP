// 1. Define products
const products = [
  { id: 1, name: 'Product One', price: 499, image: 'images/product1.jpg' },
  { id: 2, name: 'Product Two', price: 799, image: 'images/product2.jpg' },
  { id: 3, name: 'Product Three', price: 299, image: 'images/product3.jpg' },
  {id: 4, name: 'Product Four', price: 199, image: 'images/product4.jpg' },
  {id: 5, name: 'Product Five', price: 399, image: 'images/product5.jpg' },
  {id: 6, name: 'Product Six', price: 299, image: 'images/product6.jpg' },
  {id: 7, name: 'Product Seven', price: 599, image: 'images/product7.jpg' },
  {id: 8, name: 'Product Eight', price: 299, image: 'images/product8.jpg' },
  // add more as needed
];

// 2. Render products into the page
const productList = document.getElementById('product-list');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p>₹${p.price}</p>
    <button data-id="${p.id}">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// 3. Cart logic
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

productList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert('Added to cart! Total items: ' + cartCount);
  }
});