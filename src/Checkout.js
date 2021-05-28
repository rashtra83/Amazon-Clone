
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
                    alt="" />
                <div className="checkout__leftItem">
                    {user ? <h3>Hello, {user.email} </h3> : ""}
                <h2 className="checkout__title">Shopping Cart</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                        id = {item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}
                </div>
            </div>
            <div className="checkout__right">
                <div className="checkout__image">
                    <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                        alt=""
                    />
                </div>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
