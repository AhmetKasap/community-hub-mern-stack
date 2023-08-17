'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/home/Navbar'
import Profile from '@/components/user/Profile'
import Posts from '@/components/user/Posts'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'



const page = () => {
  const router = useRouter()

  const [tokens,setTokens] = useState('')

   useEffect(() => {
      const token = Cookies.get('jsonwebtoken')
      if(token) {
         setTokens(token)
      }
      else {
        router.push('/user/login')
        
      }
     
   },[])


  return (
    <>  
      <Navbar></Navbar>

        {
          tokens ? ( 
          <div className='flex flex-row w-3/4 mx-auto mt-8'>
              <div className='basis-1/4'>
                  <Profile></Profile>
                  
  
  
              </div>
              <div className='basis-3/4'>
                  <Posts></Posts>
              </div>
          </div>) : ('')
        }
       
        

    </>
  )
}

export default page







































/*
'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/home/Navbar'
import Profile from '@/components/user/Profile'
import Posts from '@/components/user/Posts'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'



const page = () => {
  const router = useRouter()

  const [tokens,setTokens] = useState('')

   useEffect(() => {
      const token = Cookies.get('jsonwebtoken')
      if(token) {
         setTokens(token)
      }
     
   },[])


  return (
    <>  
      <Navbar></Navbar>

        {
          tokens ? ( 
          <div className='flex flex-row w-3/4 mx-auto mt-8'>
              <div className='basis-1/4'>
                  <Profile></Profile>
                  
  
  
              </div>
              <div className='basis-3/4'>
                  <Posts></Posts>
              </div>
          </div>) : (router.push('/user/login'))
        }
       
        

    </>
  )
}

export default page



*/