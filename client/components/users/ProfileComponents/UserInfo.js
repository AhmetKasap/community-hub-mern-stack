import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userInformation } from '@/Redux/features/userSlice'
import { admin } from '@/Redux/features/adminSlice'
import Cookies from 'js-cookie'


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
  }, [user])





  const [userAdminInfos, setUserAdminInfos] = useState('')

  const userAdmin = useSelector((state) => state.admin.admins)
  useEffect(() => {
    dispatch(admin())
  }, [dispatch])

  useEffect(() => {
    setUserAdminInfos(userAdmin.data)
  }, [userAdmin])






  return (


    <>




      {
        userAdminInfos && userAdminInfos.username === username ? (
            <div>
              <div className='m-4 mt-8'>
                <h1 className='font-roboto '> {userAdminInfos.name} {userAdminInfos.lastname}</h1>
                <h1 className='font-roboto text-gray-500 mt-2'> @ {userAdminInfos.username} </h1>
                <h1 className='font-roboto text-gray-500 mt-2 mb-6'> {userAdminInfos.explanation} </h1>
              </div>
              <hr></hr>

            </div>

          
         
        ) : userInfos ? (
          <div>
            <div className='m-4 mt-8'>
              <h1 className='font-roboto '> {userInfos.name} {userInfos.lastname}</h1>
              <h1 className='font-roboto text-gray-500 mt-2'> @ {userInfos.username} </h1>
              <h1 className='font-roboto text-gray-500 mt-2 mb-6'> {userInfos.explanation} </h1>
            </div>
            <hr></hr>

          </div>

        ) : ('')
      }




    </>
  )
}

export default UserInfo