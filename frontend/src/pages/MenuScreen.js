import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../utilities/css/pages/MenuScreen.css'

import MenuItem from '../components/menu/MenuItem'
import Spinner from '../components/layouts/Spinner'

import { getMenuItems } from '../actions/menuActions'


const MenuScreen = () => {
    const [menu, setMenu] = useState('Snacks');
    const dispatch = useDispatch();

    const menuList = useSelector(state => state.menuList);
    const { loading, error, foodItems } = menuList;

    useEffect(() => {
        dispatch(getMenuItems(menu));
    }, [menu, dispatch])

    const menuSelector = (e) => {
        setMenu(e);
    }

    return (
        <div className="container">
            <div className="categories">
                <li className={`category-item ${menu==='Snacks' ? 'select' : ''}`}
                onClick={() =>menuSelector('Snacks')}>
                    <i className="fas fa-pizza-slice fa-lg"></i>&ensp;
                    <h4> Snacks </h4>
                </li>

                <li className={`category-item ${menu==='Noodles' ? 'select' : ''}`} 
                onClick={() =>menuSelector('Noodles')}>
                    <i className="fas fa-hotdog fa-lg"></i>&ensp;
                    <h4> Chinese </h4>
                </li>

                <li className={`category-item ${menu==='Chicken' ? 'select' : ''}`}
                onClick={() =>menuSelector('Chicken')}>
                    <i className="fas fa-drumstick-bite fa-lg"></i>&ensp;
                    <h4> Non-Veg </h4>
                </li>
                    
                <li className={`category-item ${menu==='Ice-Cream' ? 'select' : ''}`}
                onClick={() =>menuSelector('Ice-Cream')}>
                    <i className="fas fa-ice-cream fa-lg"></i>&ensp;
                    <h4> Deserts </h4>
                </li>
            </div>

            <div className="menu">
                <div className="menu-item">
                    <h2 className="menu-title">{menu}</h2>
                    <div className="menu-card">
                        {  
                            loading ? (<Spinner/>) : 
                            error ? (<h4 style={{color : 'darkred'}}>{error}</h4>):
                            (   foodItems.hits?.map((food) => (
                                    <MenuItem key={food.recipe.uri} food={food} />
                            )))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MenuScreen
