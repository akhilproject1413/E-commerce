import { wearingproducts,home_products,beauty_products,electronicsproducts } from "../data/allProducts.js"
export const cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();
let currentProduct;

        if(window.location.pathname==="/wearing.html"){
            currentProduct=wearingproducts;
        }
        else if(window.location.pathname==="/home.html"){
             currentProduct=home_products;
        }
        else if (window.location.pathname==="/Electronics.html"){
             currentProduct=electronicsproducts;
        }
        else if(window.location.pathname==="/beauty.html"){
             currentProduct=beauty_products;
        }



document.querySelectorAll(".product-btn").forEach((button) => {
    button.addEventListener("click", () => {

        const productId = Number(button.dataset.productId);
        
       const product = currentProduct.find((product) => {
            return product.id === productId
        })

      
        

        const cartProduct = cart.find((item) => {
            return item.productId === productId;
        })
        if (cartProduct) {
            cartProduct.quantity += 1;
        }

        else {
            cart.push({
                productId,
                productName: product.name,
                productImage: product.image,
                productPrice: product.price,
                quantity: 1

            })
        }


        localStorage.setItem("cart", JSON.stringify(cart))
        updateCartCount()

        console.log(productId);
        console.log(cart);
    })

})

function updateCartCount() {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });
    const cartCount = document.querySelector("#cart_count");

    if (cartCount) {
        cartCount.innerHTML = totalQuantity;
    }


}