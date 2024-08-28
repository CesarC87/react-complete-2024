import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { authSlice } from './slices/authSlice'



// const store = createStore(counterReducer)
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
    // reducer: counterSlice.reducer
})

export default store