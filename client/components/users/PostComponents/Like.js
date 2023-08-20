import React from 'react'
import {BiLike } from "react-icons/bi";

const Like = () => {
  return (
    <>

      <button className='flex flex-row mt-8'> 
        <BiLike className='text-xl text-black font-roboto'></BiLike>
        <span className='ml-2 font-roboto text-gray-900'>20</span>
      </button>


    </>
  )
}

export default Like