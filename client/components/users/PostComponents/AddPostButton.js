import React from 'react'
import Link from 'next/link'

const AddPostButton = () => {
  return (
    <>

        <Link href='/user/addPost' className='bg-green-600 hover:bg-green-700 p-3 rounded-lg text-sm text-white mb-8'>Paylaş</Link>

    </>
  )
}

export default AddPostButton