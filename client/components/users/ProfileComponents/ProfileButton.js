import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { admin } from '@/Redux/features/adminSlice';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation"



const ProfileButton = () => {

  const router= useRouter()


  const adminData = useSelector((state) => state.admin.admins)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(admin())
  }, [dispatch])


  const [adminProfileButton, setAdminProfileButton] = useState()
  useEffect(() => {

    setAdminProfileButton(adminData.data)
  }, [adminData])



  const logOut = async() => {
    Cookies.remove('jsonwebtoken')

    router.push('/')


  }


  return (
    <>

      {
        adminProfileButton ? (
          <>
            <Link href={`/user/${adminProfileButton.username}`}>
              <button className='bg-cyan-600 hover:bg-cyan-700 p-2 rounded-full  flex flex-row items-center justify-center gap-2'>
                <FaUserAlt className='text-xl text-white'></FaUserAlt>
                <span className='text-white font-rem'>Profil</span>
              </button>
            </Link>
            
              <button onClick={() => logOut()} className='bg-cyan-600 hover:bg-cyan-700 p-2 rounded-full  flex flex-row items-center justify-center gap-2'>
                <FaUserAlt className='text-xl text-white'></FaUserAlt>
                <span className='text-white font-rem'>Çıkış Yap</span>
              </button>
        
          </>
        ) : (null)
      }





    </>
  )
}

export default ProfileButton