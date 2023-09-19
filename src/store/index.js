import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        mode: false
    },
    reducers:{
        toggle(state){
            state.mode = !state.mode;
        }
    }
})

const store = configureStore({
    reducer: {ui: uiSlice.reducer}
})

export const uiActions = uiSlice.actions;

export default store;