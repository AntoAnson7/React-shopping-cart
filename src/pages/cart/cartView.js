import { useContext } from "react"
import { shopContext } from "../../context/shopcontext"
import {PRODUCTS} from '../../prod-data'

export const CartView=(props)=>{
    const {cartItems,removefromCart}=useContext(shopContext)
    const {id,name,price,imgsrc}=props.data
    // console.log(cartItems[1])
    return (
        <div>
            {cartItems[id]>0?(
                <div className="shop-products">
                    <img src={imgsrc} alt="" />
                    <div className="descr">
                        <p><b>{name}</b></p>
                        <p className="shopqty">{cartItems[id]}</p>
                    </div>
                    </div>

            ):""}
        </div>
    )
}