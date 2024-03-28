import AppContext from "../context";
import React from "react";

export const useCard = () =>{
    const {cartItems, setCartItems} = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)

    return{cartItems, setCartItems, totalPrice}
}

