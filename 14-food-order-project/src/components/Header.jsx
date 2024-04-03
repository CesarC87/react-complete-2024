import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { CartContext } from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext'

const Header = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalItemsNumber = cartCtx.items.reduce((total, item)=>{
        return total + item.quantity
    },0)

    const handleShowCart = () => {
        userProgressCtx.showCart()
    }
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="" />
            <h1>React food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalItemsNumber})</Button>
        </nav>
    </header>
  )
}

export default Header