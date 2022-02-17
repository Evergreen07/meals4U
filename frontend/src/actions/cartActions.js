import axios from 'axios'

export const addCartItems = (id, qty) => async (dispatch, getState) => {
    const api_id = process.env.REACT_APP_API_ID;
    const api_key = process.env.REACT_APP_API_KEY;

    const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${api_id}&app_key=${api_key}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Content-Type': 'application/json',
        }
    })
    
    dispatch({
        type : 'ADD_CART_ITEMS',
        payload : {
            id : data.recipe.uri.split('#recipe_').pop(),
            name : data.recipe.label,
            image : data.recipe.image,
            price : Math.floor(data.recipe.calories / 10),
            qty
        }    
        })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const deleteCartItems = (id) => async (dispatch, getState) => {
    dispatch({
            type : 'DELETE_CART_ITEMS',
            payload : id
        })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type : 'CART_SAVE_SHIPPING_ADDRESS',
        payload : data
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}


export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type : 'CART_SAVE_PAYMENT_METHOD',
        payload : data
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data));
}

export const clearCart = () => async (dispatch) => {
    dispatch({
        type : 'CLEAR_CART'
    })
}