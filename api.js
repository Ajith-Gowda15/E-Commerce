document.addEventListener("DOMContentLoaded", () => {
    let product = document.getElementById("product");
    let searchInput = document.getElementById("search");
  
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        let products = data.products;
        displayProducts(products);
  
        searchInput.addEventListener("input", () => {
          let searchTerm = searchInput.value.toLowerCase();
          let filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
          );
          displayProducts(filteredProducts);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    function displayProducts(products) { 
    product.innerHTML = products
        .map(
          (product) => `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="card-body">
            <h3>${product.title}</h3>
            <p><b>Price: $${product.price}</b></p>
            <p>${product.description.slice(0,100)}</p>
          </div>
        </div>
      `
        )
        .join("");
    }
  });