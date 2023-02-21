import { useContext } from 'react'
import {shopContext} from '../../context/shopcontext'

export const Products=(props)=>{
    const {cartItems,addtoCart,removefromCart}=useContext(shopContext)
    const {id,name,price,imgsrc}=props.data
    return (
        <div className="shop-products">
            <img src={imgsrc} alt="" />
            <div className="descr">
                <p><b>{name}</b></p>
                <p className="shop-price">${price}</p>
            </div>
            <div className="atc">
                <button className="addtocart" onClick={()=>addtoCart(id)}>Add to Cart</button>
                {cartItems[id]>0?<p>{cartItems[id]}</p>:""}
            </div>
        </div>

    )
}