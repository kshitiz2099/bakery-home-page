import React from "react";

export default function AddToCart({onClick, itemId}){
    return(
        <div className="add-to-cart" onClick={()=> onClick(itemId)}>
            <p>Add to Cart</p>
        </div>
    )
}