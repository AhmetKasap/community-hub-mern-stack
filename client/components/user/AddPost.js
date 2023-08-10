import React from 'react'

const AddPost = () => {
    return (
        <>
            <div className='flex flex-col '>
                <h1 className='text-center font-inter text-blue-700 mb-8 text-2xl'>Bir Şeyler Paylaş</h1>
                <textarea className='border-2 focus:border-gray-200 outline-none text-lg font-inter text-gray-900' />
                <div className='text-center'>
                    <button className='mt-4 bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white w-24'>Paylaş</button>
                </div>
            </div>

        </>
    )
}

export default AddPost