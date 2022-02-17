import React from 'react'
import { NavLink } from 'react-router-dom'
import Rating from './Rating'
import '../../utilities/css/menu/MenuItem.css'

const MenuItem = ({ food : { recipe : { label, calories, image, uri } }}) => {

    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-details">
                <div>
                    <h4>{label.length > 10 ? label.slice(0,15) : label}</h4>
                    <h4 id="price">₹&nbsp;{Math.floor(calories / 10)}</h4>
                </div>
                <div>
                    <Rating/>
                    <NavLink to={`/cart/${uri.split('#recipe_').pop()}`}>
                        <i className="fas fa-plus-circle fa-lg add"></i>
                    </NavLink>   
                </div>
            </div>
        </div>
    )
}

export default MenuItem
