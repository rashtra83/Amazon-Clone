import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ title, image, price, rating, id}) {
    const [, dispatch] = useStateValue();
    
    //console.log("your bucket", basket);
    const addToBasket = () => {
        //dispatch the item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>Rs </strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="product img" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
