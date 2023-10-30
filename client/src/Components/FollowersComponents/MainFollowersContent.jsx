import React from 'react'
import FollowerCard from './FollowerCard'

export default function MainFollowersContent() {
  return (
    <>
        <section className=' basis-10/12 w-full  bg-white mb-4 rounded-b-md'>
            <section className=' flex gap-3 flex-col  px-5 py-4 rounded-t-lg '>
                <p className='text-gray-600 text-lg font-normal border-b pb-2'>68 Followers</p>
            </section>

            <section className='px-5'>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>
                <FollowerCard/>

            </section>
            
        </section>
    </>
  )
}
