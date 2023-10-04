import { createSlice } from "@reduxjs/toolkit"
import data from "../assets/carData"

const carSlice=createSlice({
    name:"car",
    initialState:{
        carData:data,//initial state for cara data
        searchQuery: "", 
        error: null,

    },
    reducers:{
        setCarData: (state, action)=>{
            state.action = action.payload;
        },
        setSearchQuery:(state, action)=>{
            state.searchQuery = action.payload;
        },
        setError:(state, action)=>{
            state.error = action.payload;
        }
    },
});

export const {setCarData, setSearchQuery, setError} = carSlice.actions;
export default carSlice.reducer;
