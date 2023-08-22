import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {useSelector} from 'react-redux'

const AddPostButton = () => {

  const userAdmin = useSelector((state) => state.admin.admins)
  const username = useSelector((state) => state.params.value)

  const [adminButton, setAdminButton] = useState()
 

  useEffect(() => {
    setAdminButton(userAdmin.data)

  },[userAdmin])



  console.log('adminutsdsa', adminButton)


  return (

    <>      


          {
            adminButton && adminButton.username === username ? (
              <Link href='/user/addPost' className='bg-green-600 hover:bg-green-700 p-3 rounded-lg text-sm text-white mb-8'>Paylaş</Link>

            )  : (
              <h1 className='text-3xl mb-8 font-roboto text-gray-600'>Paylaşımları</h1>

            )
          }




          




    </>
  )
}

export default AddPostButton