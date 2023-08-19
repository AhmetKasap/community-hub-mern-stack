'use client'
import React, { useEffect, useState } from 'react'
import {  FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '@/Redux/features/userInfoSlice';
import Image from 'next/image';


const Posts = () => {
    const token = Cookies.get('jsonwebtoken')

    const [post,setPost] = useState([{_id: 'ss', title: 's', content: 's', userRef: 's', __v: 0}])

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch('http://localhost:5000/api/user/profile/post', {
                method:'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            const result = await response.json()
            setPost(result.data)
        }
        getPost()
    },[])

    
    const userInfo = useSelector((state) => state.user.usersInfo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo())
    },[dispatch])

    const [userData, setUserData] = useState({})
    useEffect(() => {
        if (userInfo.data) {
            setUserData(userInfo.data);
        }
    }, [userInfo]);
    
    console.log(userData.name);
    

    

    return (
        <>

       



            <div className='flex flex-col '>
                <h1 className='text-center font-inter text-gray-700 mb-8 text-2xl'>Paylaşımlar</h1>
                {
            post.length > 0 ? (
                post.map((posts,index) => {
                    return(
                        <div className=' w-3/4 mx-auto h-auto border-2 rounded-xl mb-8'>
                    <div className=' w-5/6 mx-auto mt-5 mb-5'>
                        
                        <div className='flex flex-row items-center justify-between '>
                            <div className='flex flex-row items-center'>
                                <Image className='rounded-full w-16 h-16 mr-3' width={100} height={100} src={'http://localhost:5000/uploads/'+userData.avatar}/> 
                                <h1 className='font-roboto text-gray-700'>{userData.name} {userData.lastname} </h1>
                                <h1 className='font-roboto text-gray-400 ml-3 '>@ {userData.username}</h1>
                                <h1 className='font-roboto text-gray-400 font-light ml-3'>{userData.createdAt} </h1>
                            </div>
                            <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                        </div>

                        <Link href="/detay" >
                            <div className='mt-5 mb-5'>
                                <p key={index} className='font-opsenSans '>
                                    {posts.content}
                                </p>

                               
                            </div>
                        </Link>

                        <hr></hr>
                        <div className='mt-4 flex flex-row gap-24'>
                            <Link href='/' className='flex flex-row items-center focus:text-red-500'>
                                <BiLike className='text-xl'></BiLike>
                                <span className='ml-3 font-rem'>0</span>
                            </Link>

                            <Link href="/" className='flex flex-row items-center focus:text-blue-500'>
                                <FaRegComment className='text-xl'></FaRegComment>
                                <span className='ml-3 font-rem'>0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                    )
                    
                    
                })
            ) : ('post yok')
        }
                
            </div>


        </>
    )
}

export default Posts