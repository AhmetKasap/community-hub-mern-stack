'use client'
import React from 'react'
import EditProfile from './ProfileComponents/EditProfile'
import Avatar from './ProfileComponents/Avatar'
import UserInfo from './ProfileComponents/UserInfo'
import Follow from './ProfileComponents/Follow'
import Followed from './ProfileComponents/Followed'
import Follower from './ProfileComponents/Follower'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'


const Profile = () => {

  const userParams = useSelector((state) => state.params.value)

  useEffect(() => {
    
  }, [userParams ])


  return (
    <>
        <div className='w-96 h-96 border rounded-lg mb-12'>

            <div className='flex flex-row justify-between m-6'>
                <Avatar></Avatar>
                <EditProfile></EditProfile>
            </div>

            <UserInfo></UserInfo>
            
            <div className='flex flex-row justify-between m-6'>
                <Followed></Followed>
                <Follower></Follower>
                <Follow></Follow>
            </div>

        </div>

    </>
  )
}

export default Profile