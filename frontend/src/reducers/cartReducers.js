

export const cartReducers = (state = {cartItems : [], shippingAddress : {}, paymentMethod : {}} , action) => {
    switch (action.type) {
        case 'ADD_CART_ITEMS':
            const newItem = action.payload;

            const checkItem = state.cartItems.find(
                item => item.id === newItem.id
            )

            if(checkItem){
                return{
                    ...state,
                    cartItems : state.cartItems.map(
                        item => item.id === newItem.id ? newItem : item
                    )
                }
            } else{
                return {
                    ...state,
                    cartItems : [newItem, ...state.cartItems]
                }
            }

        case 'DELETE_CART_ITEMS': 
            return {
                ...state,
                cartItems : state.cartItems.filter(item => item.id !== action.payload)
            }

        case 'CART_SAVE_SHIPPING_ADDRESS':
            return {
                ...state,
                shippingAddress: action.payload,
            }

        case 'CART_SAVE_PAYMENT_METHOD':
            return {
                ...state,
                paymentMethod: action.payload,
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            }
    
        default:
            return state
    }
}