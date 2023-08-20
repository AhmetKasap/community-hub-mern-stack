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
        setReduxAvatar : (state, action) => {
            state.usersInfo.data.avatar = action.payload
        },
        setReduxName : (state, action) => {
            state.usersInfo.data.name = action.payload
        },
        setReduxLastName : (state, action) => {
            state.usersInfo.data.lastname = action.payload
        },
        setReduxUserName : (state, action) => {
            state.usersInfo.data.username = action.payload
        },
        setReduxExplanation : (state, action) => {
            state.usersInfo.data.explanation = action.payload
        },
        
    },
    extraReducers : (builder) => {
        builder.addCase(getUserInfo.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.usersInfo = action.payload
        }) 
    }
})

export const {setReduxAvatar,setReduxName,setReduxLastName,setReduxUserName,setReduxExplanation} =userInfoSlice.actions

export default userInfoSlice.reducer