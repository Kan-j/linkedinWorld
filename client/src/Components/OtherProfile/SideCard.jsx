import React from 'react'
import { BsPlug} from 'react-icons/bs'
import ProfilePic from "../../assets/fashion.jpg"


export default function SideCard() {
  return (
    <>
      <section className='flex gap-2 mt-3 border-b last:border-none '>
            <img src={ProfilePic} className='w-14 h-14 rounded-full object-cover' alt="" />
            <section className='flex flex-col'>
                <a href="" className='text-base text-gray-800 font-medium'>Jay Berdie</a>
                <p className='text-gray-600 text-sm mb-3'>Interest in Public Relations and Advertising </p>
                <button className='flex gap-1 items-center justify-start rounded-2xl text-gray-500 border hover:bg-gray-100 border-gray-600 px-4 py-1 w-fit mb-3'> 
                <BsPlug fontSize={21}/>
                <p className='font-medium'>Connect</p>
                </button>
            </section>
        </section>  
    </>
  )
}
