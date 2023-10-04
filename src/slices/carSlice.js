import { createSlice } from "@reduxjs/toolkit"
import data from "../assets/carData"

const carSlice=createSlice({
    name:"car",
    initialState:{
        carData:data,//initial state for cara data
        searchQuery: "",
    },
    reducers:{
        setCarData: (state, action)=>{
            state.action = action.payload;
        },
        setSearchQuery:(state, action)=>{
            state.searchQuery = action.payload;
        }
    },
});

export const {setCarData, setSearchQuery} = carSlice.actions;
export default carSlice.reducer;
