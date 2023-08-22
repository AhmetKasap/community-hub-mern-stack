
import React, { useEffect, useState } from 'react'
import { FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';
import Like from './Like';
import Comment from './Comment';
import { useSelector, useDispatch } from 'react-redux'
import { userPosts } from '@/Redux/features/postSlice';
import { userInformation } from '@/Redux/features/userSlice';
import { admin } from '@/Redux/features/adminSlice';





const AllPosts = () => {

    //!url de ki username e göre post verileri
    const username = useSelector((state) => state.params.value)
    const userPost = useSelector((state) => state.post.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userPosts(username))
    }, [username])

    const [post, setPost] = useState()

    useEffect(() => {
        setPost(userPost.data)
    }, [userPost])





     //!url de ki username e göre kullanıcı verileri
    const user = useSelector((state) => state.userInfo.users)
    useEffect(() => {
        dispatch(userInformation(username))
    }, [username])


    const [userInfos, setUserInfos] = useState()

    useEffect(() => {
        setUserInfos(user.data)
    }, [user])


     //!kullanıcı admin ise kullanıcı verileri

    const [userAdminInfos, setUserAdminInfos] = useState('')
    const userAdmin = useSelector((state) => state.admin.admins)
    useEffect(() => {
    dispatch(admin())
    }, [dispatch])

    useEffect(() => {
    setUserAdminInfos(userAdmin.data)
    }, [userAdmin])


    //!kullanıcı admin ise avatar ı 

    const userAvatar = useSelector((state) => state.adminAvatar.avatars)

    const [getReduxAvatar, setGetReduxAvatar] = useState()
    useEffect(() => {
        if(userAvatar) {
        setGetReduxAvatar(userAvatar.data)
        }
        
    },[userAvatar])



   
    


    return (
        <>

            {
                post ? ( 
                    
                    post.map(response => {
                        return(
                            <div className=' w-3/4 mx-auto h-auto border-2 rounded-xl mb-8'>
                        <div className=' w-5/6 mx-auto mt-5 mb-5'>

                            <div className='flex flex-row items-center justify-between '>
                                <div className='flex flex-row items-center'>
                                {
                                getReduxAvatar && getReduxAvatar.username === username  ? (
                                    <Image src={"http://localhost:5000/uploads/"+getReduxAvatar.avatar} alt='avatar' width={100} height={100} className='rounded-full w-16 h-16 mr-4'></Image>
                                    ) :  userInfos ? (
                                        <Image src={"http://localhost:5000/uploads/"+userInfos.avatar} alt='avatar' width={100} height={100} className='rounded-full w-16 h-16 mr-4'></Image>

                                    )  : (null)

                                }

                                    {
                                        userAdminInfos && userAdminInfos.username === username ? (
                                            <div className='flex flex-row items-center ml-4'> 
                                                <h1 className='font-roboto text-gray-700'>{userAdminInfos.name} {userAdminInfos.lastname} </h1>
                                                <h1 className='font-roboto text-gray-400 ml-3 '>@ {userAdminInfos.username}</h1>
                                                <h1 className='font-roboto text-gray-400 font-light ml-3'>{response.createdAt} </h1>
                                            </div>
                                        ) : userInfos ? (
                                            <div className='flex flex-row items-center ml-4'>
                                                <h1 className='font-roboto text-gray-700'>{userInfos.name} {userInfos.lastname} </h1>
                                                <h1 className='font-roboto text-gray-400 ml-3 '>@ {userInfos.username}</h1>
                                                <h1 className='font-roboto text-gray-400 font-light ml-3'>{response.createdAt} </h1>
                                            </div>
                                        ) : ''
                                    }

                                  
                                </div>
                                <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                            </div>

                            <Link href="/detay" >
                                <div className='mt-5 mb-5'>
                                    <p className='font-opsenSans '>
                                        {response.content}

                                    </p>


                                </div>
                            </Link>

                            <hr></hr>

                            <div className='flex flex-row'>
                                <Like></Like>
                                <Comment></Comment>
                            </div>

                        </div>
                    </div>
                        )
                        
                    })
                    
                   
                ) : ('')
            }


        </>
    )
}

export default AllPosts




 