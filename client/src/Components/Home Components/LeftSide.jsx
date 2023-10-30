import React from 'react'
import coverImage from "../../assets/fashion.jpg"
import { IoSaveSharp } from 'react-icons/io5'


export default function LeftSide() {
  return (
    <div className='md:col-span-1 lg:col-span-2 w-full col-span-1 h-72 relative rounded-lg mr-4 bg-white'>
        <section style={{'--image-url': `url(${coverImage})`}} className=" h-1/4 rounded-t-lg bg-[image:var(--image-url)] relative bg-cover">
          <img src={coverImage} alt="" className='absolute left-1/3 top-1/2 w-20 rounded-full' />
        </section>
        <section className='absolute top-32 left-1 text-center'>
          <a href="" className='font-semibold text-gray-700 text-base'>Kwasi Addo Nyarko</a>
          <p className='text-base md:text-sm px-2 text-gray-500 line-clamp-2 md:line-clamp-3 '>Passionate Full Stack Developer | Empowering Africa through Tech Innovation </p>
        </section>
        <a href='' className='flex w-full justify-around py-1 mt-36 border-gray-300 border-t text-base text-gray-500 font-medium hover:bg-gray-200 cursor-pointer'>
          <p>Profile viewers</p>
          <p>24</p>
        </a>
        <a href="" className='flex w-full justify-around text-base py-1 text-gray-500 font-medium hover:bg-gray-200 cursor-pointer'>
          <p> Post Impressions</p>
          <p>24</p>
        </a >
        
    </div>
  )
}

// sm:w-full md:w-4/12 lg:w-3/12
// sm:basis-full md:basis-4/12 lg:basis-3/12