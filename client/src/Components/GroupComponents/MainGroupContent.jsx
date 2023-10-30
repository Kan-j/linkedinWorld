import React from 'react'
import FollowerCard from '../FollowersComponents/FollowerCard'
import GroupListItem from './GroupListItem'

export default function MainGroupContent() {
  return (
    <>
         <section className=' basis-10/12 w-full  bg-white mb-4 rounded-md'>
            <section className='mb-3 flex gap-3 border-b  px-5 pt-4 pb-2 justify-between'>
                <section>
                    <button className='text-base font-semibold text-gray-600 pb-1 mr-5'>Your Group</button>
                    <button className='text-base font-semibold text-gray-600'>Requested</button>
                </section>
                <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>
                    Create group
                </button>
            </section>

            <section className='px-5'>
                <GroupListItem/>
                <GroupListItem/>
                <GroupListItem/>
                <GroupListItem/>
                <GroupListItem/>
                <GroupListItem/>
                <GroupListItem/>
                

            </section>
            
        </section>
    
    </>
  )
}
