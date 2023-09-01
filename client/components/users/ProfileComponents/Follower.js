import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { follower } from '@/Redux/features/followSlice'
import Link from 'next/link'

const Follower = () => {

  const dispatch = useDispatch()
  const username = useSelector((state) => state.params.value)
  const useFollow = useSelector((state) => state.follow.follow)



  useEffect(() => {
    dispatch(follower(username))
  }, [dispatch, username])


  const toogleButton = () => {
    document.getElementById('toogle').style.visibility = 'visible'
  }
  const dropToggle = () => {
    document.getElementById('toogle').style.visibility = 'hidden'

  }

  return (
    <>
      <h1 className='font-roboto mt-2 text-gray-500'>
        <button onClick={() => toogleButton()}>
          Takipçi
        </button>
        <span className='font-roboto text-black font-medium ml-3'>
          {
            useFollow.data.follower.length
          }
        </span>
      </h1>


      <div id='toogle' className='invisible bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  fixed inset-0 flex flex-row items-center justify-center rouned-lg'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Takipçi</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg' onClick={() => dropToggle()} > Kapat </button>
          </div>

          {
            useFollow.data.follower.map(result => {
              return (
                <div className='flex flex-col'>
                  <Link href={'/user/' + result} className='ml-8 m-3'> {result} </Link>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Follower