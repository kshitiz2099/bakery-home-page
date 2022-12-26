import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartUpdate({children}){

    const [cart, setCart] = useState();

    const addItemToCart = (key, name)=>{
        console.log("Adding new Item");
        setCart({...cart, [key]: {quantity: 1, name: name}})
        console.log(cart);
    }

    const changeItemCount = (key, count)=>{
        console.log("Change Item count");
        setCart({...cart, [key]: { quantity: cart[key].quantity+count, name: cart[key].name}})
        console.log(cart);
    }

    const value = {
        addItemToCart,
        changeItemCount,
        cart
    }

    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}