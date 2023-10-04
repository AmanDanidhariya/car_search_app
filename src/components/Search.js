import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSearchQuery} from "../slices/carSlice"

const Search = () => {

  const dispatch = useDispatch();
  //get query value from store
  const searchQuery = useSelector((state)=>state.car.searchQuery);

  
  //for getting search value
  const handleSearchChange=(e)=>{
    dispatch(setSearchQuery(e.target.value))
  }
 



  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border-4 bg-white h-10 px-5  py-4 rounded-full text-sm focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
