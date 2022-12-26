import React from "react";
import './../../css/common/ProductTile.css';
import AddToCart from "./AddToCart";
export default function Product({item, addToCart}){

    let image = null;

    try{
        image = require("./../../images/"+item.imageName+".jpg");
    }catch{
        
    }

    return(
        <div className="product" key={item.key}>
            <div className="img-box">
                <img src={image} alt={item.name}/>
            </div>
            <p className="name">{item.name}</p>
            <p className="price">Rs. {item.price}</p>
            <AddToCart itemId = {item.key} onClick = {addToCart}/>
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