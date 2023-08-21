'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { userInformation } from '@/Redux/features/userSlice'
import { useEffect,useState } from 'react'

const Avatar = () => {
  const toogleImage = () => {
    document.getElementById('togels').style.visibility = "visible";
    
  }

  const dropToogleImage = () => {
    document.getElementById('togels').style.visibility = "hidden";

  }



  const username = useSelector((state) => state.params.value)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userInfo.users)

  useEffect(() => {
    dispatch(userInformation(username))
  }, [username])


const [userInfos, setUserInfos] = useState()

useEffect(() => {
  setUserInfos(user.data)
},[user])


  return (
    <>  
      {
        userInfos ? (
          <button onClick={() => toogleImage()}>
            <Image src={"http://localhost:5000/uploads/"+userInfos.avatar} alt='avatar' width={100} height={100} className='rounded-full w-16 h-16 bg-red-300'></Image>
          </button>
        ) : ('')

      }
       

        <div id='togels' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between items-between '>
            <h1 className='text-3xl font-roboto text-gray-600 mt-8 mb-12 ml-4'> Fotoğrafı Güncelle </h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg w-24 h-12 mb-24 mt-6 mr-4' onClick={() => dropToogleImage()} > Kapat </button>
          </div>
       

          <input className='mx-auto block w-64 text-lg text-gray-900 border border-gray-300 h-8 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-indigo-700 dark:border-gray-600 dark:placeholder-gray-400' type='file' name='avatar' onChange={(e) =>setAvatar(e.target.files[0])}></input>
          <div className='text-center mt-8'>
            <button onClick={() => editAvatar()} className='text-sm bg-green-500 hover:bg-green-600 rounded-lg p-4 text-white mb-12'>Değişiklikleri Kaydet</button>

          </div>



        </div>

      </div>

    </>
  )
}

export default Avatar