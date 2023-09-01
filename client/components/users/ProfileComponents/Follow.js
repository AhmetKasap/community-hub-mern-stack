'use client'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { follower } from '@/Redux/features/followSlice'
import { unfollow,addfollow } from '@/Redux/features/followSlice'

const Follow = () => {
  const username = useSelector((state) => state.params.value)

  const useFollow = useSelector((state) => state.follow.follow)
  const dispatch = useDispatch()

  const token = Cookies.get('jsonwebtoken')

  const [tokenUser, setTokenUser] = useState()
  useEffect(() => { 
    const api = async () => {
      const response = await fetch('http://localhost:5000/api/user/username', {
        method : 'POST',
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      const result = await response.json()
      setTokenUser(result.data)
    }
    api()

  },[])



  useEffect(() => {
    dispatch(follower(username))
  },[dispatch,username])

  const addFollow = async () => {
    //redux güncelleme
    dispatch(addfollow(tokenUser))


    //database güncelleme
    const api = await fetch('http://localhost:5000/api/user/follow', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}` 
      },
      body : JSON.stringify({username})
    })
    const response = await api.json()


  }

  const unFollow = async () => {

    //redux güncelleme
    dispatch(unfollow(tokenUser))

    //Database güncelleme
    const api = await fetch('http://localhost:5000/api/user/unfollow', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}` 
      },
      body : JSON.stringify({username})
    })
    const response = await api.json()


  }


  const [followButton, setFollowButton] = useState('')

  useEffect(() => {
    if(useFollow.data.follower.length>0) {
      useFollow.data.follower.map(result => {
        if(result === tokenUser) {
          setFollowButton(false)
        }
        else{
          setFollowButton(true)
        }
      })
      

      
    } else {
      setFollowButton(true)
    }


  },[useFollow,addFollow,unFollow])




  return (
    <>
        {
          followButton === true ? (
            <button onClick={() => addFollow()} className='bg-indigo-600 hover:bg-indigo-700 text-sm text-white rounded-lg p-2 '>Takip Et</button>

          ) : (
            <button onClick={() => unFollow()} className='bg-indigo-600 hover:bg-indigo-700 text-sm text-white rounded-lg p-2 '>Takipten Çık</button>

          )
        }


    </>
  )
}

export default Follow