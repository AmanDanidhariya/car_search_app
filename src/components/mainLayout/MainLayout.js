import React from 'react'
import Search from '../Search'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Search/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout