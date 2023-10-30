import React from 'react'
import ProfilePic from "../../assets/fashion.jpg"
import InvitationCard from './InvitationCard'
import SentInvitation from './SentInvitation'

export default function InvitationContent() {
  return (
    <>
        <div className='basis-9/12 flex flex-col gap-3'>
            <div className=' rounded-lg flex flex-col gap-3 py-3 ml-5 mb-3 bg-white w-full'>
            <section className='flex justify-between flex-col'>
                <h2 className='text-gray-700  w-full px-5 py-3'>Manage Invitations</h2>
                <section className='border-b px-5 flex gap-4'>
                    <button className='font-semibold text-sm text-gray-600 pb-2'>Received</button>
                    <button className='font-semibold text-sm text-gray-600 pb-2'>Sent</button>
                </section>
            </section>

            <section className='flex justify-start border-b pb-2 ml-3'>
                <button className='text-gray-700 mr-5  border border-green-600 hover:bg-green-600 hover:text-white rounded-full  px-5 py-1'>All(1)</button>
                <button className='text-gray-700 mr-5  border hover:bg-green-600 hover:text-white border-green-600 rounded-full  px-5 py-1'>People(2)</button>
            </section>
            
            
            <SentInvitation 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <SentInvitation 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <SentInvitation 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
            <InvitationCard 
            name='Theophilus Addo'
            profilePic={ProfilePic}
            friend='Joseph Mensah'
            position='Full stack'
            key='TA'
            />
        </div>

        
    </div>
    </>
  )
}
