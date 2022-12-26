import React, { useState } from "react";
import './../../css/common/ProductTile.css';
import AddToCart from "./AddToCart";
import UpdateCart from "./UpdateCart";
export default function Product({item, quantity, addToCart, updateCart}){

    let image = null;

    const [showImage, toggleImage] = useState(true);
    try{
        image = require("./../../images/"+item.imageName+".jpg");
    }catch{
        
    }

    const switchInfo = ()=>{
        toggleImage(!showImage);
    }

    return(
        <div className="product" key={item.key}>
            <div className="img-box" onClick = {()=>switchInfo()}>

                {showImage && <img src={image} alt={item.name}/>}
                {!showImage && 
                
                    <div className="desc-overlay ">
                        <h4>Description</h4>
                        <div>{item.description}</div>
                    </div>
                }
            </div>
            <p className="name">{item.name}</p>
            <p className="price">Rs. {item.price}</p>
            {
            quantity==0 || quantity==null? <AddToCart itemId = {item.key} name = {item.name} onClick = {addToCart}/>:
                <UpdateCart onClick = {updateCart} quantity = {quantity}  itemId = {item.key}/>
            }
        </div>
    )
}