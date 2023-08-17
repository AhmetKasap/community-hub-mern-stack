import AddPost from '@/components/user/AddPost'
import AiSupport from '../../../components/user/AiSupport'

import React from 'react'

const page = () => {
  return (
    <>  
        <div className='w-1/3 mx-auto text-center mb-2'>
            <AddPost></AddPost>
            <AiSupport></AiSupport>
        </div>
       
    </>
  )
}

export default page