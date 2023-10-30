import React from 'react'
import ProfilePic from "../../assets/fashion.jpg"

export default function FollowerCard() {
  return (
    <>
        <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
            <section className='flex gap-2'>
                <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                <section className='text-gray-500'>
                    <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                    <p className='text-sm'>Software Engineer at Bloomberg</p>
                    <p className='text-xs'>16 posts this week</p>
                </section> 
            </section>
            
            <section className=''>
                <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Follow back</button>
                {/* Other states include Unfollow */}
            </section>
        </section>
    </>
  )
}
