import React from 'react'
import {NavLink} from 'react-router-dom'
import {BiChevronDown} from "react-icons/bi"
import Search from '../Search'

const Navbar = () => {
    const NavItem=["Relevance", "Brands"];
  return (
    <div className='flex items-center m-4 p-3 w-[98%] shadow-lg shadow-gray-500/50 rounded-lg'>
    <Search/>
    {NavItem.map((nav ,i)=><NavLink to={nav} key={i} className="mx-4 flex leading-3">{nav}<BiChevronDown/></NavLink>)}
   </div>
    
  )
}

export default Navbar