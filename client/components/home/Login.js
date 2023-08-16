'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSuccessToast = () => toast("Giriş Yapıldı Yönlendiriliyorsunuz");
const errToast = () => toast("Giriş bilgileri hatalı lütfen tekrar deneyiniz.");

const Login = () => {
  const router = useRouter();

  

  const dropToggle  = () => {
    document.getElementById('toogle').style.visibility="hidden";
    router.push('/')

  }


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = {
    email : email,
    password : password
  }

  const jsonUser = JSON.stringify(user)

  console.log(email)
  console.log(password)

  const login = async () => {
    
    const result = await fetch('http://localhost:5000/api/login', {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : jsonUser
    })

    const jsonData = await result.json()
    console.log(jsonData)

    if(jsonData.success) {
      router.push('/user/profile')
      const token = jsonData.data
      Cookies.set('jsonwebtoken', token, { expires: 7 })

      loginSuccessToast()
    }
    else{
      errToast()
      
    }

    


    
  }
  

  return (
    <>
  
      <div id='toogle' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 visible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Giriş Yapın</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg'  onClick={ () => dropToggle() } > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='email' className='text-gray-700 font-roboto mb-4 text-lg'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} id="email"  type='email' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto' required></input>

            <label htmlFor='password' className='text-gray-700 font-roboto mb-2 mt-5 text-lg'>Şifre</label>
            <input  onChange={(e) => setPassword(e.target.value)}  id="password" type='password' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto' required></input>

            <div className=' flex flex-col items-center justify-center'>
              <button type='submit' onClick={() => login()} className="bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24 ">Giriş Yap</button>

              <Link href="/user/login"><button className='text-sm p-3 text-blue-500 hover:font-medium font-light mt-4 '>Kayıt Ol</button></Link>
            </div>

          </div>

        </div>
      </div>

  
      
      <ToastContainer />

    </>
  )
}

export default Login