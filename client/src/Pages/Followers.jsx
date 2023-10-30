import React from 'react'
import MainFollowersContent from '../Components/FollowersComponents/MainFollowersContent'

export default function Followers() {
  return (
    <>
        <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex justify-between'>
                    <MainFollowersContent/>
                </main> 
            </div>
        </main>
    </>
  )
}
