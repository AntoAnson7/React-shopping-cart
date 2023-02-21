import { useContext } from "react"
import { shopContext } from "../../context/shopcontext"
import { CartView } from "./cartView";
import {PRODUCTS} from '../../prod-data'


export const Cart=()=>{
    
    // const {id,name,price,imgsrc}=props.data
    return (
        <div className="Main">
            <div className="cart">
                <h1 className="shop-title">Cart</h1>
                {PRODUCTS.map((product)=>(
                    <CartView data={product}/>
                ))}
            </div>
        </div>
    )
}