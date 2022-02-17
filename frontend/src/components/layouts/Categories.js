import React from 'react'
import '../../utilities/css/pages/MenuScreen.css'

const Categories = () => {
    return (
        <div className="categories">
                <div  className='category-item disabled'>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <h4> &ensp;Cart </h4>
                </div>

                <div className='category-item select'>
                    <i className="fas fa-sign-in-alt fa-lg"></i>
                    <h4> &ensp;Shipping </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-money-check-alt fa-lg"></i>
                    <h4> &ensp;Payment  </h4>
                </div>

                <div className='category-item disabled'>
                    <i className="fas fa-file-invoice fa-lg"></i>
                    <h4> &ensp;Summary </h4>
                </div>
        </div>
    )
}

export default Categories
