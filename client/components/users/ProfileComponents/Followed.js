import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const Followed = () => {

  const username = useSelector((state) => state.params.value)

  const [followed, setFollowed] = useState()

  useEffect(() => {
    const api = async () => {
      const response = await fetch('http://localhost:5000/api/user/myfollowed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      })

      const result = await response.json()
      setFollowed(result)
    }

    api()

  }, [username])

  console.log(followed)

  const toogleButton = () => {
    document.getElementById('toogles').style.visibility = 'visible'
  }
  const dropToggle = () => {
    document.getElementById('toogles').style.visibility = 'hidden'

  }

  return (
    <>
      <h1 className='font-roboto mt-2 text-gray-500'>
        <button onClick={() => toogleButton()}>
          Takip Edilen
        </button>
        <span className='font-roboto text-black font-medium ml-3'>
          {
            followed && followed.data.follows ? (
              followed.data.follows.length
            ) : (0)
          }
        </span>
      </h1>


      <div id='toogles' className='invisible bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  fixed inset-0 flex flex-row items-center justify-center rouned-lg'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Takip Edilen</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg' onClick={() => dropToggle()} > Kapat </button>
          </div>

          {
             followed && followed.data.follows ? (
              followed.data.follows.map(result => {
                return (
                  <div className='flex flex-col'>
                    <Link href={'/user/' + result} className='ml-8 m-3'> {result} </Link>
                  </div>
                )
              })
             ) : (null)
           
          }
        </div>
      </div>
    </>
  )
}

export default Followed