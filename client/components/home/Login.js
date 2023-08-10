'use client'
import React from 'react'
import Link from 'next/link'


const Login = () => {
  const toogleButton = () => {
    document.getElementById('toogle').style.visibility="visible";
  }

  const dropToggle  = () => {
    document.getElementById('toogle').style.visibility="hidden";
  }

  return (
    <>
  
      <div id='toogle' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-1/2 w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Giriş Yapın</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg'  onClick={ () => dropToggle() } > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='email' className='text-gray-700 font-roboto mb-4 text-lg'>Email</label>
            <input id="email" type='email' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <label htmlFor='password' className='text-gray-700 font-roboto mb-2 mt-5 text-lg'>Şifre</label>
            <input id="password" type='password' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto'></input>

            <div className=' flex flex-col items-center justify-center'>
              <Link href="/user/login"><button className='bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24 '>Giriş Yap</button></Link>
              
              <Link href="/user/register" className="text-sm  text-blue-500 hover:font-medium font-light mt-4">Kayıt Ol</Link>
            </div>

          </div>

        </div>
      </div>
  
      <button className='bg-blue-700 hover:text-lg text-sm text-white p-3 rounded-xl ' onClick={ () => toogleButton() }>Giriş Yap</button>

    </>
  )
}

export default Login