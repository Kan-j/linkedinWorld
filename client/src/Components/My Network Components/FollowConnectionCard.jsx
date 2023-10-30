import React from 'react'
import ProfilePic from "../../assets/fashion.jpg"

export default function FollowConnectionCard() {
  return (
    <section className='col-span-1 row-auto border rounded-lg shadow-sm '>
        <section style={{'--image-url': `url(${ProfilePic})`}} className=" h-14 rounded-t-lg bg-[image:var(--image-url)] relative bg-cover">
            <img src={ProfilePic} alt="" className='absolute left-1/4 top-1/3 w-16 rounded-full' />
        </section>
        <p className='mt-8 ml-3 font-medium text-sm px-2'>Kwasi Addo Nyarko</p>
        <p className='ml-3 text-sm text-gray-600 px-2 text-justify md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae?</p>
        <section className='w-full flex justify-center mb-3'>
            <button className='border py-1 px-2 mx-auto rounded-2xl  hover:bg-blue-100 border-blue-600 w-11/12 mt-3 text-blue-700 font-semibold'>Follow</button>
        </section>  
    </section>
  )
}
