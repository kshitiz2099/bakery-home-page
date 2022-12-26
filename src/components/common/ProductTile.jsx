import React from "react";
import './../../css/common/ProductTile.css';

export default function Product({key, image, name, price, desc}){
    return(
        <div className="product">
            <div className="img-box">
                <img src={image} alt={name}/>
            </div>
            <p className="name">{name}</p>
            <p className="price">Rs. {price}</p>
            <AddToCart/>
        </div>
    )
}

function AddToCart(){
    return(
        <div className="add-to-cart">
            <p>Add to Cart</p>
        </div>
    )
}

function ChangeValue(){
    return(
        <div>
            Change Value
        </div>
    )
}