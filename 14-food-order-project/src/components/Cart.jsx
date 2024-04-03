import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import { currencyFormatter } from '../formatting'
import Button from './UI/Button'
import { UserProgressContext } from '../store/UserProgressContext'
import CartItem from './CartItem'

const Cart = () => {
    const cartCtx = useContext(CartContext) 
    const userProgressCtx = useContext(UserProgressContext) 

    const cartTotal = cartCtx.items.reduce((total, item)=>{
        return total + item.price*item.quantity
    },0) 

    const handleCloseCart = () => {
        userProgressCtx.hideCart()
    }

    const handleCheckout = () => {
        userProgressCtx.showCheckout()
    }

  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map( item => {
                return (
                    <CartItem 
                        key={item.id} 
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onDecrease={()=>cartCtx.removeItem(item.id)}
                        onIncrease={()=>cartCtx.addItem(item)}
                    />
                )
            })}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleCheckout}>Go to checkout</Button> }
        </p>
    </Modal>
  )
}

export default Cart