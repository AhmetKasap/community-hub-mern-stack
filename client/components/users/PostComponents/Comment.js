'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {  FaRegComment } from "react-icons/fa";


const Comment = (props) => {

  const postId = props.posts
  console.log('postId', typeof(postId))

 



  return (
    <>
        <button className='flex flex-row ml-16 mt-8'>
            <Link href={"/details/"+postId}>
              <FaRegComment className='text-xl font-roboto text-black'></FaRegComment>

            </Link>
            <span className='ml-2 font-roboto'>
         
              
            </span>
        </button>
    </>
  )
}

export default Comment