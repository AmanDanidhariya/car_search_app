import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Search from '../Search'

const Navbar = () => {
    const NavItem=["Relevance", "Brands"];
  return (
    <div>
    {NavItem.map((nav ,i)=><NavLink to={nav} key={i}>{nav}</NavLink>)}
   </div>
    
  )
}

export default Navbar