'use client'

import Navbar from '@/components/home/Navbar'
import React, { useEffect, useState } from 'react'
import LeftNavbar from '@/components/home/LeftNavbar'
import RightNavbar from '@/components/home/RightNavbar'

import { FaUserAlt, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link'
import Image from 'next/image'

const page = ({ params }) => {



    const postId = params.id

    const [postDetail, setPostDetail] = useState()

    useEffect(() => {

        const api = async () => {
            const response = await fetch('http://localhost:5000/api/post/details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postId })
            })
            const posts = await response.json()
            setPostDetail(posts.data)
        }

        api()

    }, [postId])


    console.log(postDetail)

    return (
        <>
            <Navbar></Navbar>



            <div className="flex flex-row mt-12 w-11/12 mx-auto ">
                <div className="basis-1/6">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="basis-4/6">
                    {
                        postDetail ? (

                            <>
                                <div className=' w-3/4 mx-auto h-auto border-2 rounded-xl mb-8'>
                                    <div className=' w-5/6 mx-auto mt-5 mb-5'>
                                        <div className='flex flex-row items-center justify-between '>
                                            <div className='flex flex-row items-center'>
                                                <Image src={"http://localhost:5000/uploads/" + postDetail.userRef.avatar} alt='avatar' width={100} height={100} className='rounded-full w-16 h-16 mr-4'></Image>
                                                <h1 className='font-roboto text-gray-700'>{postDetail.userRef.name} {postDetail.userRef.lastname}  </h1>
                                                <h1 className='font-roboto text-gray-400 ml-3 '>@ {postDetail.userRef.username} </h1>
                                                <h1 className='font-roboto text-gray-400 font-light ml-3'> {postDetail.createdAt} </h1>
                                            </div>
                                            <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                                        </div>

                                        <Link href="/detay" >
                                            <div className='mt-5 mb-5'>
                                                <p className='font-opsenSans '>
                                                    {postDetail.content}
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
                            </>
                        ) :
                            (null)
                    }

                    <div className='w-3/4 mx-auto text-center mt-12 mb-12 flex flex-col border-2'>
                        <textarea placeholder='Yanıtla' type='text' className='w-1/2 outline-none text-xl resize-none mx-auto '  cols={4} rows={4}/>
                    </div>

                        

                    
                    

                    <div className=' w-3/4 mx-auto h-auto border-2  '>
                        <div className=' w-5/6 mx-auto '>
                            <div className='flex flex-row items-center justify-between '>
                                <div className='flex flex-row items-center'>
                                    <FaUserAlt className='rounded-full w-12 h-12 m-2 text-blue-500'></FaUserAlt>
                                    <h1 className='font-roboto text-gray-700'>Kullanıcı Ad</h1>
                                    <h1 className='font-roboto text-gray-400 ml-3 '>@ User Name</h1>
                                    <h1 className='font-roboto text-gray-400 font-light ml-3'> - tarih</h1>
                                </div>
                                <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                            </div>

                            <Link href="/detay" >
                                <div className='mt-5 mb-5'>
                                    <p className='font-opsenSans '>
                                        YORUMLAR
                                    </p>


                                </div>
                            </Link>

                            <hr></hr>

                        </div>
                    </div>
                    <div className=' w-3/4 mx-auto h-auto border-2  '>
                        <div className=' w-5/6 mx-auto '>
                            <div className='flex flex-row items-center justify-between '>
                                <div className='flex flex-row items-center'>
                                    <FaUserAlt className='rounded-full w-12 h-12 m-2 text-blue-500'></FaUserAlt>
                                    <h1 className='font-roboto text-gray-700'>Kullanıcı Ad</h1>
                                    <h1 className='font-roboto text-gray-400 ml-3 '>@ User Name</h1>
                                    <h1 className='font-roboto text-gray-400 font-light ml-3'> - tarih</h1>
                                </div>
                                <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                            </div>

                            <Link href="/detay" >
                                <div className='mt-5 mb-5'>
                                    <p className='font-opsenSans '>
                                        YORUMLAR
                                    </p>


                                </div>
                            </Link>

                            <hr></hr>

                        </div>
                    </div>
                    <div className=' w-3/4 mx-auto h-auto border-2  '>
                        <div className=' w-5/6 mx-auto '>
                            <div className='flex flex-row items-center justify-between '>
                                <div className='flex flex-row items-center'>
                                    <FaUserAlt className='rounded-full w-12 h-12 m-2 text-blue-500'></FaUserAlt>
                                    <h1 className='font-roboto text-gray-700'>Kullanıcı Ad</h1>
                                    <h1 className='font-roboto text-gray-400 ml-3 '>@ User Name</h1>
                                    <h1 className='font-roboto text-gray-400 font-light ml-3'> - tarih</h1>
                                </div>
                                <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                            </div>

                            <Link href="/detay" >
                                <div className='mt-5 mb-5'>
                                    <p className='font-opsenSans '>
                                        YORUMLAR
                                    </p>


                                </div>
                            </Link>

                            <hr></hr>

                        </div>
                    </div>
                   






                </div>

                <div className="basis-1/6">
                    <RightNavbar></RightNavbar>
                </div>
            </div>
        </>
    )
}

export default page