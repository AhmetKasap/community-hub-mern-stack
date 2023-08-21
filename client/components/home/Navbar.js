'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Register from './Register'
import LoginButton from './LoginButton'
import Cookies from 'js-cookie'
import ProfileButton from '../users/ProfileComponents/ProfileButton'

const Navbar = () => {

   const [tokens,setTokens] = useState('')

   useEffect(() => {
      const token = Cookies.get('jsonwebtoken')
      if(token) {
         setTokens(token)
      }
     
   },[])

   



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
               {
                  tokens ? (<ProfileButton></ProfileButton>) : (
                     <>
                        <LoginButton></LoginButton>
                        <Register></Register>
                     </>
                     
                  )
               }
                

                
            </ul>
         </div>
       </div>
       <hr></hr>

    </>
  )
}


export default Navbar

