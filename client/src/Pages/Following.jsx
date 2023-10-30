import React from 'react'
import MainFollowingContent from '../Components/FollowingComponents/MainFollowingContent'

export default function Following() {
  return (
    <>
         <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex justify-between'>
                    <MainFollowingContent/>
                </main> 
            </div>
        </main>
    </>
  )
}
