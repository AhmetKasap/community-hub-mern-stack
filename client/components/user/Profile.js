'use client'
import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';

const Profile = () => {
    const toogleButton = () => {
        document.getElementById('togg').style.visibility="visible";
      }
    
      const dropToggle  = () => {
        document.getElementById('togg').style.visibility="hidden";
      }


  return (
    <>
        <div className='basis-1/4 border-2 rounded-xl h-96 '>
                    <div className='flex flex-row justify-between m-8 items-center'>
                        <FaUserAlt className='text-3xl text-blue-500'></FaUserAlt>
                        <button onClick={ () => toogleButton() } className='bg-blue-500 hover:bg-blue-600 text-white text-sm p-3 rounded-lg '>Profili Düzenle</button>
                    </div>
                    <div className='flex flex-col m-8'>
                        <h1 className='font-roboto mb-3'>Kullanıcı Adı </h1>
                        <h1 className='font-sans mb-3'>@User Name </h1>
                        <h1 className='font-roboto'>Kullanıcı Açıklaması</h1>
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

        <div className='text-center'>
            <button  className='mt-4 bg-green-500 hover:bg-green-600 p-3 rounded-xl text-white w-32'>Paylaşım Yap</button>
        </div>





        <div id='togg' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-1/2 w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Profil Düzenle</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg'  onClick={ () => dropToggle() } > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='name' className='text-gray-700 font-roboto mb-4 text-lg'>Ad Soyad</label>
            <input id="name" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='username' className='text-gray-700 font-roboto mb-4 text-lg mt-4'>Kullanıcı Adı</label>
            <input id="username" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='text' className='text-gray-700 font-roboto mb-4 text-lg mt-4'>Açıklama</label>
            <input id="text" type='text' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

           

            <div className=' flex flex-col items-center justify-center'>
              <Link href="/user/login"><button className='bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24 '>Kaydet</button></Link>
              
            </div>

          </div>

        </div>
      </div>

    
  





    </>
  )
}

export default Profile