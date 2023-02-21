import React, { createContext, useState } from "react";
import { PRODUCTS } from "../prod-data";

export const shopContext=createContext(null)

export const ShopContextProvider=(props)=>{
    const getDefaultCart=()=>{
        let cart={}
        for(let i=1;i<PRODUCTS.length+1;i++){
            cart[i]=0
        }
        return cart;
    }

    const [cartItems,setcartItems]=useState(getDefaultCart())



    const addtoCart=(id)=>{
        setcartItems((prev)=>({...prev,[id]:(prev[id]+1)}))
    }

    const removefromCart=(id)=>{
        setcartItems((prev)=>({...prev,[id]:(prev[id]-1)}))
    }
    // console.log(cartItems)
    const contextValue={cartItems,addtoCart,removefromCart}

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}