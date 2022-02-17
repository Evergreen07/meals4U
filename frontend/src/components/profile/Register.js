import React from 'react'
import '../../utilities/css/pages/Profilescreen.css'

const Register = () => {
    return (
        <div className="sign">
                <form action="" id="form" className="shipping-form">
                        
                        <h3>Name</h3>
                        <input type="text" name=""  />

                        <h3>Email</h3>
                        <input type="text" name="" id="" />
                        
                        <h3>Password</h3>
                        <input type="password" name="" id="" minLength={6}/>

                        <h3>Confirm Password</h3>
                        <input type="password" name="" id="" minLength={6}/>
                        
                        
                        <div id="submit" className="submit">
                            <button type="submit"><i className="fas fa-check"></i>&ensp;Sign Up</button>
                        </div>
                </form>
        </div>
    )
}

export default Register
