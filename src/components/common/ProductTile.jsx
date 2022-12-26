import React from "react";
import './../../css/common/ProductTile.css';
import AddToCart from "./AddToCart";
import UpdateCart from "./UpdateCart";
export default function Product({item, quantity, addToCart, updateCart}){

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
            {
            quantity==0 || quantity==null? <AddToCart itemId = {item.key} onClick = {addToCart}/>:
                <UpdateCart onClick = {updateCart} quantity = {quantity}  itemId = {item.key}/>
            }
        </div>
    )
}