import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({label, nav,icon}) {
  return (
    <NavLink to={nav} className='flex justify-center items-center flex-col text-gray-500 active:text-gray-900 active:border-b-2 active:border-gray-900 pb-2'>
    <div className=''>
        {icon}
    </div>
    <span className='text-xs '>{label}</span>
  </NavLink>
  )
}

export default NavItem