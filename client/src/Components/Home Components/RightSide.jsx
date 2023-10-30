import React from 'react'
import { IoHelpCircle } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'
import FollowPageCard from '../FollowPageCard'

// basis-3/12 
export default function RightSide() {
  return (
    <div className='md:col-span-1 lg:col-span-3 rounded-lg bg-white w-full h-fit'>
        <section className='px-6 py-5'>
            <section className='flex justify-between items-center'>
              <p className='font-semibold text-gray-700'>Add to your feed</p>
              <IoHelpCircle fontSize={18}/>
            </section>
            <FollowPageCard />
            <FollowPageCard />
            <FollowPageCard />
            <FollowPageCard />
            <a href="" className='flex items-center gap-2 hover:underline mt-3 text-gray-500'>View all recommendations <BsArrowRight /></a>
        </section>
      </div>
  )
}
