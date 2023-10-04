import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import CardLayout from '../CardLayout/CardLayout';

const MainLayout = () => {

  return (
    <>
    <div className='w-full '>
        <Navbar/>
        <Outlet/> 
        <CardLayout/>
    </div>
    </>
  )
}

export default MainLayout