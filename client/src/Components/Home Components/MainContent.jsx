import React from 'react'
import coverImage from "../../assets/fashion.jpg"
import { ImImage } from 'react-icons/im'
import {  BsCalendar2Event,  BsChatText, BsDot, BsEmojiSmile, BsLayoutSidebar, BsSendFill, BsThreeDots } from 'react-icons/bs'
import Post from '../Main Content Components/Post'

export default function MainContent() {
  // sm:w-full md:w-8/12 lg:w-6/12 w-full
  // sm:basis-full md:basis-8/12 lg:basis-6/12 w-full
  return (
    <div className='md:col-span-2 lg:col-span-4  w-full'>

        {/* ADD POST COMPONENT */}
        <section className='px-4 py-3 bg-white rounded-lg'>
          <section className='flex gap-2 '>
              <img className='w-12 h-12 rounded-full object-contain' src={coverImage} alt=""  />
            <button className='border border-gray-500 rounded-3xl w-5/6 text-left pl-4 font-semibold text-gray-600 hover:bg-gray-200'>Start a post</button>
          </section>
          <section className='flex justify-between mt-4'>
            <button className='flex items-center gap-3 px-2 py-1 rounded-lg text-gray-500 font-medium hover:bg-gray-200 '>
              <ImImage />
              <p>Media</p>
            </button>
            <button className='flex items-center gap-3 px-2 py-1 rounded-lg text-gray-500 font-medium hover:bg-gray-200 '>
              <BsCalendar2Event/>
              <p>Events</p>
            </button>
            <button className='flex items-center gap-3 px-2 py-1 rounded-lg text-gray-500 font-medium hover:bg-gray-200 '>
              <BsLayoutSidebar/>
              <p>Article</p>
            </button>
          </section>
        </section>




        {/* POSTS */}

       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />
       <Post
        coverImage={coverImage} 
       />

    </div>
  )
}
