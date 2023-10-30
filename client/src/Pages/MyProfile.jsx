import React from 'react'
import OtherProfileMain from '../Components/OtherProfile/OtherProfileMain'
import SideBarMyProfile from '../Components/MyProfile/SideBarMyProfile'
import MyProfileMain from '../Components/MyProfile/MyProfileMain'

export default function MyProfile() {
  return (
    <main className='w-full bg-gray-100 pt-24 h-full'>
        <div className='w-4/5 mx-auto'>
            <main className='flex justify-between'>
                <MyProfileMain/>
                <SideBarMyProfile/>
            </main> 
        </div>
    </main>
  )
}
