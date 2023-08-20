import React from 'react'

const AddPost = () => {
  return (
    <>
        <div className='flex flex-col '>
                <label htmlFor='title' className='font-roboto mt-8 text-2xl'>Başlık</label>
                <input  id='title' className='h-12 font-roboto text-lg w-full border-2 rounded-lg text-gray-700 border-gray-300 focus:border-gray-400 outline-none mt-4' placeholder='zorunlu değil...'></input>
                
                <label htmlFor='text' className='font-roboto mt-8 text-2xl'>İçerik</label>
                <textarea id='text'  className='font-roboto text-lg w-full border-2 rounded-lg text-gray-700 border-gray-300 focus:border-gray-400 outline-none mt-4' rows={8} cols={8}></textarea>

                <div className='text-center'>
                    <button className='mt-4 mb-5 bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white w-24' >Paylaş</button>
                </div>
        </div>
    </>
  )
}

export default AddPost