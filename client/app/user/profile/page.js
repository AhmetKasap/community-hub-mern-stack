import React from 'react'
import Navbar from '@/components/home/Navbar'
import EditProfile from '@/components/user/Profile'
import Posts from '@/components/user/Posts'
import Link from 'next/link'

const page = () => {
  return (
    <>  
        <Navbar></Navbar>
        <div className='flex flex-row w-3/4 mx-auto mt-8'>
            <div className='basis-1/4'>
                <EditProfile></EditProfile>
                


            </div>
            <div className='basis-3/4'>
                <Posts></Posts>
            </div>
        </div>
        

    </>
  )
}

export default page