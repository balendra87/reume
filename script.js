const products = [
  { id: 2, name: "Kitchen Set", price: 2000, category: "kitchen", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWQt0BV0qA9EkQHX6vWUWOZyxfaKd1KClgPSz34NtioU7TlYAHaQpZMmzzIINOVPdQyyNk8DFWVuodKOPHh5Lq80QnqBY1tc3cEEs3oo9aQINHy_cZdQ9AnA" },
  { id: 1, name: "Sofa Set", price: 5000, category: "house", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvCuB5IqhpUU3J3GPGdTTFwk-N_w7JrxEZcM18kSGaQPzCMrMvW-SDdles8VcrdVB7R3EkCMSnZ-f_jE8ss_uZ4D2XyjS6cArxSTAhSiQ" },
  { id: 3, name: "Lamp", price: 800, category: "other", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsh3y8aN9fRLf4g_u41ODxUgG2I3OSFSVPPz9ZBtjVyKO5m7pdXy6lAYrkIJRxI-aAc04JYWQVeuXw7VKp8Nktax1EVo2dvLlDlY2_HUk" },
  { id: 4, name: "Dining Table", price: 4500, category: "house", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-_9E-R2qK9mimPncTv5bq1O02z7cgynG1QvzMpFoJTMPN_K4s8LBs3yH5EzCVcPz9AREK4xlnbYGgrYPG2gpXxnzZ8bcbSc2UGIsAbCIM" },
];

function displayProducts(filtered = products) {
  const productSection = document.getElementById("products");
  productSection.innerHTML = "";
  filtered.forEach(product => {
    productSection.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

displayProducts();
