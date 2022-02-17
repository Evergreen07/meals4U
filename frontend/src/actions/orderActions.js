
export const addOrderItems = (order) => async (dispatch, getState) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = `${dd} / ${mm} / ${yyyy}`;
    
    dispatch({
        type : 'CREATE_NEW_ORDER',

        payload : {
            id : order.id,
            price : order.total,
            date : today
        }    
    })

    localStorage.setItem('orderItems', JSON.stringify(getState().orders.orderItems))

    dispatch({
        type: 'CLEAR_CART',
    })

    localStorage.removeItem('cartItems')
}
