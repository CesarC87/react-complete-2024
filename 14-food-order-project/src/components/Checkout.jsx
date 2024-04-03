import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import { currencyFormatter } from '../formatting'
import Input from './UI/Input'
import Button from './UI/Button'
import { UserProgressContext } from '../store/UserProgressContext'
import useHttp from '../hooks/useHttp'

const configRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

const Checkout = () => {

    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((total, item)=>{
        return total + item.price*item.quantity
    },0) 

    const { data, loading, error, sendRequest } = useHttp('http://localhost:3000/orders',configRequest)

    const handleClose = () => {
        userProgressCtx.hideCheckout()
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const clienteData = Object.fromEntries(formData.entries()) // { email: asd@asd.com ... }

        sendRequest({
            order: {
                items: cartCtx.items,
                customer: clienteData
            }
        })

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: clienteData
                }
            })
        })
    }

    let actions = (
        <>
            <Button type='button' textOnly onClick={handleClose}>Close</Button>
            <Button >Submit</Button>
        </>
    )

    if(loading){
        actions = <span>Enviando orden...</span>
    }

    console.log('loading',loading)

  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
        <form action="" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total: {currencyFormatter.format(cartTotal)}</p>
            <Input label='Full name' type='text' id='name'/>
            <Input label='E-mail address' type='email' id='email'/>
            <Input label='Street' type='text' id='street'/>
            <div className="control-row">
                <Input label='CP' type='text' id='postal-code'/>
                <Input label='City' type='text' id='city'/>
            </div>
            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>
  )
}

export default Checkout