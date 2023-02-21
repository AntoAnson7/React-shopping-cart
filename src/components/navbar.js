import { Link } from "react-router-dom"
import {ShoppingCart} from'phosphor-react'
import './nav.css'
import { shopContext } from "../context/shopcontext"
import { useContext, useState } from "react"

export const Navbar=()=>{
    const [stat,setStat]=useState(false)
    let status=false
    const {cartItems}=useContext(shopContext)
    for(let i=1;i<Object.keys(cartItems).length+1;i++){
        if(cartItems[i]>0){
            status=true
        }
    }
    console.log(status)
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
            {status?<p className="dot"></p>:""}
        </div>
    )
}