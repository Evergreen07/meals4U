
export const orderListReducer = (state = { orderItems: [] }, action) => {
    switch (action.type) {
        
        case 'CREATE_NEW_ORDER':
            const newOrder = action.payload;

            return {
                ...state,
                orderItems : [newOrder, ...state.orderItems]
            }

        case 'ORDER_LIST_RESET':
            return { orders: [] }

        default:
            return state
    }
}