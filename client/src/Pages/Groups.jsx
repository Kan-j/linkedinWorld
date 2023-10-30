import React from 'react'
import MainGroupContent from '../Components/GroupComponents/MainGroupContent'

export default function Groups() {
  return (
    <>
        <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex justify-between'>
                    <MainGroupContent/>
                </main> 
            </div>
        </main>
    </>
  )
}
