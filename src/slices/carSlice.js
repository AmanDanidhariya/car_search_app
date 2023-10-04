import { createSlice } from "@reduxjs/toolkit"
import data from "../assets/carData"

const carSlice=createSlice({
    name:"car",
    initialState:{
        carData:data,//initial state for cara data
        searchQuery: "", 
        error: null,
        currentPage: 1,//current page
        itemsPerPage:6,//Items per page

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
        },
        nextPage:(state)=>{
            state.currentPage +=1;
        },
        prevPage:(state)=>{
            if(state.currentPage > 1){
                state.currentPage -=1;
            }
        },
        goToPage:(state, action)=>{
            state.currentPage= action.payload;
        }
        
    },
});

export const {setCarData, setSearchQuery, setError, nextPage, prevPage, goToPage} = carSlice.actions;
export default carSlice.reducer;
