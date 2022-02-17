import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../utilities/css/cart/Cart.css'
import '../../utilities/css/pages/MenuScreen.css'

import { savePaymentMethod } from '../../actions/cartActions'

const Payment = ({ history }) => {
    const [payment, setPayment] = useState('Stripe');
    const dispatch = useDispatch();

    const nextHandler = () => {
        dispatch(savePaymentMethod(payment));
        history.push('/summary');
    }

    return (
        <div className="container">
            <div className="categories">
                <div  className='category-item disabled'>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <h4> &ensp;Cart </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-sign-in-alt fa-lg"></i>
                    <h4> &ensp;Shipping </h4>
                </div>

                <div className='category-item select'>
                    <i className="fas fa-money-check-alt fa-lg"></i>
                    <h4> &ensp;Payment  </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-file-invoice fa-lg"></i>
                    <h4> &ensp;Summary </h4>
                </div>
            </div>

            <div className="menu">
                 
                <div className="main">
                    <div className="main-tab">
                        <div>
                            <h3>Payment Method</h3>
                        </div>
                        
                        <div id="order" onClick={nextHandler}>
                            <h3>Next <i className="fas fa-arrow-alt-circle-right"></i></h3>
                        </div>
                    </div>
                    
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value="Stripe"
                            checked = {payment === "Stripe"}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                        <label className="form-check-label" for="flexRadioDefault2">
                            &ensp;Stripe
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value="CREDIT CARD"
                            checked = {payment === "CREDIT CARD"} 
                            onChange={(e) => setPayment(e.target.value)}
                        />
                        <label className="form-check-label" for="flexRadioDefault2">
                            &ensp;CREDIT CARD
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value="DEBIT CARD"
                            checked = {payment === "DEBIT CARD"}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                        <label className="form-check-label" for="flexRadioDefault1">
                            &ensp;DEBIT CARD
                        </label>
                    </div>
                    
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            value="Cash on Delivery"
                            checked = {payment === "Cash on Delivery"}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                        <label className="form-check-label" for="flexRadioDefault1">
                            &ensp;Cash on Delivery
                        </label>
                    </div>
                    <br />
                </div>

            </div>
        </div>
    )
}

export default Payment
