import React from 'react'
import MyProfileSideCard from './MyProfileSideCard'

export default function SideBarMyProfile() {
  return (
    <div className='basis-4/12 flex bg-white rounded-lg h-fit mb-4 flex-col gap-3'>
        <section className='px-5 py-5'>
        <section className=''>
            <p className='font-semibold text-gray-600'>People you may know</p>
            <p className='font-normal  text-gray-400'>From Princess Ofori-Hanson</p>
        </section>

        {/* Main Contaainer */}
        <section>
           <MyProfileSideCard/>
           <MyProfileSideCard/>
           <MyProfileSideCard/>
           <MyProfileSideCard/>
        </section>
        </section>
    </div>
  )
}
