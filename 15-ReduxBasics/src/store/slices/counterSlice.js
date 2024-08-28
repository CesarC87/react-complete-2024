import { createSlice } from "@reduxjs/toolkit"

const counterState = {
    counter: 0,
    show: true
}

export const counterSlice = createSlice({
    name:'counter',
    initialState: counterState,
    reducers:{
        increment:(state)=>{ state.counter++ }, // Acá podemos mutar el estado así, por la libreria interna que usa rtlkt, Immer. Sino siempre tendriamos que devolver un nuevo objeto. 
        increase:(state, action)=>{ state.counter = state.counter + action.payload },
        decrement:(state)=>{ state.counter-- },
        toggle:(state)=>{ state.show = !state.show },
    }
})

export const counterActions = counterSlice.actions
