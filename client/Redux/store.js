'use client'
import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './features/userInfoSlice'
import paramsSlice from './features/paramsSlice'
import userSlice from './features/userSlice'
import postSlice from './features/postSlice'

export const store = configureStore({
  reducer: {
    user : userInfoSlice,
    params : paramsSlice,
    userInfo : userSlice,
    post : postSlice

  },
})