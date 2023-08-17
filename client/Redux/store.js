'use client'
import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from './features/userInfoSlice'

export const store = configureStore({
  reducer: {
    user : userInfoSlice
  },
})