import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link';
import Cookies from 'js-cookie';


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

    
    console.log(post[0])
    

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
                                <FaUserAlt className='rounded-full w-12 h-12 m-2 text-blue-500'></FaUserAlt>
                                <h1 className='font-roboto text-gray-700'>Kullanıcı Ad</h1>
                                <h1 className='font-roboto text-gray-400 ml-3 '>@ User Name</h1>
                                <h1 className='font-roboto text-gray-400 font-light ml-3'> - tarih</h1>
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