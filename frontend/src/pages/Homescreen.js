import React from 'react'
import '../utilities/css/pages/Homescreen.css'

// import Meal1 from '../utilities/pictures/meals2.jpeg'
// import Meal2 from '../utilities/pictures/meals1.jpeg'
// import Guy from '../utilities/pictures/delivery.png'
import Banner from '../utilities/pictures/banner.png'


const HomeScreen = ({history}) => {

    const handleClick = () => {
        history.push('/menu');
    }

    return (
        <div className="banner">
            <div className="banner-body">
                <h1> Giving your <span>Hunger</span> </h1>
                <h1> new <span>delights</span>, anywhere </h1>
                <h1>anytime . . .</h1>

                <h4>
                    Made with fresh and quality ingredients, so you have a healthier and better life.
                </h4>

                <div className="banner-button">
                    <button id="order" onClick={() => handleClick()}> Order Now </button>
                    <button id="download"> Download App </button>
                </div>
            </div>

            <div className="banner-picture">
                {/* 
                <img className="img1" src={Meal1} alt=""/>
                <img className="img2" src={Meal2} alt=""/>
                <img className="img3" src={Guy} alt=""/> */}
                <img src={Banner} alt="" />
            </div>
        </div>
    )
}

export default HomeScreen
