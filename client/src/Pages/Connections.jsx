import React from 'react'
import MainContentConnections from '../Components/ConnectionsComponents/MainContentConnections'

export default function Connections() {
  return (
    <>
        <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex justify-between'>
                    <MainContentConnections/>
                </main> 
            </div>
        </main>
    </>
  )
}
