import React from 'react'
import ProfilePic from "../../assets/fashion.jpg"
import FollowingCard from './FollowingCard'

export default function MainFollowingContent() {
  return (
    <>
         <section className=' basis-10/12 w-full  bg-white mb-4 rounded-b-md'>
            <section className=' flex gap-3 flex-col  px-5 py-4 rounded-t-lg '>
                <p className='text-gray-600 text-lg font-normal border-b pb-2'>Following 65 people</p>
            </section>

            <section className='px-5'>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>
               <FollowingCard/>

            </section>
            
        </section> 
    </>
  )
}
