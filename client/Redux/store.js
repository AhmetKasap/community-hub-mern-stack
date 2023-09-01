'use client'
import { configureStore } from '@reduxjs/toolkit'
import paramsSlice from './features/paramsSlice'
import userSlice from './features/userSlice'
import postSlice from './features/postSlice'
import adminSlice from './features/adminSlice'
import editAvatarSlice from './features/editAvatarSlice'
import commentSlice from './features/commentSlice'
import followSlice from './features/followSlice'

export const store = configureStore({
  reducer: {
    params : paramsSlice,
    userInfo : userSlice,
    post : postSlice,
    admin : adminSlice,
    adminAvatar : editAvatarSlice,
    postComment :commentSlice,
    follow : followSlice
  },
})