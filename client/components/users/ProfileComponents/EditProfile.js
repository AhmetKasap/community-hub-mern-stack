import Cookies from 'js-cookie';
import React from 'react'

const EditProfile = () => {
    const toogleButton = () => {
        document.getElementById('togg').style.visibility = "visible";
      }
    
      const dropToggle = () => {
        document.getElementById('togg').style.visibility = "hidden";
      } 


  return (
    <>
        
        <button onClick={() => toogleButton()} className='bg-blue-600 hover:bg-blue-700 text-white text-sm p-3 rounded-lg h-12 mt-2'>Profili Düzenle</button>


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


    </>
  )
}

export default EditProfile