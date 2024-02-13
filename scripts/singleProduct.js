const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id) {
  const url = "https://wordpress-561851-4306624.cloudwaysapps.com/wp-json/wc/store/products/" + id;
  const productContainer = document.querySelector(".singleProduct");

  async function getSingleProduct() {
    try {
      const response = await fetch(url);
      const product = await response.json();
      createHTML(product);
    } catch (error) {
      console.log(error);
    }
  }

  getSingleProduct();

  function createHTML(product) {
    productContainer.innerHTML += `
      <div class="product">
        <img src="${product.images[0].src}" alt="${product.name}">
        <p> kr ${product.prices.price},-
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>`;
  }
} else {
  console.error("Product ID not found in the URL");
}