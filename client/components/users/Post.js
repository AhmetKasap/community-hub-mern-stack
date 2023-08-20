import React from 'react'
import AddPostButton from './PostComponents/AddPostButton'
import AllPosts from './PostComponents/AllPosts'

const Post = () => {
  return (
    <>  
        <div className='w-full h-auto flex flex-col items-center  '>
          <AddPostButton></AddPostButton>
          <AllPosts></AllPosts>
        </div>
    </>
  )
}

export default Post