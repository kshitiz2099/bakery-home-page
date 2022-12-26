import React from "react";
import CheckoutItem from "../components/Checkout/CheckoutItem";
import { useCart } from "../Contexts/CartContext";

export default function Checkout(){

    const {cart} = useCart();
    const keys = (cart==null)? [] : Object.keys(cart);

    const finalCheckout = ()=>{
        console.log(cart);
    }

    return(
        <div className="checkout-page">
            <div>Checkout Page</div>
            <div className = "checkout-table">
                <div className="checkout-table-header">
                    <div>S.No.</div>
                    <div>Name</div>
                    <div>Quantity</div>
                </div>
                <div className="checkout-table-rows">
                    {keys.filter(key => cart[key].quantity!=0).map(key=>  <CheckoutItem key = {key} id = {key} name = {cart[key].name} quantity = {cart[key].quantity}/>)}
                </div>
            </div>

            <button className = "checkout-btn" type="submit" onClick = {()=>finalCheckout()}>Checkout</button>
        </div>
    )
}