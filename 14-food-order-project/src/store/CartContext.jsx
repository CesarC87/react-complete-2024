import React, { createContext, useReducer, useState } from 'react'

export const CartContext = createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
})

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const itemIdx = state.items.findIndex((item)=> item.id === action.item.id) 
        const updatedItems = [ ...state.items ] // Escribimos un nuevo array para no mutar el que esta en memoria
        if(itemIdx > -1){ // Si existe
            const existingItem = state.items[itemIdx]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[itemIdx] = updatedItem

        }else{ // Si no existe
            updatedItems.push( { ...action.item, quantity: 1 } )
        }

        return { ...state, items: updatedItems}
    }
    if(action.type === 'REMOVE_ITEM'){
        const itemIdx = state.items.findIndex((item)=> item.id === action.id) 
        const updatedItems = [ ...state.items ] // Escribimos un nuevo array para no mutar el que esta en memoria
        const existingItem = state.items[itemIdx]
        if(existingItem.quantity === 1){
            updatedItems.splice(itemIdx,1) // Borra en ese id
        }else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            }
            updatedItems[itemIdx] = updatedItem
        }

        return { ...state, items: updatedItems}
    }
    return state
}

const CartContextProvider = ({children}) => {

  const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items:[]})  

  const addItem = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item})
  }
  const removeItem = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id})
  }

  const cartContext = { // Obj a pasar por context
    items: cart.items,
    addItem,
    removeItem
  }

  console.log(cartContext)

  return (
    <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
