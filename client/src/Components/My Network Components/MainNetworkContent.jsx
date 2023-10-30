import React from 'react'
import ProfilePic from "../../assets/fashion.jpg"
import InvitationCard from './InvitationCard'
import FollowConnectionCard from './FollowConnectionCard'



export default function MainNetworkContent() {
  return (
    <div className='basis-9/12 flex flex-col gap-3'>
        <div className=' rounded-lg flex flex-col gap-3 py-3 md:ml-5 mt-4 md:mt-0 mb-3 bg-white   w-full'>
            <section className='flex justify-between'>
                <h2 className='text-gray-700 border-b w-full px-5 py-3'>Invitations</h2>
                <button className='text-gray-700 mr-5 hover:underline'>Manage</button>
            </section>
            
            
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TAp'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TAo'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TAy'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TAyi'
            />
        </div>

       

        <section className='rounded-lg h-fit  py-3 md:ml-5 mt-4 md:mt-0 bg-white px-3   w-full mb-4'>
            <p className='mb-3 text-gray-600'>People you might know..</p>
            <section className=' grid gap-5 grid-cols-2  md:grid-cols-3  xl:grid-cols-4 '>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>

            </section>
        </section>


        <section className='rounded-lg h-fit md:ml-5 mt-4 md:mt-0 py-3 ml-5 bg-white px-3   w-full mb-4'>
            <p className='mb-3 text-gray-600'>Recommended Pages for you..</p>
            <section className=' grid gap-5 grid-cols-2 md:grid-cols-4  '>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>

            </section>
        </section>
        
        <section className='rounded-lg h-fit md:ml-5 mt-4 md:mt-0  py-3 ml-5 bg-white px-3   w-full mb-4'>
            <p className='mb-3 text-gray-600'>Groups you may be interested in..</p>
            <section className=' grid gap-5 grid-cols-2 md:grid-cols-4  '>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>
                <FollowConnectionCard/>

            </section>
        </section>
        
    </div>
    
  )
}
