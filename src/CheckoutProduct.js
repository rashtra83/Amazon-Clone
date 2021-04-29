import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [, dispatch] = useStateValue();
    
    const RemoveItem = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img
                src={image}
                alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map(() => (
                        <p> ⭐</p>
                    ))}
                </div>
                <button onClick={RemoveItem}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
