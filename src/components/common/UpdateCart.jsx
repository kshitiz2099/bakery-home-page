import React from "react";

export default function UpdateCart({onClick, quantity, itemId}){
    return(
        <div className="update-cart">
            <div onClick = {()=>onClick(itemId, -1)}>-</div>
            <div>{quantity}</div>
            <div onClick = {()=>onClick(itemId, 1)}>+</div>
        </div>
    )
}