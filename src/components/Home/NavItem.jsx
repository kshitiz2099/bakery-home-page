import React from "react";
import "./../../css/Home/NavItem.css";

export default function NavItem({title, desc}){
    return(
        <div className="nav-item">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}