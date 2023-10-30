import React from 'react'
import ManageNetwork from '../Components/My Network Components/ManageNetwork'
import MainNetworkContent from '../Components/My Network Components/MainNetworkContent'

export default function MyNetwork() {
  return (
    <>
        <main className='w-full bg-gray-100 pt-24 h-full'>
            <div className='w-4/5 mx-auto'>
                <main className='flex flex-col md:flex-row justify-between'>
                    <ManageNetwork/>
                    <MainNetworkContent />
                </main> 
            </div>
        </main>
    </>
  )
}
