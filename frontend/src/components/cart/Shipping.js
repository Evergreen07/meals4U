import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CountryDropdown from 'country-dropdown-with-flags-for-react'
import '../../utilities/css/pages/MenuScreen.css'
import '../../utilities/css/cart/Cart.css'
import '../../utilities/css/cart/Shipping.css'
import Categories from '../layouts/Categories'
import { saveShippingAddress } from '../../actions/cartActions'

const Shipping = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    const dispatch = useDispatch();

    const [name, setName] = useState(shippingAddress.name)
    const [email, setEmail] = useState(shippingAddress.email)

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [state, setState] = useState(shippingAddress.state)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({name, email, address, city, state, postalCode, country}))
        history.push('/payment');
    }

    return (
        <div className="container">
            <Categories/>
            
            <div className="menu">
                <div className="main">
            {/* <div className="main-tab">
                <div>
                    <h3>Shipping Address</h3>
                </div>
            </div> */}
            
            <form action="" className="shipping-form" onSubmit={submitHandler}>
                <div style={{paddingTop : '1rem'}}>
                    <h3>Name</h3>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <h3>Email</h3>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <h3>Address</h3>
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required/>

                <div>
                <h3>City</h3>
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    required/>

                <h3>State</h3>
                <input 
                    type="text" 
                    value={state} 
                    onChange={(e) => setState(e.target.value)}
                    required/>
                </div>
                
                <div>
                    <h3>Pin/Postal Code</h3>
                    <input 
                        type="number" 
                        maxLength={6} 
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)} 
                        required/>

                    <h3>Country</h3>
                    <div >
                        <CountryDropdown 
                            id = "country-select"
                            preferredCountries={['in', 'us', 'gb']} 
                            value={country} 
                            handleChange={(e) => setCountry(e.target.value)}
                        />
                    </div> 
                </div>
                    
                <button 
                    id="order" 
                    type='submit' 
                    style={{width : '6.5rem', height : '2.5rem', fontSize : '1.2rem', fontWeight : 'bold'}}>
                        Next&nbsp;
                        <i className="fas fa-arrow-alt-circle-right"></i>
                </button>
            </form>
            <br />
        </div>
            </div>
        </div>
    )
}

export default Shipping
