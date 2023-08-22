'use client'
import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect,useState } from 'react'

import { useSelector } from 'react-redux'

const AddPost = () => {

  const username = useSelector((state) => state.params.value)

  const token = Cookies.get('jsonwebtoken')
  const router =useRouter()

  const [content,setContent] = useState('')
  const [title,setTitle] = useState('')

  const data = {
      content,title
  }
  
  const jsonData = JSON.stringify(data)

  const addPost = async () => {
      const response = await fetch('http://localhost:5000/api/user/profile/add-post',{
          method : 'POST',
          headers : {
              Authorization :  `Bearer ${token}`,
              'Content-Type' : 'application/json'
          },
          body : jsonData

      })
      const data = await response.json()

      if(data.success) {
          router.push(`/user/${username}`)
      }

  }


  return (
    <>
        <div className='flex flex-col '>
                <label htmlFor='title' className='font-roboto mt-8 text-2xl'>Başlık</label>
                <input onChange={(e) => setTitle(e.target.value)} id='title' className='h-12 font-roboto text-lg w-full border-2 rounded-lg text-gray-700 border-gray-300 focus:border-gray-400 outline-none mt-4' placeholder='zorunlu değil...'></input>
                
                <label htmlFor='text' className='font-roboto mt-8 text-2xl'>İçerik</label>
                <textarea onChange={(e) => setContent(e.target.value)} id='text'  className='font-roboto text-lg w-full border-2 rounded-lg text-gray-700 border-gray-300 focus:border-gray-400 outline-none mt-4' rows={8} cols={8}></textarea>

                <div className='text-center'>
                    <button onClick={() => addPost()} className='mt-4 mb-5 bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white w-24' >Paylaş</button>
                </div>
        </div>
    </>
  )
}

export default AddPost