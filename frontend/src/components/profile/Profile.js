import React from 'react'
import { useSelector } from 'react-redux'
import '../../utilities/css/pages/Profilescreen.css'
import Avatar from '../../utilities/pictures/avatar.png'

const Profile = () => {
    const cart = useSelector(state => state.cart)
    const {
        shippingAddress : {name, email}
    } = cart;

    return (
        <div className='profile'>
            <div>
                <img src={Avatar} alt="Profile Pic" className='profile-img'/>
            </div>
            <div>
                <div className='profile-info'>
                    <h4>Name : </h4>&ensp;
                    <h3> {name} </h3>
                </div>

                <div className='profile-info'>
                    <h4>Email : </h4> &ensp;
                    <h3> {email} </h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
