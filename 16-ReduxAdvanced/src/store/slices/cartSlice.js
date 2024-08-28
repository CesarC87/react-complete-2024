import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalQty: 0,
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const itemPayload = action.payload
            console.log('asd itemPayload', itemPayload)
            const existingItem = state.items.find( item => item.id === itemPayload.id)
            !existingItem ? (state.items = [...state.items, {...itemPayload, quantity: 1}]) :
            existingItem.quantity++;
            // existingItem.totalPrice = existingItem.totalPrice + itemPayload.price
        },
        removeFromCart(state, action){
            const id = action.payload.id;
            const existingItem = state.items.find( item => item.id === id);
            console.log('asd id', id)
            console.log('asd existingItem', existingItem)
            state.totalQty--;
            state.changed = true;
            existingItem.quantity === 1 ? (state.items = state.items.filter(item => item.id !== id)) :
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            existingItem.quantity--;
        },
        replaceCart(state, action){
            state.totalQty = action.payload.totalQty
            state.items = action.payload.items
        }
    }
})



export const cartActions = cartSlice.actions

export default cartSlice