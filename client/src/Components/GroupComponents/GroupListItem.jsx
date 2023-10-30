import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ProfilePic from "../../assets/fashion.jpg"

export default function GroupListItem() {
  return (
    <>
         <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
            <section className='flex gap-2'>
                <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                <section className='text-gray-500'>
                    <p className='font-medium text-gray-700 text-lg'>Alfred Osei</p>
                    <p className='text-sm'>20 members</p>
                </section> 
            </section>
            
            <section className=''>
                <button className=' px-3 py-0.5 rounded-3xl font-semibold  hover:bg-blue-100'><BsThreeDots/></button>
                {/* Other states include Unfollow */}
            </section>
        </section>
    </>
  )
}
