import React from 'react'
import {  FaRegComment } from "react-icons/fa";


const Comment = () => {
  return (
    <>
        <button className='flex flex-row ml-16 mt-8'>
            <FaRegComment className='text-xl font-roboto text-black'></FaRegComment>
            <span className='ml-2 font-roboto'>20</span>
        </button>
    </>
  )
}

export default Comment