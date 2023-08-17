'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState = {
    usersInfo:[]
}

export const token = Cookies.get('jsonwebtoken')

export const getUserInfo = createAsyncThunk('getUserInfo', async() => {   //* api isteğimizi atıyoruz.
    const response = await fetch('http://localhost:5000/api/user/profile',{
        method:'GET',
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
})

export const userInfoSlice = createSlice({
    name : 'userInfo',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getUserInfo.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.usersInfo = action.payload
        }) 
    }
})

export default userInfoSlice.reducer