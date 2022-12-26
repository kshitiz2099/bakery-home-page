import React from "react";
import { useLocation } from "react-router-dom";

export default function Checkout(){

    const {state} = useLocation();
    const {cart} = state;

    return(
        <div onClick={()=>console.log(cart)}>
            Checkout Page
        </div>
    )
}