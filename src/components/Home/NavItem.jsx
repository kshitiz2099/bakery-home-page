import React from "react";
import "./../../css/Home/NavItem.css";

export default function NavItem({imageName, title, desc}){

    let image = null;

    try{
        image = require("./../../images/"+imageName+".png");
    }catch{
        
    }

    return(
        <div className="nav-item">
            <div className = "navbar-image">
                <img src={image} alt={title}/>
            </div>
            <div className = "navbar-text">
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}