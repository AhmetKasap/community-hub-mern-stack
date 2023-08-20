import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userInformation } from '@/Redux/features/userSlice'

const UserInfo = () => {

  const username = useSelector((state) => state.params.value)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userInfo.users)

  useEffect(() => {
    dispatch(userInformation(username))
  }, [username])


const [userInfos, setUserInfos] = useState()

useEffect(() => {
  setUserInfos(user.data)
},[user])



  return (


    <>

      {
          userInfos ? (
          <div>
            <div className='m-4 mt-8'>
              <h1 className='font-roboto '> {userInfos.name} {userInfos.name}</h1>
              <h1 className='font-roboto text-gray-500 mt-2'> @ {userInfos.username} </h1>
              <h1 className='font-roboto text-gray-500 mt-2 mb-6'> {userInfos.explanation} </h1>
            </div>
            <hr></hr>

          </div>


        ) : ('kullanıcı bulunamadı')
      }




    </>
  )
}

export default UserInfo