const products = [
  { name: "Laptop", price: "$999", image: "laptop.jpg" },
  { name: "Phone", price: "$599", image: "phone.jpg" },
  { name: "Headphones", price: "$199", image: "headphones.jpg" },
  { name: "Watch", price: "$149", image: "watch.jpg" },
];


let cartCount = 0;

const cartCountEl = document.getElementById("cart-count");
const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button>Add to Cart</button>
  `;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
  });

  productList.appendChild(card);
});
