
import {cart} from "./backend/cart.js";
cartView();

 
function cartView(){
let cartHtml="";
console.log(cart);

cart.forEach((product)=>{
cartHtml+=` <section class="cart-product">

                <div>
                    <img src=${product.productImage} alt="Product">
                </div>

                <div>
                    <p>${product.productName}</p>
                </div>  

                <div class="price">
                    <p>Price:₹${product.productPrice}</p>
                </div>

                <div class="quantity">
                <span>Quantity:</span><span class="quantity_number"> ${product.quantity}</span>
                </div>
                
                <div class="buy-again" >
                    <button class="buy_btn" data-product-id=${product.productId}>BUY AGAIN</button>
                </div>
                 <div >
                    <button class="Delete" data-product-id=${product.productId}>Delete</button>
                </div>

            </section>`
            })
    
document.querySelector("#cart_products").innerHTML=cartHtml;
        }
    


/* BUY AGAIN INCREASE QUANTITY*/
buyAgain();
function buyAgain(){

document.querySelectorAll(".buy_btn").forEach((button)=>{
    button.addEventListener("click",()=>{
        const productId=Number(button.dataset.productId);
        const cartProduct=cart.find((product)=>{
            return product.productId===productId;
        })
        cartProduct.quantity+=1
        button.closest(".cart-product").querySelector(".quantity_number").innerHTML=cartProduct.quantity;
         
        localStorage.setItem("cart",JSON.stringify(cart));
        totalQuantity();
      
      
        

payment();
    })

})
}

/*DELETE BUTTON*/
DeleteBtn();
function DeleteBtn(){
document.querySelectorAll(".Delete").forEach((button)=>{
    button.addEventListener("click",()=>{
        const productId=Number(button.dataset.productId);
        const productIndex=cart.findIndex((cartProduct)=>{
            return cartProduct.productId===productId;
        })
        cart.splice(productIndex,1);
      
       
 localStorage.setItem("cart",JSON.stringify(cart));
   cartView();
   totalQuantity();
 DeleteBtn();
 buyAgain();
 payment();

            })
    
;
        
        
        

    })

}


/*  PAYMENT SUMMARY*/

function payment(){


let paymentHtml="";



let totalPrice=0
cart.forEach((product)=>{
    totalPrice+=product.productPrice*product.quantity;
})
const discount=totalPrice*(5/100);
const finalPrice=totalPrice-discount;
    paymentHtml=`<h2>Payment Summary</h2>

    <div class="payment-row">
        <span>Total Price</span>
        <span>₹${totalPrice}</span>
    </div>

    <div class="payment-row">
        <span>Delivery</span>
        <span>FREE</span>
    </div>

    <div class="payment-row">
        <span>Discount</span>
        <span>5%</span>
    </div>

    <hr>

    <div class="payment-total">
        <span>Total</span>
        <span>₹${finalPrice}</span>
    </div>

    <a href="checkout.html"  id="checkout-btn">
        PROCEED TO CHECKOUT
    </a>
`
document.querySelector(".payment").innerHTML=paymentHtml;
}
payment();
/* TOTAL QUANTITY*/
function totalQuantity(){
    let totalQuantityValue=0;
    cart.forEach((cartProduct)=>{
       
         totalQuantityValue+=cartProduct.quantity;
         
    })
    document.querySelector("#cart_count").innerHTML=totalQuantityValue;
}