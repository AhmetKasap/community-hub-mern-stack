import Link from 'next/link'
import React from 'react'
import Login from './Login'
import Register from './Register'

const Navbar = () => {
  return (
    <>  
       <div className=' flex flex-row w-full h-20'>
         <div className='basis-1/4 flex flex-row justify-center items-center'>
            <Link href="/"><h1 className='text-2xl text-black font-bold font-roboto hover:text-3xl'>LOGO</h1></Link>
         </div>
         <div className='basis-1/2 flex flex-row justify-center items-center '>
            <input className='w-full border-2 border-gray-200 focus:border-4 outline-none  rounded-xl h-10 text-sm font-roboto' placeholder='... da ara'></input>
         </div>
         <div className='basis-1/4 flex flex-row justify-center items-center gap-3'>
            <ul className='flex flex-row justify-center items-center gap-3'>
                <Login></Login>
                <Register></Register>
            </ul>
         </div>
       </div>
       <hr></hr>

    </>
  )
}

export default Navbar