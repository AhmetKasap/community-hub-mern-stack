import React from 'react'

const aiSupport = () => {
  return (
    <div>
        <hr className='text-2xl font-roboto text-black h-8'></hr>
        <div className='text-center mt-8'>
            <h1 className='text-3xl font-roboto'>Yapay Zekadan Destek Al</h1>
            <textarea className='text-lg w-full border-2 rounded-lg border-gray-300 text-gray-700 font-roboto focus:border-gray-400 outline-none mt-4' rows={8} cols={8}></textarea>
            <button className='mt-4 bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white w-24'>Sor</button>
        </div>
        
    </div>
  )
}

export default aiSupport