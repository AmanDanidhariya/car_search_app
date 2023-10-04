import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import CardLayout from '../CardLayout/CardLayout';
import Pagination from '../pagination/Pagination';

const MainLayout = () => {

  return (
    <>
    <div className='w-full '>
        <Navbar/>
        <Outlet/> 
        <CardLayout/>
        <Pagination/>
    </div>
    </>
  )
}

export default MainLayout