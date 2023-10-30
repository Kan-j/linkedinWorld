import React from 'react'
import OtherProfileMain from '../Components/OtherProfile/OtherProfileMain'
import SideBarOtherProfile from '../Components/OtherProfile/SideBarOtherProfile'

export default function OtherProfile() {
  return (
    <>
         <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex justify-between'>
                    <OtherProfileMain/>
                    <SideBarOtherProfile/>
                </main> 
            </div>
        </main>
    </>
  )
}
