import React from 'react'
import LeftSide from '../Components/Home Components/LeftSide'
import MainContent from '../Components/Home Components/MainContent'
import RightSide from '../Components/Home Components/RightSide'


export default function Home() {
  return (
    <>
    <main className='w-full bg-gray-100 pt-24 '>
        <div className='w-4/5 mx-auto'>
            <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4'>
              <LeftSide/>
              <MainContent/>
              <RightSide/>
            </main> 
        </div>
      </main>
    </>
      
  )
}
