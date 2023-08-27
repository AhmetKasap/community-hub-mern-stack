'use client'
import React, { useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import Profile from '@/components/users/Profile';
import Post from '@/components/users/Post';

import { setParams } from '@/Redux/features/paramsSlice';
import {useSelector, useDispatch} from 'react-redux'


const Page = ({ params }) => {


  const user = params.name;

  const userParams = useSelector((state) => state.params.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setParams(user))
  }, [user,dispatch ])

  


  return (
    <>
      <Navbar />
      
      
    
      <div className='flex flex-row w-3/4 mx-auto mt-8'>
        <div className='basis-1/4'>
          <Profile key={`profile-${userParams}`} />
        </div>
        <div className='basis-3/4'>
          <Post key={`post-${userParams}`} />
        </div>
    </div>


    </>
  );
};

export default Page;
