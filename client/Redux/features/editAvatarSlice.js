'use client'

import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    avatars : []
}

export const token = Cookies.get('jsonwebtoken')

export const getAdminAvatar = createAsyncThunk('getAdminAvatar', async () => {
    const response = await fetch('http://localhost:5000/api/admin/info', {
          method: 'GET',
          headers: {
            Authorization : `Bearer ${token}`,
          },
        
        });

        const data = await response.json();
        return data
})


const adminSlice = createSlice({
    name : 'admin',
    initialState,
    reducers : {
        setReduxAvatar : (state, action) => {
            state.avatars.data.avatar = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAdminAvatar.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.avatars = action.payload
        }) 
    }

    
})


export const {setReduxAvatar} = adminSlice.actions

export default adminSlice.reducer





