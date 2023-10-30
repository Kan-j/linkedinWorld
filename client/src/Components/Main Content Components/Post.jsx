import React from 'react'
import {  BsChatText, BsDot, BsEmojiSmile, BsSendFill, BsThreeDots } from 'react-icons/bs'
import { IoRefreshSharp, IoThumbsUpOutline } from 'react-icons/io5'
import { ImImage } from 'react-icons/im'

function Button({title, icon, onClick}){
    return <button className='flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg'>
    {icon}
    <p>{title}</p>
  </button>
} 

export function ProfileImage({coverImage}){
    return <img src={coverImage} alt="" className='w-10 h-10 rounded-full' />
}


export default function Post({coverImage}) {
  return (
    <section className='flex rounded-lg flex-col mt-4 bg-white px-2 py-3'>
    <section className='flex gap-2 items-start justify-between'>
      <section className='flex gap-2 items-start'>
        <ProfileImage coverImage={coverImage}/>
        <section className='gap-y-0'>
          <p className='text-gray-700 font-medium flex'>Aliyan Ansari <span><BsDot className='inline'/> <button className='text-blue-700 text-sm'>Follow</button> <span className='text-sm'>Following</span></span></p>
          <p className='text-xs'>Associate MERN Stack Developer at Bitrupt Reactjs...</p>
          <p className='text-xs'>1 w</p>
        </section>
      </section>
      
      <section className='flex gap-3 items-center mr-2 text-gray-600'>
        <button><BsThreeDots/></button> 
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
          </svg>
        </button>
      </section>
    </section>
    <section>
      {/* Lets call this content */}
      <section className='mt-2 text-gray-700'>
        <p>React Small Tip</p>
        <p>You want to learn React then visit ....</p>
      </section>
    </section>
    {/* If post has image */}
    <section className='flex gap-1 mt-2'>
      <img src={coverImage} className='w-full' alt="" />
      {/* <img src={coverImage} className='w-1/2' alt="" /> */}
    </section>
    <section className='flex justify-between pb-3 border-b border-gray-200 mt-2 text-sm text-gray-500'>
      <p>15 likes</p>
      <section className='flex gap-2'>
        <p>16 comments</p>
        <p>24 repost</p>
      </section>
    </section>
    <section className='flex justify-between mt-2 text-base text-gray-700 font-semibold mx-auto'>
        <Button key='Like' title='Like' icon={<IoThumbsUpOutline/>}/>
        <Button key='Comment' title='Comment' icon={<BsChatText/>}/>
        <Button key='Repost' title='Repost' icon={<IoRefreshSharp/>}/>
        <Button key='Send' title='Send' icon={<BsSendFill/>}/>
    </section>
    <section className='flex mt-2'>
      {/* post comment */}
      <img src={coverImage} alt="" className='w-10 h-10 rounded-full' />
      <section className='flex items-center flex-1'> 
        <section className='flex relative w-full justify-between items-center ml-2 text-gray-700 font-medium border rounded-3xl focus-within:ring-1 focus-within:ring-gray-400'>
          <input type="text" className='py-2 pl-4 w-full focus:outline-none hover:border-none rounded-3xl' />
          <div className='flex gap-2 ml-2 mr-4'>
            <button>
              <BsEmojiSmile fontSize={20}/>
            </button>
            <button>
              <ImImage fontSize={20}/>
            </button>
          </div>
          
        </section>
      </section>
    </section>
    <section>
      {/* existing comments */}
      <section className='flex gap-3 mt-3'>
        <img src={coverImage} alt="" className='w-10 h-10 rounded-full' />
        <section>
          <section>
            <section className='px-3 py-2 bg-slate-200 rounded-lg '>
              <section className='flex justify-between '>
                  <section>
                  <p className='text-gray-700 font-semibold'>Michael DePaola</p>
                  <p className='text-xs text-gray-500 font-normal'>Project Manager</p>
                  </section>
                  <section className='flex items-start gap-3'>
                    <p className='text-sm'>5m</p>
                    <button><BsThreeDots/></button> 
                  </section>
                  
                </section> 
                <p className='mt-3 text-sm text-gray-700'>Not everything in life needs to be automated. How lazy are we as humans??</p>
              </section>
          </section>
          <section className='text-sm text-gray-600 font-semibold mt-2'>
            <button className='mx-2 px-2'>Like</button>
              |
            <button className='mx-2 px-2'>Reply</button>
          </section>
          <section className='flex relative w-full justify-between items-center mr-6 mt-3 text-gray-700 font-medium border rounded-3xl focus-within:ring-1 focus-within:ring-gray-400'>
              <input type="text" className='py-2 pl-4 w-full focus:outline-none hover:border-none rounded-3xl' />
              <div className='flex gap-2 ml-2 mr-4'>
                <button>
                  <BsEmojiSmile fontSize={20}/>
                </button>
                <button>
                  <ImImage fontSize={20}/>
                </button>
              </div>
            </section>


        {/* Comments under first comment beginning */}


        {/* Comments under first post */}


        <section>
      {/* existing comments */}
      <section className='flex gap-3 mt-2'>
        <img src={coverImage} alt="" className='w-10 h-10 rounded-full' />
        <section>
          <section>
            <section className='px-3 py-2 bg-slate-200 rounded-lg '>
              <section className='flex justify-between '>
                  <section>
                  <p className='text-gray-700 font-semibold'>Michael DePaola</p>
                  <p className='text-xs text-gray-500 font-normal'>Project Manager</p>
                  </section>
                  <section className='flex items-start gap-3'>
                    <p className='text-sm'>5m</p>
                    <button><BsThreeDots/></button> 
                  </section>
                  
                </section> 
                <p className='mt-3 text-sm text-gray-700'>Not everything in life needs to be automated. How lazy are we as humans??</p>
              </section>
          </section>
          <section className='text-sm text-gray-600 font-semibold mt-2'>
            <button className='mx-2 px-2'>Like</button>
              |
            <button className='mx-2 px-2'>Reply</button>
          </section>
          <section className='flex relative w-full justify-between items-center mr-6 mt-3 text-gray-700 font-medium border rounded-3xl focus-within:ring-1 focus-within:ring-gray-400'>
              <input type="text" className='py-2 pl-4 w-full focus:outline-none hover:border-none rounded-3xl' />
              <div className='flex gap-2 ml-2 mr-4'>
                <button>
                  <BsEmojiSmile fontSize={20}/>
                </button>
                <button>
                  <ImImage fontSize={20}/>
                </button>
              </div>
              
            </section>
        </section>
      </section>
      
    </section>



        </section>
      </section>
      
    </section>
</section>
  )
}
