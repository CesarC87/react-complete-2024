import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    show: false
}

createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{ state.counter++ },
        increase:(state, action)=>{ state.counter = state.counter + action.amount },
        decrement:(state)=>{ state.counter-- },
        toggle:(state)=>{},
    }
})

const counterReducer = (state = initialState, action) => {

    if(action.type === 'increment'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'increase'){
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }
    if(action.type === 'decrement'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store