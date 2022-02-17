import React from 'react'
import '../../utilities/css/menu/Rating.css'

const Rating = ({value = 2.5, text}) => {
    return (
        <div className="stars">

            {value >= 1 ? 
            (<i className="fas fa-star"></i>) : 
            (<i className="fas fa-star-half-alt"></i>)}


            {value >= 2 ? 
            (<i className="fas fa-star"></i>) : 
            value > 1 ? 
            (<i className="fas fa-star-half-alt"></i>) : 
            (<i className="far fa-star"></i>)}


            {value >= 3 ? 
            (<i className="fas fa-star"></i>) : 
            value > 2 ? 
            (<i className="fas fa-star-half-alt"></i>) : 
            (<i className="far fa-star"></i>)}


            {value >= 4 ? 
            (<i className="fas fa-star"></i>) : 
            value > 3 ? (<i className="fas fa-star-half-alt"></i>) : 
            (<i className="far fa-star"></i>)}


            {value >= 5 ? 
            (<i className="fas fa-star"></i>) : 
            value > 4 ? (<i className="fas fa-star-half-alt"></i>) : 
            (<i className="far fa-star"></i>)}
 
        </div>
    )
}

export default Rating
