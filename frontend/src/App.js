import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './utilities/css/App.css'

import HomeScreen from './pages/HomeScreen'
import MenuScreen from './pages/MenuScreen'
import Navbar from './components/layouts/Navbar'
import Profilescreen from './pages/Profilescreen'
import ShoppingCart from './pages/ShoppingCart'
import MenuItemDetails from './components/menu/MenuItemDetails'
import Shipping from './components/cart/Shipping'
import Payment from './components/cart/Payment'
import Summary from './components/cart/Summary'


const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
            <Navbar/>
            <Route path='/' exact component={HomeScreen}/>
            <Route path='/menu' exact component={MenuScreen}/>
            <Route path='/menu/item/:id' exact component={MenuItemDetails}/>
            <Route path='/profile' exact component={Profilescreen}/>
            <Route path='/cart/:id?' exact component={ShoppingCart}/>
            <Route path='/shipping' exact component={Shipping}/>
            <Route path='/payment' exact component={Payment}/>
            <Route path='/summary' exact component={Summary}/>
        </div>
      </div>
    </Router>
    
  )
}

export default App
