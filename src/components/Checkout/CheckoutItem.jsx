import React from "react";
import "./../../css/Checkout/Checkout.css";

export default function CheckoutItem({id, name, quantity}){
    return(
        <div className = "checkout-item">
            <div>{id}</div>
            <div>{name}</div>
            <div>{quantity}</div>
        </div>
    )
}