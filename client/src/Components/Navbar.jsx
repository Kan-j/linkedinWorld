import React from 'react'
import { ImSearch } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import profilePicture from "../assets/fashion.jpg"
import { IoCaretDownSharp } from "react-icons/io5";
import NavItem from './Nav Components/NavItem';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <main className='w-full bg-white fixed z-10'>
      <div className='w-4/5 mx-auto'>
      <header className="flex  mx-auto mb-2 mt-2 bg-white items-center justify-between">
        <article className='flex items-center'>
          <section>
            <NavLink to="/home">
              <BsLinkedin fontSize={30}/>
            </NavLink>
            
          </section> 
          <section className='relative ml-4 bg-slate-200 rounded-md w-80 overflow-hidden focus-within:w-96 focus-within:ring-2 focus-within:ring-black transition-all duration-300'>
            <span className='px-4 py-2 absolute inset-y-0 left-0 flex items-center'>
              <ImSearch fontSize={17} />
            </span>
            <input
              type="text"
              placeholder='Search'
              className='bg-slate-200 py-2 pl-10 focus-within:pl-12 pr-2 focus:outline-none w-80 focus:w-80'
            />
          </section>
        </article>
        <nav className='flex gap-x-10 '>
          <NavItem 
          label='Home'  
          nav='/home'
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>}  
          />
          <NavItem 
          label='My Network'
          nav='/my-network'
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>}
          />
          <NavItem 
          label='Jobs'
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>}
          />
          <NavItem 
          label='Messaging'
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
          </svg>}
          />
          <NavItem 
          label='Notification'
          icon ={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>}
          />

          <a href="" className='flex justify-center items-center flex-col text-gray-500 active:text-gray-900 active:border-b-2 active:border-gray-900 pb-2'>
            <div>
              <img src={profilePicture} className='rounded-full w-6 h-6 object-cover' alt="" />
            </div>
            <div className='text-xs flex items-center'>Me
              <span className='ml-1'>
                <IoCaretDownSharp />
              </span>
            </div>
          </a>

          
        </nav>
      </header>
    </div>
    </main>
  )
}
