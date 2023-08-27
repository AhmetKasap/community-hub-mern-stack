'use client'
import React, { useEffect, useState } from 'react'

const AiSupport = () => {

  const [userData, setUserData] = useState()
  const [gpt, setGpt] = useState()
  
    const api = async () => {
      const response = await fetch('http://localhost:5000/api/chatgpt', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({userData})
      })
      const res = await response.json()
      console.log('res',res)
      setGpt(res.data.message.content)
    } 

    console.log('state gpt', gpt)

   
  


  return (
    <>
    <hr className='text-2xl font-roboto text-black h-8'></hr>
        <div className='text-center mt-8'>
            <h1 className='text-3xl font-roboto'>Yapay Zekadan Destek Al</h1>
            <textarea value={gpt} onChange={(e) => setUserData(e.target.value)} className='text-lg w-full border-2 rounded-lg border-gray-300 text-gray-700 font-roboto focus:border-gray-400 outline-none mt-4' rows={8} cols={8}></textarea>
            <button onClick={() => api()} className='mt-4 bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white w-24'>Sor</button>
        </div>

    </>
  )
}

export default AiSupport