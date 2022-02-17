import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../menu/Rating'
import '../../utilities/css/cart/Cart.css'
import { addCartItems, deleteCartItems } from '../../actions/cartActions'


const CartItems = ({history}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    
    const nextHandler = () => {
        if(cartItems.length !== 0){
            history.push('/shipping');
        } else {
            window.alert('Your cart is Empty')
        }
    }

    const incQtyHandler = (id, qty) => {
        qty++;
        dispatch(addCartItems(id, qty));
    }

    const decQtyHandler = (id, qty) => {
        if(qty > 1){
            qty--;
            dispatch(addCartItems(id, qty));
        }
    }

    const deleteHandler = (id) => {
        dispatch(deleteCartItems(id));
    }

    
    return (
        <div className="main">
                <div className="main-tab">
                    <div>
                        <h3>Total :&nbsp; ₹ {cartItems.reduce((total, item) => {
                            return total + item.qty*item.price;
                        }, 0).toFixed(2)}</h3>
                    </div>
                    <div id="order" onClick={nextHandler}>
                        <h3>Next <i className="fas fa-arrow-alt-circle-right"></i></h3>
                    </div>
                </div>

            {cartItems && cartItems.map( item => (
                <div key={item.id} className="cart-item-card">
                    <div className="cart-item-details">
                        <img src={item.image} alt="" />

                        <div className="cart-item-name">
                            <h4>{item.name.length>10 ? `${item.name.slice(0,28)}...`: item.name}</h4>
                            <h4 id="price">₹ {item.price}</h4>
                            <Rating/>
                        </div>
                    </div>

                    <div className="cart-item-section">
                        <div className="cart-item-number">
                            &ensp;
                            <i  className="fas fa-minus" 
                                onClick={() => decQtyHandler(item.id, item.qty)}></i>
                            &ensp;
                            <div>
                                <h3 id="qty">&ensp;{item.qty}&ensp;</h3>
                            </div>
                            &ensp;
                            <i  className="fas fa-plus" 
                                onClick={() => incQtyHandler(item.id, item.qty)}></i>
                            &ensp;  
                        </div>

                        <i  className="fas fa-trash delete"
                            onClick={() => deleteHandler(item.id)}></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems
