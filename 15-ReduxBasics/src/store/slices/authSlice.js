import { createSlice } from "@reduxjs/toolkit"

const authState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name:'auth',
    initialState: authState,
    reducers:{
        login:(state)=>{ state.isAuthenticated = true }, // Acá podemos mutar el estado así, por la libreria interna que usa rtlkt, Immer. Sino siempre tendriamos que devolver un nuevo objeto. 
        logout:(state)=>{ state.isAuthenticated = false }, 
    }
})

export const authActions = authSlice.actions
