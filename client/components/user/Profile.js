'use client'
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '@/Redux/features/userInfoSlice';
import {setReduxAvatar,setReduxName,setReduxLastName,setReduxUserName,setReduxExplanation} from '@/Redux/features/userInfoSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const editProfileSuccess = () => toast("Güncelleme Başarılı");


const Profile = () => {

  const toogleButton = () => {
    document.getElementById('togg').style.visibility = "visible";
  }

  const dropToggle = () => {
    document.getElementById('togg').style.visibility = "hidden";
  } 


  const toogleImage = () => {
    document.getElementById('togels').style.visibility = "visible";
  }

  const dropToogleImage = () => {
    document.getElementById('togels').style.visibility = "hidden";

  }


 const token = Cookies.get('jsonwebtoken')


  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [explanation, setExplanation] = useState('')
  const [avatar,setAvatar] = useState('')



  const userInfo = useSelector((state) => state.user.usersInfo)
  console.log('state : ', userInfo)
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



  const userProfileEdit = {
    name,lastname,username,explanation
  }
  const jsonData = JSON.stringify(userProfileEdit)

  const editProfile = async () => {
    //! Redux update
    if(name) {
      dispatch(setReduxName(name))
    }
  
    if(lastname) {
      dispatch(setReduxLastName(lastname))
    }
  
    if(username) {
      dispatch(setReduxUserName(username))
    }
  
    if(explanation) {
      dispatch(setReduxExplanation(explanation))
    }




    //! database update
    const response = await fetch('http://localhost:5000/api/user/profile-edit', {
      method : 'POST',
      headers : {
        Authorization : `Bearer ${token}`,
        'Content-Type' : 'application/json'
      },
      
      body : jsonData
    })

    
    const data = await response.json()
    if(data.success) {
      editProfileSuccess()
      document.getElementById('togg').style.visibility = "hidden";
    }
  }


  const editAvatar = async  () => {

    const formData = new FormData()
    formData.append('image', avatar)
    
    //! update redux
    
    if(formData) {
      dispatch(setReduxAvatar(formData))
    }

    //! update database

    const response = await fetch('http://localhost:5000/api/user/profile-edit-avatar', {
      method : 'POST',
      headers : {
        Authorization : `Bearer ${token}`,
      },
      
      body : formData
    })
    const data = await response.json()
    if(data.success) {
      editProfileSuccess()
      document.getElementById('togels').style.visibility = 'hidden'
    }
  }
                    


  return (
    <>
    
    {
        userData !== null ? (
            <div className='basis-1/4 border-2 rounded-xl h-96 mt-16'>
              <div className='flex flex-row justify-between m-8 items-center'>
                <button onClick={toogleImage}>
                <Image alt='avatar' src={"http://localhost:5000/uploads/"+userData.avatar} width={100} height={100} className='rounded-full w-16 h-16'></Image>

                </button>
                 <button onClick={() => toogleButton()} className='bg-blue-500 hover:bg-blue-600 text-white text-sm p-3 rounded-lg '>Profili Düzenle</button>
              </div>
              <div className='flex flex-col m-8'>
                <h1 className='font-roboto mb-3'> {userData.name} {userData.lastname} </h1>
                <h1 className='font-roboto text-gray-500 mb-3'>
                  @{userData.username}
                  </h1>
                <h1 className='font-roboto text-gray-500 '>{userData.explanation}</h1>
              </div>
              <hr></hr>
              <div className='m-8 mt-8 flex flex-row gap-12'>
                <Link href="/">
                  <span className='font-roboto mr-2 text-black'>20</span>
                  <span className="font-roboto text-gray-500">Takip Edilen</span>
                </Link>

                <Link href="/">
                  <span className='font-roboto mr-2 text-black'>20</span>
                  <span className="font-roboto text-gray-500">Takipçi</span>
                </Link>
              </div>
            </div>
        ) : ("s")
      }

   
      



      <ToastContainer></ToastContainer>


      <div className='text-center'>
        <Link href='/user/addPost'><button className='mt-4 bg-green-500 hover:bg-green-600 p-3 rounded-xl text-white w-32'>Paylaşım Yap</button></Link>
      </div>





      <div id='togg' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Profil Düzenle</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg' onClick={() => dropToggle()} > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='name' className='text-gray-700 font-roboto mb-4 text-lg'>Ad </label>
            <input onChange={(e) => setName(e.target.value)} id="name" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='lastname' className='text-gray-700 font-roboto mb-4 text-lg mt-3'>Soyad </label>
            <input onChange={(e) => setLastName(e.target.value)} id="lastname" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='username' className='text-gray-700 font-roboto mb-4 text-lg mt-4'>Kullanıcı Adı</label>
            <input onChange={(e) => setUsername(e.target.value)} id="username" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='text' className='text-gray-700 font-roboto mb-4 text-lg mt-4'>Açıklama</label>
            <input onChange={(e) => setExplanation(e.target.value)} id="text" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>




            <div className=' flex flex-col items-center justify-center'>
              <button onClick={() => editProfile()} className='bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24'>Kaydet</button>

            </div>

          </div>

        </div>
      </div>






      <div id='togels' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between items-between '>
            <h1 className='text-3xl font-roboto text-gray-600 mt-8 mb-12 ml-4'> Fotoğrafı Güncelle </h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg w-24 h-12 mb-24 mt-6 mr-4' onClick={() => dropToogleImage()} > Kapat </button>
          </div>
       

          <input className='mx-auto block w-64 text-lg text-gray-900 border border-gray-300 h-8 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-indigo-700 dark:border-gray-600 dark:placeholder-gray-400' type='file' name='avatar' onChange={(e) =>setAvatar(e.target.files[0])}></input>
          <div className='text-center mt-8'>
            <button onClick={() => editAvatar()} className='text-sm bg-green-500 hover:bg-green-600 rounded-lg p-4 text-white mb-12'>Değişiklikleri Kaydet</button>

          </div>



        </div>

      </div>







    </>
  )
}

export default Profile



/*
 
*/