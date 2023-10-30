import React from 'react'
import ManageConnectionButton from './ManageConnectionButton'
import {BsPeopleFill, BsPersonFill } from 'react-icons/bs'
import { Navigate, useNavigate } from 'react-router'




export default function ManageNetwork() {
    const navigate = useNavigate()

    const handleConnectionsClick = ()=> {
        navigate("/connections")
    }
    
    const handleFollowersClick = ()=> {
        navigate("/followers")
    }
    
    const handleFollowingsClick = ()=> {
        navigate("/following")
    }
    
    const handleGroupsClick = ()=> {
        navigate("/groups")
    }
    
  return (
    <div className='basis-3/12 h-fit rounded-lg flex flex-col px-5 py-3 bg-white  w-full'>
        <h2 className='text-gray-700'>Manage the Network</h2>
        <ManageConnectionButton 
            title='Connections' 
            handleClick={handleConnectionsClick}
            value={1} 
            icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            } 
            key='Connection' />
        <ManageConnectionButton 
            title='Followers' 
            handleClick={handleFollowersClick}
            value={10} 
            icon={
                <BsPersonFill fontSize={21}/>
            } 
            key='Flw' />
        <ManageConnectionButton 
            title='Followings' 
            handleClick={handleFollowingsClick}
            value={10} 
            icon={
                <BsPersonFill fontSize={21}/>
            } 
            key='Flwin' />
        <ManageConnectionButton 
            handleClick={handleGroupsClick}
            title='Groups' 
            value={10} 
            icon={
                <BsPeopleFill fontSize={21}/>
            } 
            key='Groups' />
    </div>
  )
}
