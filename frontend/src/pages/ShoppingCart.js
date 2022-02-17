import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'

import '../utilities/css/pages/MenuScreen.css'

import CartItems from '../components/cart/CartItems'
import { addCartItems } from '../actions/cartActions'


const ShoppingCart = ({match, history}) => {

    const dispatch = useDispatch();
    const foodId = match.params.id;

    useEffect(() => {
        if(foodId){
            console.log(foodId);
            dispatch(addCartItems(foodId, 1))
        }
    }, [dispatch, foodId]);


    return (
        <div className="container">
            <div className="categories">
                <div  className='category-item select'>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <h4> &ensp;Cart </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-sign-in-alt fa-lg"></i>
                    <h4> &ensp;Shipping </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-money-check-alt fa-lg"></i>
                    <h4> &ensp;Payment  </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-file-invoice fa-lg"></i>
                    <h4> &ensp;Summary </h4>
                </div>
            </div>

            <div className="menu">
                <CartItems history={history} />
            </div>
        </div>
    )
}

export default ShoppingCart
