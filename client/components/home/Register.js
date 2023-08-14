'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Login from './Login';

const Register = () => {

  const router = useRouter()

 

const registerSuccessToast = () => toast("Kayıt işlemi başarılı, giriş yapabilirsiniz.");
const errToast = () => toast("Kayıt işlemi başarısız,tekrar deneyin. nedeni olabilir : ", );

  const toogleButton = () => {
    document.getElementById('toogle1').style.visibility="visible";
  }

  const dropToggle  = () => {
    document.getElementById('toogle1').style.visibility="hidden";
  }


  const [name , setName] = useState('')
  const [lastname , setLastname] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const userData = {
    name,
    lastname,
    email,
    password
  }
  const jsonData =  JSON.stringify(userData)


  const register = async () => {
    

    const user = await fetch('http://localhost:5000/api/register',{
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : jsonData
    })


    const userReturn = await user.json()
    console.log(userReturn)

    if(userReturn.success) {
      registerSuccessToast()
      router.push('/')
    }else{
      errToast()
    }

    

  }





  return (
    <>
      <div id='toogle1' className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 invisible fixed inset-0 flex flex-row items-center justify-center'>
        <div className='bg-white h-auto w-1/4 '>

          <div className='flex flex-row justify-between m-8 mt-12'>
            <h1 className='font-roboto text-2xl text-gray-700'>Kayıt Olun</h1>
            <button className='text-sm text-white font-roboto bg-gray-700 hover:bg-black p-3 rounded-lg' onClick={() => dropToggle()} > Kapat </button>
          </div>

          <div className='flex flex-col mt-8 m-8'>
            <label htmlFor='name' className='text-gray-700 font-roboto mb-4 text-lg'>Ad</label>
            <input onChange={(e) => setName(e.target.value)} id="name" type='text' className='mb-4 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto text-gray-500'></input>

            <label htmlFor='lastname' className='text-gray-700 font-roboto mb-4 text-lg'>Soyad</label>
            <input onChange={(e) => setLastname(e.target.value)} id="lastname" type='text' className='mb-4 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto text-gray-500'></input>

            <label htmlFor='email' className='text-gray-700 font-roboto mb-4 text-lg'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} id="email" type='email' className='mb-2 h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto text-gray-500'></input>

            <label htmlFor='password' className='text-gray-700 font-roboto mb-2 mt-5 text-lg'>Şifre</label>
            <input onChange={(e) => setPassword(e.target.value)} id="password" type='password' className='h-10 border-2 border-gray-200 focus:border-4 outline-none rounded-lg bg-slate-50  font-roboto text-gray-500'></input>

            <div className=' flex flex-col items-center justify-center'>
              <button  onClick={() => register()} className='bg-blue-700 hover:bg-blue-800 text-sm text-white p-3 rounded-lg mt-8 w-24 '>Kayıt Ol</button>


              <Link href="" className="text-sm  text-blue-500 hover:font-medium font-light mt-4">Giriş Yap</Link>
            </div>

          </div>

        </div>
      </div>

      <button className='bg-blue-700 hover:text-lg text-sm text-white p-3 rounded-xl ' onClick={() => toogleButton()}>Kayıt Ol</button>
      <ToastContainer></ToastContainer>
    </>     
  )
}

export default Register