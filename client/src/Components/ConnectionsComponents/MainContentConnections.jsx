import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import ProfilePic from "../../assets/fashion.jpg"


export default function MainContentConnections() {
  return (
    <>
        <section className=' basis-10/12 w-full  bg-white mb-4 rounded-b-md'>
            <section className=' flex gap-3 flex-col  px-5 py-4 rounded-t-lg '>
                <p className='text-gray-600 text-lg font-normal'>128 Connections</p>
                <section className="border-b flex justify-between w-full pb-4">
                    <section className='flex text-sm text-gray-500 items-center'>
                        <p >Sort by  : </p>
                        <p className='pl-1 font-medium'>Recently Added</p>
                    </section>
                    
                    
                    <section className='flex gap-3 justify-between items-center'>
                        <section className='flex relative w-full justify-between items-center ml-2 text-gray-700 font-medium border rounded-md focus-within:ring-1 focus-within:ring-gray-400'>
                            <span className='px-4 py-2 absolute inset-y-0 left-0 flex items-center'>
                                <ImSearch fontSize={17} />
                            </span>
                            <input type="text" className='py-2 pl-10 w-4/5 focus:outline-none hover:border-none rounded-3xl' />
                            
                        </section>
                        <button className='text-sm font-medium text-blue-700'> Filters</button>
                    </section>
                </section>
            </section>

            <section className='px-5'>
                <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
                    <section className='flex gap-2'>
                       <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                        <section className='text-gray-500'>
                            <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                            <p className='text-sm'>Software Engineer at Bloomberg</p>
                            <p className='text-xs'>Connected 6 days ago</p>
                        </section> 
                    </section>
                    
                    <section className=''>
                        <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Message</button>
                        <button className='ml-3'><BsThreeDots/></button>
                    </section>
                </section>


                <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
                    <section className='flex gap-2'>
                       <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                        <section className='text-gray-500'>
                            <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                            <p className='text-sm'>Software Engineer at Bloomberg</p>
                            <p className='text-xs'>Connected 6 days ago</p>
                        </section> 
                    </section>
                    
                    <section className=''>
                        <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Message</button>
                        <button className='ml-3'><BsThreeDots/></button>
                    </section>
                </section>



                <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
                    <section className='flex gap-2'>
                       <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                        <section className='text-gray-500'>
                            <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                            <p className='text-sm'>Software Engineer at Bloomberg</p>
                            <p className='text-xs'>Connected 6 days ago</p>
                        </section> 
                    </section>
                    
                    <section className=''>
                        <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Message</button>
                        <button className='ml-3'><BsThreeDots/></button>
                    </section>
                </section>




                <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
                    <section className='flex gap-2'>
                       <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                        <section className='text-gray-500'>
                            <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                            <p className='text-sm'>Software Engineer at Bloomberg</p>
                            <p className='text-xs'>Connected 6 days ago</p>
                        </section> 
                    </section>
                    
                    <section className=''>
                        <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Message</button>
                        <button className='ml-3'><BsThreeDots/></button>
                    </section>
                </section>



                <section className='flex justify-between border-b mb-3 items-center last:border-b-0'>
                    <section className='flex gap-2'>
                       <img src={ProfilePic} className='w-16 h-16 rounded-full mb-3' alt="" />
                        <section className='text-gray-500'>
                            <p className='font-medium text-gray-700 text-base'>Alfred Osei</p>
                            <p className='text-sm'>Software Engineer at Bloomberg</p>
                            <p className='text-xs'>Connected 6 days ago</p>
                        </section> 
                    </section>
                    
                    <section className=''>
                        <button className='text-blue-600 border-blue-500 px-3 py-0.5 rounded-3xl font-semibold border-2 hover:bg-blue-100'>Message</button>
                        <button className='ml-3'><BsThreeDots/></button>
                    </section>
                </section>

            </section>
            
        </section>
    </>
  )
}
