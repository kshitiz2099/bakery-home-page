import React, { useState } from "react";
import Product from "../components/common/ProductTile";
import NavItem from "../components/Home/NavItem";
import './../css/Home/HomePage.css';

export default function Home(){


    const sampleItems = { 1: {
                key: 1,
                name: "Tiramisu",
                price: 280,
                imageName: "tiramisu"
            },
            
            2: {
                key: 2,
                name: "Chocolate Mousse",
                price: 200,
                imageName: "chocomousse"
            },
            
            3: {
                key: 3,
                name: "Cheesecake",
                price: 350,
                imageName: "cheesecake"
            },
            
            4: {
                key:4,
                name: "Waffle",
                price: 300,
                imageName: "waffle"
            },

            5: {
                key: 5,
                name: "Choco Tiramisu",
                price: 280,
                imageName: "chocotiramisu"
            }
    }

    const [cart, updateCart] = useState({});
    const [items, setItems] = useState(sampleItems);
    

    const addItemToCart = (key)=>{
        console.log(key);

        if(cart.hasOwnProperty(key)){
            console.log("Item exists, updating count");
            updateCart({...cart, [key]: cart[key]+1});
        }else{
            console.log("Adding new Item");
            updateCart({[key]: 1, ...cart})
        }
        
        console.log(cart);
    }

    const navItems = [
                        ["Products", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"],
                        ["Cakes", "Sed ut perspiciatis unde omnis iste natus"],
                        ["Recipes", "Excepteur sint occaecat cupidatat non proident"]
                    ];

        
        return(
            <div className = "home-page">
                <div className="top-color"></div>
                <div className = "nav-bar">
                    <NavItem title={navItems[0][0]} desc={navItems[0][1]}/>
                    <NavItem title={navItems[1][0]} desc={navItems[1][1]}/>
                    <NavItem title={navItems[2][0]} desc={navItems[2][1]}/>
                </div>
    
                <h2>NEW PRODUCTS</h2>
    
                <LineDivide/>
                <div className = "products">
                        <div className = "product-grid">
                            <Product item = {items[1]} addToCart = {addItemToCart}/>
                            <Product item = {items[2]} addToCart = {addItemToCart}/>
                            <Product item = {items[3]} addToCart = {addItemToCart}/>
                            <Product item = {items[4]} addToCart = {addItemToCart}/>
                            <Product item = {items[5]} addToCart = {addItemToCart}/>
                        </div>
                </div>
            </div>
        )
}

function LineDivide(){
    return(
        <div className="line-divide">
            <div className="line"></div>
            <div className="middle-circle"></div>
            <div className="line"></div>
        </div>
    )
}
