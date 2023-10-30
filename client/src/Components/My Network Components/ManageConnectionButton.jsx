import React from 'react'

export default function ManageConnectionButton({title, value, icon, handleClick}) {
  return (
    <button onClick={handleClick} className='text-gray-500  text-base flex justify-between items-center mt-3'>
        <section className='flex gap-2 md:gap-4 items-center'>
        {icon}
        <p>{title}</p>
        </section>
        <p>{value}</p>         
    </button>
  )
}
