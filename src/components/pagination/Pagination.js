import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, goToPage } from "../../slices/carSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.car.currentPage);

  const handleNextPage = () => {
    if (currentPage < 10) {
      dispatch(nextPage());
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(prevPage());
    }
  };

  const handleToGoPage = (page) => {
    dispatch(goToPage(page));
  };

  const showPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
    }
    
    return( pageNumbers.map((pageNumber) => (
        // const currentPageStyle = currentPage === pageNumber? "bg-gray" : ""
        <div>
      <button
        className={currentPage === pageNumber ? "px-3 py-1 bg-gray-400 rounded-xl m-1":"px-3 py-1 bg-white rounded-xl m-1"}
        key={pageNumber}
        onClick={() => handleToGoPage(pageNumber)}
        disabled={currentPage === pageNumber}
      >
        <span>{pageNumber}</span>
      </button>
      </div>
    )));
  };

  return (
    <div className='flex justify-end m-4 p-3 w-[98%] bg-[#E6E6FF] shadow-lg shadow-gray-500/50 rounded-lg  bottom-0 z-50'>
      <button
        className="px-2 py-1 bg-white rounded-xl m-1"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <AiOutlineArrowLeft />
      </button>
      {showPageNumbers()}
      <button
        className="px-2 py-1 bg-white rounded-xl m-1"
        onClick={handleNextPage}
        disabled={currentPage === 1}
      >
        <AiOutlineArrowRight/>
      </button>
    </div>
  );
};

export default Pagination;
