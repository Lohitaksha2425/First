/*import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    details:[]
}

const detailReducer = createSlice({
    name: 'Details',
    initialState,
    reducers:{
        addDetails:(state,action)=>{
            state.details = action.payload
        }
    }
})

export const addDetails = detailReducer.actions
export const detailsReducer = detailReducer.reducer 
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details:[]
} 

const detailReducer = createSlice({
    name:'Details',
    initialState,
    reducers:{
        addDetails:(state,action)=>{
            state.details = action.payload
        },
        deleteDetails: (state, action) => {
            const item = action.payload;
            state.details = state.details.filter(detail => detail !== item);
        },
    }
})

export const addDetails = detailReducer.actions
export const deleteDetails = detailReducer.actions
export const detailsReducer = detailReducer.reducer