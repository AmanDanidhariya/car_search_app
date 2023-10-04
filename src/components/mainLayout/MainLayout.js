import React from 'react'
import Search from '../Search'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div >
        <Navbar/>
        <Outlet/>
    </div>
    </>
  )
}

export default MainLayout