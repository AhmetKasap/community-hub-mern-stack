'use client'
import Navbar from '@/components/home/Navbar'
import React, { useEffect, useState } from 'react'
import LeftNavbar from '@/components/home/LeftNavbar'
import RightNavbar from '@/components/home/RightNavbar'
import { FaUserAlt, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image'

const page = ({ params }) => {
    //<p> {params.name} </p>


    const categories = params.name
    console.log(categories)
    console.log(params.name)





    const [allPost, setAllPost] = useState()


    useEffect(() => {

        const api = async () => {
            const response = await fetch('http://localhost:5000/api/categories/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categories })
            })

            const posts = await response.json()
            console.log(posts)
            setAllPost(posts.data)
        }

        api()

    }, [categories])





    console.log('postlar geldi ', allPost)






    return (
        <>






            <Navbar></Navbar>

            <div className="flex flex-row mt-12 w-11/12 mx-auto ">
                <div className="basis-1/6">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="basis-4/6">


                    {
                        allPost ? (
                            allPost.map(data => {
                                return (
                                    <>

                                        <div className=' w-3/4 mx-auto h-auto border-2 rounded-xl mb-8'>
                                            <div className=' w-5/6 mx-auto mt-5 mb-5'>
                                                <div className='flex flex-row items-center justify-between '>
                                                    <Link href={"/user/"+data.userRef.username}>
                                                        <div className='flex flex-row items-center'>
                                                            <Image src={"http://localhost:5000/uploads/"+data.userRef.avatar} alt='avatar' width={100} height={100} className='rounded-full w-16 h-16 mr-4'></Image>
                                                            <h1 className='font-roboto text-gray-700'>{data.userRef.name}  {data.userRef.lastname}</h1>
                                                            <h1 className='font-roboto text-gray-400 ml-3 '>{data.userRef.username}</h1>
                                                            <h1 className='font-roboto text-gray-400 font-light ml-3'> {data.createdAt} </h1>
                                                        </div>
                                                    </Link>
                                                   
                                                    <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                                                </div>

                                                <Link href={"/details/"+data._id} >
                                                    <div className='mt-5 mb-5'>
                                                        <p className='font-opsenSans '>
                                                            <p> {data.content} </p>
                                                        </p>


                                                    </div>
                                                </Link>

                                                <hr></hr>
                                                <div className='mt-4 flex flex-row gap-24'>
                                                    <Link href='/' className='flex flex-row items-center focus:text-red-500'>
                                                        <BiLike className='text-xl'></BiLike>
                                                        <span className='ml-3 font-rem'>0</span>
                                                    </Link>

                                                    <Link href={"/details/"+data._id}  className='flex flex-row items-center focus:text-blue-500'>
                                                        <FaRegComment className='text-xl'></FaRegComment>
                                                        <span className='ml-3 font-rem'>0</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>





                                     

                                    </>

                                )



                            })

                        ) : (null)
                    }















                </div>
                <div className="basis-1/6">
                    <RightNavbar></RightNavbar>
                </div>



            </div>




        </>
    )
}

export default page