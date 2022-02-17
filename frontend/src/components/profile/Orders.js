import React from 'react'
import { useSelector } from 'react-redux'
import '../../utilities/css/cart/Cart.css'

const Orders = () => {
    const orders = useSelector(state => state.orders);
    const { orderItems } = orders;

    return (
        <div className="orders">
            <br />
            <h3>My Orders</h3>
            <br />
            <table id="order-table">
                <tr>
                    <th><h5>Order ID</h5></th>
                    <th><h5>DATE</h5></th>
                    <th><h5>TOTAL</h5></th>
                    <th><h5>STATUS</h5></th>
                </tr>
                
                {
                    orderItems && orderItems.map((order) => (
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>₹ {order.price}</td>
                            <td><i className="fas fa-check-circle done"></i></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Orders