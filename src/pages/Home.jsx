import React from "react";
import Product from "../components/common/ProductTile";
import NavItem from "../components/Home/NavItem";
import './../css/Home/HomePage.css';
import tiramisu from "./../images/tiramisu.jpg";

export default function Home(){

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
                    <Product name = "Tiramisu" price = "280" image = {tiramisu}/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
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