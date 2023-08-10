'use client'
import React from 'react'
import Link from 'next/link';

const Register = () => {

  const toogleButton = () => {
    document.getElementById('toogle1').style.visibility="visible";
  }

  const dropToggle  = () => {
    document.getElementById('toogle1').style.visibility="hidden";
  }

  return (
    <>
      <div id='toogle1' className=' bg-slate-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Kayıt Olun</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg' onClick={() => dropToggle()} > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='name' className='text-gray-700 font-roboto mb-4 text-lg'>Ad</label>
            <input id="name" type='text' className='mb-4 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='lastname' className='text-gray-700 font-roboto mb-4 text-lg'>Soyad</label>
            <input id="lastname" type='text' className='mb-4 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='email' className='text-gray-700 font-roboto mb-4 text-lg'>Email</label>
            <input id="email" type='email' className='mb-2 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='password' className='text-gray-700 font-roboto mb-2 mt-5 text-lg'>Şifre</label>
            <input id="password" type='password' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <div className=' flex flex-col items-center justify-center'>
              <Link href="/user/login"><button className='bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24 '>Kayıt Ol</button></Link>

              <Link href="" className="text-sm  text-blue-500 hover:font-medium font-light mt-4">Giriş Yap</Link>
            </div>

          </div>

        </div>
      </div>

      <button className='bg-blue-700 hover:text-lg text-sm text-white p-3 rounded-xl ' onClick={() => toogleButton()}>Kayıt Ol</button>

    </>     
  )
}

export default Register