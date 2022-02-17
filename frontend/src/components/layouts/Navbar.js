import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../utilities/css/layouts/Navbar.css'
import Logo from '../../utilities/pictures/logo.png'

const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img className="navbar-img" src={Logo} alt="Logo" />
                <h1 className="navbar-title">Meals 4U</h1>
            </div>

            <div className="navbar-tab">
                <NavLink 
                    exact
                    to='/' 
                    className="navbar-link"
                    activeClassName="active"> 
                    Home
                </NavLink>

                <NavLink 
                    to='/menu' 
                    className="navbar-link"
                    activeClassName="active"> 
                    Menu
                </NavLink>

            </div>

            <div className="navbar-cart">
                <div className="navbar-search">
                    <i className="fas fa-search fa-lg"></i> &nbsp;
                    <input type="search" name="" />
                </div>
                <NavLink
                    to='/profile' 
                    activeClassName="active">
                    <i className="fas fa-user-alt fa-lg icon"></i> 
                </NavLink>

                <NavLink 
                    to='/cart' 
                    activeClassName="active">
                    <i className="fas fa-shopping-cart fa-lg icon">
                    </i>
                </NavLink>
           
            </div>
        </div>
    )
}

export default Navbar
