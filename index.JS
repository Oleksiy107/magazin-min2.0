function showProducts(category) {
  const productsContainer = document.getElementById("product-list");
  const productInfoContainer = document.getElementById("product-info");

  const categories = {
    Electronics: ["Smartphone", "Laptop"],
    Clothing: ["T-shirt", "Jeans"],
    Cosmetics: ["Lipstick", "Face Mask"],
  };

  // Очистити контейнери перед відображенням
  productsContainer.innerHTML = "";
  productInfoContainer.innerHTML = "";

  // Відображення категорій, якщо категорія не вибрана
  if (!category) {
    const categoryItems = document.getElementsByClassName("category-item");
    for (const categoryItem of categoryItems) {
      categoryItem.style.display = "block";
      categoryItem.onclick = function () {
        const selectedCategory = this.innerHTML;
        for (const categoryItem of categoryItems) {
          categoryItem.style.display = "none";
        }
        showProducts(selectedCategory);
      };
    }
  } else {
    productsContainer.innerHTML =
      '<h2>Products in category "' + category + '"</h2>';

    const backButton = document.createElement("button");

    categories[category].forEach(function (product) {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = product;
      productItem.onclick = function () {
        productInfoContainer.innerHTML =
          '<h2>Information about the product "' + product + '"</h2>';

        const buyButton = document.createElement("button");
        buyButton.innerHTML = "Buy";
        buyButton.onclick = function () {
          alert("Product purchased!");

          productInfoContainer.innerHTML = "";
          showProducts(null);
        };

        productInfoContainer.appendChild(buyButton);
      };

      productsContainer.appendChild(productItem);
    });
  }
}
