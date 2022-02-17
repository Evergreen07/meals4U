import React,{useState} from 'react'

import '../utilities/css/cart/Cart.css'
import '../utilities/css/pages/MenuScreen.css'

import Profile from '../components/profile/Profile'
import Orders from '../components/profile/Orders'

const Profilescreen = () => {
    const [menu, setMenu] = useState('Orders');

    const menuSelector = (e) => {
        setMenu(e);
    }

    return (
        <div className="container">
            <div className="categories">
               
                <div className={`category-item ${menu=== 'Profile' ? 'select' : ''}`}
                onClick={() => menuSelector('Profile')}>
                    <i className="fas fa-user-alt fa-lg"></i>
                    <h4> &ensp;Profile </h4>
                </div>

                <div className={`category-item ${menu==='Orders' ? 'select' : ''}`}
                onClick={() => menuSelector('Orders')}>
                    <i className="fas fa-clipboard-list fa-lg"></i>
                    <h4> &ensp;My Orders </h4>
                </div>
                
            </div>

            <div className="menu">
                {menu === 'Profile' && <Profile/>}

                {menu === 'Orders' && <Orders/>}
            </div>
        </div>
    )
}

export default Profilescreen
