import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Spinner from '../layouts/Spinner'
import '../../utilities/css/pages/MenuScreen.css'
import '../../utilities/css/menu/MenuItemDetails.css'
// import nonveg from '../../utilities/pictures/biriyani.jpg'

import { getMenuDetails } from '../../actions/menuActions'

const MenuItemDetails = ({history, match}) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMenuDetails(match.params.id));
    }, [match, dispatch])

    const menuDetails = useSelector(state => state.menuDetails);
    const { loading, error, recipeItems} = menuDetails;
    const { recipe : { label, image, calories, healthLabels } } = recipeItems;
    console.log('Recipe here', recipeItems);

    const addToCart = () => {
        history.push(`/cart/${match.params.id}`)
    }

    return (
        <div className="container">
            <div className="categories">
                <Link to='/menu' id="back">
                    <li className="category-item">
                        <i className="fas fa-backward fa-lg"></i>&ensp;
                        <h4> Back </h4>
                    </li>
                </Link>                
            </div>
            
            <div className="menu">
                <div className="fooditem">
                    {   
                        loading ? (<Spinner/>) : 
                        error ? (<h4>{error}</h4>) : 
                        (
                            <div>
                                <div className="fooditem-img">
                                    <div id="img1"> <img src={image?.image} alt="" /> </div>
                                    <div id="img2"> <img src={image?.image} alt="" /> </div>
                                    <div id="img3"> <img src={image?.image} alt="" /> </div>
                                </div>

                                <div className="fooditem-info">
                                    <div className="fooditem-info-details">
                                        <div id="title">
                                            <h4 id="food-name">{label?.label}</h4>
                                            <Rating/>
                                            <h4>₹ {calories?.calories}</h4>
                                        </div>

                                        <div id="desc">
                                            <h5> {healthLabels?.healthLabels} </h5>
                                        </div> 
                                    </div>

                                    <div className="fooditem-info-button">
                                        <button onClick={addToCart}>
                                            &ensp;&ensp;
                                            <h4>Add to cart</h4>
                                        </button>
                                    </div>
                                </div>

                                <div className="fooditem-reviews">
                                    <h3>Reviews</h3>
                                    
                                    <div>
                                        <h5>John Doe</h5>
                                        <Rating/>
                                        <h5 id="review">Delicious, Aromatic and tasty biriyani !!!</h5>
                                        <hr />
                                    </div>

                                    <div>
                                        <h5>Mili Watson</h5>
                                        <Rating/>
                                        <h5 id="review">Spicy, flavoury, Must try !</h5>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuItemDetails
