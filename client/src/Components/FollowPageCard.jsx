import React from 'react'
import { BsPlus } from 'react-icons/bs'
import coverImage from "../assets/fashion.jpg"

export default function FollowPageCard() {
  return (
    <>
        <section className='flex items-start mt-3'>
              <img src={coverImage} alt="" className='w-10 h-10 rounded-full object-cover mr-3' />
              <section>
                <p className='font-semibold  text-gray-700 line-clamp-1'>Theophilus Addo</p>
                <p className='text-sm text-gray-500 pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='flex gap-x-1 mt-2 border hover:bg-gray-200 border-gray-400 pl-3 pr-4 py-1 rounded-3xl font-semibold focus-within:ring-1 focus-within:ring-gray-500'>
                  <BsPlus fontSize={24}/>
                  Follow
                </button>
              </section>
            </section>
    </>
  )
}
