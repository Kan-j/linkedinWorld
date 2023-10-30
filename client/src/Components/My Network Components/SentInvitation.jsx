import React from 'react'

export default function SentInvitation({ name,position, friend, profilePic}) {
  return (
    <>
        <section className='flex justify-between items-center mx-3 border-b last:border-0 '>
            <section className='flex gap-3'>
                <img src={profilePic} alt=""className='w-16 mb-3 h-16 rounded-full object-cover' />
                <section>
                    <p className='text-gray-600'><span className='font-semibold text-gray-700'>{name}</span>  is following you and is inviting you to connect</p>
                    <p className='text-xs text-gray-600'>{position}</p>
                    <p className='text-xs text-gray-400'>{friend} and 8 others</p>
                </section>  
                
            </section>
            
            <section className=''>
                <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Withdraw</button>
            </section>
            
        </section>
    </>
  )
}
