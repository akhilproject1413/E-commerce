import { cart} from "./backend/cart.js";
let paymentHtml="";


/*<section id="payment">*/
let totalPrice=0
cart.forEach((product)=>{
    totalPrice+=product.productPrice*product.quantity;
})
const discount=totalPrice*(5/100)
export const finalPrice=totalPrice-discount;
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

    <a href="order.html" id="checkout-btn">

        PROCEED TO CHECKOUT
    </a>

`
let payment=document.querySelector(".payment");
if(payment){
    payment.innerHTML=paymentHtml;
}
