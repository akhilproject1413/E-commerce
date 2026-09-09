import { beauty_products,wearingproducts,home_products,electronicsproducts } from "../data/allProducts.js";


function displayProducts(products, containerId) {

    const container = document.querySelector(containerId);

    // If this container doesn't exist on this HTML page, do nothing
    if (!container) {
        return;
    }

    let html = "";
    

    products.forEach((product) => {

        html += `
            <section class="product">

                <div>
                    <img src="${product.image}">
                </div>

                <p>${product.name}</p>

                <div class="product-information">

                    <p>Price: ₹${product.price}</p>

                    <p>Stock: ${product.stock}</p>

                    <div>
                        <span>Rating:</span>

                        <span class="rating-stars">
                            ${product.rating.stars}
                        </span>

                        <span class="rating-number">
                            ${product.rating.number}
                        </span>
                    </div>

                </div>

                <button class="product-btn" data-product-id=${product.id}>
                    ADD TO CART
                </button>

            </section>
        `;
    });

    container.innerHTML = html;
}


// Different pages
displayProducts(wearingproducts, "#products_wear");

displayProducts(electronicsproducts, "#products_electronics");

displayProducts(home_products, "#products_home");

displayProducts(beauty_products, "#products_beauty");

