const url = "https://wordpress-561851-4306624.cloudwaysapps.com/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(){
  try{
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  }

  catch(error){
    console.log(error);
  }
}

getProducts();

function createHTML(products){
  products.forEach(function(product){
    productContainer.innerHTML += 
    `<a href="productpage.html?id=${product.id}">
    <div class="product">
      <img src="${product.images[0].src}" alt="${product.name}">
      <p> kr ${product.prices.price},-
      <h2>${product.name}</h2>
      <p>${product.short_description} </p>
    </div>
  </a>`;
    
  })
}