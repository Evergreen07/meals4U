import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { menuItemsReducers, menuDetailsReducers } from './reducers/menuReducers'
import { cartReducers } from './reducers/cartReducers'
import { orderListReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    menuList : menuItemsReducers,
    menuDetails : menuDetailsReducers,
    cart : cartReducers,
    orders : orderListReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {};

const orderItemsFromStorage = localStorage.getItem('orderItems') ? JSON.parse(localStorage.getItem('orderItems')) : [];

const initialState = {
    cart : { 
        cartItems : cartItemsFromStorage,
        shippingAddress : shippingAddressFromStorage,
        paymentMethod : paymentMethodFromStorage
    },
    orders : {
        orderItems : orderItemsFromStorage
    }
}

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;