import {PRODUCTS} from '../../prod-data'
import { Products } from './products'
import './shop.css'

export const Shop=()=>{
    return (
        <div className="Main">
            <div className="shop">
                <h1 className="shop-title">
                    AMAZON
                </h1>

                <div className="products">
                    {PRODUCTS.map((product)=>(
                        <Products data={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}