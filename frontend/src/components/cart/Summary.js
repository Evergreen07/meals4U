import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addOrderItems } from '../../actions/orderActions'
import { clearCart } from '../../actions/cartActions'

import '../../utilities/css/cart/Summary.css'

const Summary = ({history}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const { 
        cartItems, 
        shippingAddress : {address, city, state, postalCode, country}, 
        paymentMethod 
    } = cart;

    const cost = cartItems.reduce((total, item) => {
        return total + item.qty*item.price;
    }, 0).toFixed(2);

    const delivery = cost > 500 ? 25 : 75;
    const tax = (0.18*cost).toFixed(2);
    const total = (parseFloat(cost) + parseFloat(delivery) + parseFloat(tax)).toFixed(2);
    const id = uuidv4().slice(0,15);

    const placeOrder = () => {
        dispatch(
            addOrderItems({id, total})
        )
        dispatch(clearCart())
        history.push('/profile')
    }

    return (
        <div className="main">
            <div className="main-tab">
                <div>
                    <h3>Order ID : {id}</h3>
                </div>
                
                <div id="order" onClick={() => placeOrder()}>
                    <h3>Place Order <i className="fas fa-arrow-alt-circle-right"></i></h3>
                </div>
            </div>

            <div className="checkout-details">
                <div className="details">
                    <div>
                        <h2>Payment Method </h2>  
                        <h4> {paymentMethod} </h4>  
                    </div>

                    <div>
                        <h2>Billing Address </h2>
                        <h4>{address}</h4>
                        <h4>{city}, {state}</h4>
                        <h4>Postal Code : {postalCode}</h4>
                        <h4>{country}</h4>
                    </div>
                </div>

                <div className="summary">
                    <h2>Order Summary</h2>
                    
                    <div className="summary-items">
                        <h4>Items</h4>
                        <h4>₹ {cost}</h4>
                    </div>

                    <hr />

                    <div className="summary-items">
                        <h4>Delivery</h4>
                        <h4>₹ {delivery}</h4>
                    </div>

                    <hr />

                    <div className="summary-items">
                        <h4>Tax (18%)</h4>
                        <h4>₹ {tax}</h4>
                    </div>

                    <hr />

                    <div className="summary-items total">
                        <h4>TOTAL</h4>
                        <h3>₹ {total}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
