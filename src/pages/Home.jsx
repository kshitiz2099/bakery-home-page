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

    const [cart, setCart] = useState({});
    const [items, setItems] = useState(sampleItems);
    const [itemKeys, setItemKeys] = useState(Object.keys(items));

    const addItemToCart = (key)=>{
        console.log("Adding new Item");
        setCart({...cart, [key]: 1})
        console.log(cart);
    }

    const changeItemCount = (key, count)=>{
        console.log("Change Item count");
        setCart({...cart, [key]: cart[key]+count})
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
                            {
                                itemKeys.map(itemKey => <Product key = {itemKey} item = {items[itemKey]} addToCart = {addItemToCart} updateCart = {changeItemCount} quantity = {cart.hasOwnProperty(itemKey)? cart[itemKey]: 0}/>)
                            }
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
