import React from 'react'
import coverImage from "../../assets/fashion.jpg"
import { BsPencil, BsPersonFill, BsPlugFill, BsPlus, BsTelegram } from 'react-icons/bs'
export default function MyProfileMain() {
  return (
    <>
         <div className='basis-8/12 flex flex-col gap-3 mr-5 h-fit'>
            <section className='bg-white rounded-lg flex flex-col gap-3 mb-2'>
                <section style={{'--image-url': `url(${coverImage})`}} className=" h-44 rounded-t-lg bg-[image:var(--image-url)] relative bg-cover">
                    <img src={coverImage} alt="" className='absolute left-14 top-2/4 w-44 rounded-full mb-10' />
                </section>
                <section className='mt-20 text-left mx-10'>
                    <section className='flex justify-between'>
                    <a href="" className='font-semibold text-gray-700 text-2xl '>Kwasi Addo Nyarko</a>
                        <section className='flex items-center gap-2 text-gray-600'>
                            <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                        </section>
                    </section>
                    <p className='text-lg text-gray-500 mb-2'>Passionate Full Stack Developer | Empowering Africa through Tech Innovation  </p>
                    <p className='text-sm text-gray-500'>Accra, Greater Accra Region, Ghana</p>
                    <section className='flex mt-3 text-gray-500 text-sm gap-3 '>
                        <a href="" className='hover:text-blue-700'>209 followers</a>
                        <a href="" className='hover:text-blue-700'>194 connections</a>
                    </section>
                    <p className='text-gray-500 mb-4'> <span className='text-gray-500 font-medium text-sm'>Derrick Sarpong, OBED BAMIEBO,</span> and 16 other mutual connections</p>
                    <section className='flex text-white mb-4 font-medium'>
                        <button className='flex items-center gap-2 justify-center border rounded-full px-3 py-2 bg-blue-700 hover:bg-blue-900 focus:bg-blue-800 mr-3'>
                            <BsTelegram/>
                            <p>Message</p>
                        </button>
                        <button className='flex items-center gap-2 justify-center border rounded-full px-3 py-2 bg-blue-700 hover:bg-blue-900 focus:bg-blue-800 mr-3'>
                            <BsPlugFill/>
                            <p>Connect</p>
                        </button>
                        <button className='flex items-center gap-2 justify-center border rounded-full px-3 py-2 bg-blue-700 hover:bg-blue-900 focus:bg-blue-800'>
                            <BsPersonFill/>
                            <p>Follow</p>
                        </button>
                    </section>
            </section>
            </section>
            
            

            <section className='bg-white px-10 py-5 rounded-lg mb-3'>
                <section className='flex justify-between'>
                    <p className='font-semibold text-gray-700 text-xl mb-3'>About</p>
                    <section className='flex items-center gap-2 text-gray-600'>
                        <button className='hover:bg-gray-100 hover:rounded-full px-1 py-1'><BsPlus fontSize={32}/></button>
                        <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                    </section>
                </section>
                <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum repellat magnam doloremque eius. Possimus beatae asperiores, maxime delectus dolores omnis temporibus ipsam modi facilis voluptatum voluptas pariatur ipsum aut amet at rem atque optio eligendi deserunt aspernatur nesciunt obcaecati debitis, unde quasi? Ducimus repellendus eligendi iure repellat temporibus dicta assumenda quis porro rerum reprehenderit nihil corrupti mollitia officiis blanditiis quae ipsum explicabo, accusamus cum libero odit illum, alias praesentium doloribus placeat! Fugiat iste amet deserunt recusandae incidunt iusto assumenda nostrum facere, cumque minima debitis nihil sapiente, excepturi aperiam a ut accusantium tenetur minus deleniti dicta esse. Dicta, omnis facilis!</p>
            </section>

            {/* Experience */}
            <section className='bg-white px-10 py-5 rounded-lg mb-3'>
                <section className='flex justify-between'>
                    <p className='font-semibold text-gray-700 text-xl mb-3'>Experience</p>
                    <section className='flex items-center gap-2 text-gray-600'>
                        <button className='hover:bg-gray-100 hover:rounded-full px-1 py-1'><BsPlus fontSize={32}/></button>
                        <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                    </section>
                </section>
                <section className=''>
                    {/* Experience Card begin */}
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <img src={coverImage} alt="" className='w-14 h-14 rounded-md' />
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Research Assistant</h1>
                            <p className='text-gray-800 text-sm'>EchoHouse Ghana LTD</p>
                            <p className='text-sm '>Sep 2023 - Present</p>
                            <p className='text-sm'>Remote</p>
                            <section className='flex gap-4 text-gray-800 text-sm mt-2'>
                                <p className='font-medium '>Skills:</p>
                                <p>Branding</p>
                                <p>Graphic Design</p>
                            </section>
                            
                        </section>
                    </section>
                    
                   
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <img src={coverImage} alt="" className='w-14 h-14 rounded-md' />
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Research Assistant</h1>
                            <p className='text-gray-800 text-sm'>EchoHouse Ghana LTD</p>
                            <p className='text-sm '>Sep 2023 - Present</p>
                            <p className='text-sm'>Remote</p>
                            <section className='flex gap-4 text-gray-800 text-sm mt-2'>
                                <p className='font-medium '>Skills:</p>
                                <p>Branding</p>
                                <p>Graphic Design</p>
                            </section>
                            
                        </section>
                    </section>

                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <img src={coverImage} alt="" className='w-14 h-14 rounded-md' />
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Research Assistant</h1>
                            <p className='text-gray-800 text-sm'>EchoHouse Ghana LTD</p>
                            <p className='text-sm '>Sep 2023 - Present</p>
                            <p className='text-sm'>Remote</p>
                            <section className='flex gap-4 text-gray-800 text-sm mt-2'>
                                <p className='font-medium '>Skills:</p>
                                <p>Branding</p>
                                <p>Graphic Design</p>
                            </section>
                            
                        </section>
                    </section>
                    {/* Experience Card End */}
                </section>
            </section>

            {/* Education */}
            <section className='bg-white px-10 py-5 rounded-lg mb-3'>
                <section className='flex justify-between'>
                    <p className='font-semibold text-gray-700 text-xl mb-3'>Education</p>
                    <section className='flex items-center gap-2 text-gray-600'>
                        <button className='hover:bg-gray-100 hover:rounded-full px-1 py-1'><BsPlus fontSize={32}/></button>
                        <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                    </section>
                </section>
                
                <section className=''>
                    {/* Experience Card begin */}
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <img src={coverImage} alt="" className='w-14 h-14 rounded-md' />
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>University Of Ghana</h1>
                            <p className='text-gray-800 text-sm'>Bachelor Of Applied Science - BSc. Computer Engineering</p>
                            <p className='text-sm '>Sep 2023 - Present</p>
                            <p className='text-sm'>Grade: 2nd Class Upper </p>
                            <section className='flex gap-4 text-gray-800 text-sm mt-2'>
                                <p className='font-medium '>Skills:</p>
                                <p>Branding</p>
                                <p>Graphic Design</p>
                            </section>
                            
                        </section>
                    </section>
                
                    
                    {/* Experience Card End */}
                </section>
            </section>


            {/* Licenses & Certifications */}
            <section className='bg-white px-10 py-5 rounded-lg mb-3'>
                <section className='flex justify-between'>
                    <p className='font-semibold text-gray-700 text-xl mb-3'>Licenses & Certifications</p>
                    <section className='flex items-center gap-2 text-gray-600'>
                        <button className='hover:bg-gray-100 hover:rounded-full px-1 py-1'><BsPlus fontSize={32}/></button>
                        <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                    </section>
                </section>
                
                <section className=''>
                    {/* Experience Card begin */}
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <img src={coverImage} alt="" className='w-14 h-14 rounded-md' />
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Javascript Basics</h1>
                            <p className='text-gray-800 text-sm'>Coursera</p>
                            <p className='text-sm '>Issued Noveber,2022</p>
                            <section className='flex  text-gray-800 text-sm mt-2'>
                                <button className='border px-4 py-1 rounded-2xl border-gray-400 hover:bg-gray-200'>Show Credential</button>
                            </section>
                            
                        </section>
                    </section>
                
                    
                    {/* Experience Card End */}
                </section>
            </section>


               {/* Skills */}
               <section className='bg-white px-10 py-5 rounded-lg mb-3'>
                <section className='flex justify-between'>
                    <p className='font-semibold text-gray-700 text-xl mb-3'>Skills</p>
                    <section className='flex items-center gap-2 text-gray-600'>
                        <button className='hover:bg-gray-100 hover:rounded-full px-1 py-1'><BsPlus fontSize={32}/></button>
                        <button className='hover:bg-gray-100 hover:rounded-full px-2 py-2'><BsPencil fontSize={22}/></button>
                    </section>
                </section>
                
                <section className=''>
                    {/* Experience Card begin */}
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Javascript Basics</h1>
                        </section>
                    </section>
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Javascript Basics</h1>
                        </section>
                    </section>
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Javascript Basics</h1>
                        </section>
                    </section>
                    <section className='flex gap-2 items-start border-b mb-2 last:border-none pb-2 mt-2'>
                        <section className='text-gray-600'>
                            <h1 className='font-medium'>Javascript Basics</h1>
                        </section>
                    </section>
                
                    
                    {/* Experience Card End */}
                </section>
            </section>


        </div>
    </>
  )
}
