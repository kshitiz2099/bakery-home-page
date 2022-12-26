import React from "react";

export default function AddToCart({onClick, itemId, name}){
    return(
        <div className="add-to-cart" onClick={()=> onClick(itemId, name)}>
            <p>Add to Cart</p>
        </div>
    )
}