import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider'

function Payment() {
    const [{ basket, user },] = useStateValue();

    const handleSubmit = () => {
        return;
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout <Link to="./checkout" > {basket.length} items</Link></h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user ? <p>{user.email}</p> : ""}</p>
                        <p>House No. 46, Aakash Ganga Colony</p>
                        <p>Rudri Road, Dhamtari</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                 <div className="payment__section">
                    <div className="payment__title">
                        <h3>Order Total</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>{value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Payment
