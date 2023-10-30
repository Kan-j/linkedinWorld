import React from 'react'

export default function InvitationCard({ name,position, friend, profilePic}) {
  return (
    <>

        <section className='flex flex-col md:flex-row justify-between items-center mx-3 border-b last:border-0'>
        <section className='flex gap-3'>
            <img src={profilePic} alt="" className='w-16 h-16 mb-3 rounded-full object-cover' />
            <section className=''>
            <p className='text-gray-600 line-clamp-2 md:line-clamp-1'>
                <span className='font-semibold text-gray-700'>{name}</span> is following you and is inviting you to connect
            </p>
            <p className='text-xs text-gray-600'>{position}</p>
            <p className='text-xs text-gray-400'>{friend} and 8 others</p>
            </section>
        </section>

        <section className='mt-3 md:mt-0'>
            <button className='font-semibold text-gray-600 mb-2 md:mb-0 md:mr-4 hover:underline'>Ignore</button>
            <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Accept</button>
        </section>
        </section>

        {/* <section className='flex justify-between items-center mx-3 border-b last:border-0 '>
            <section className='flex gap-3'>
                <img src={profilePic} alt=""className='w-16 mb-3 h-16 rounded-full object-cover' />
                <section className=''>
                    <p className='text-gray-600 line-clamp-1'><span className='font-semibold text-gray-700'>{name}</span> is following you and is inviting you to connect</p>
                    <p className='text-xs text-gray-600'>{position}</p>
                    <p className='text-xs text-gray-400'>{friend} and 8 others</p>
                </section>  
                
            </section>
            
            <section className=''>
                <button className='font-semibold text-gray-600 mr-4 hover:underline'>Ignore</button>
                <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Accept</button>
            </section>
            
        </section> */}

    </>
  )
}
