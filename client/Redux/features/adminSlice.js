'use client'

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState = {
    admins : []
}

export const token = Cookies.get('jsonwebtoken')

export const admin = createAsyncThunk('admin', async () => {
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
            state.admins.data.avatar = action.payload
        },
        setReduxName : (state, action) => {
            state.admins.data.name = action.payload
        },
        setReduxLastName : (state, action) => {
            state.admins.data.lastname = action.payload
        },
        setReduxExplanation : (state, action) => {
            state.admins.data.explanation = action.payload
        },
        
        
    },

    extraReducers : (builder) => {
        builder.addCase(admin.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.admins = action.payload
        }) 
    }
})


export const {setReduxAvatar,setReduxName,setReduxLastName,setReduxUserName,setReduxExplanation} = adminSlice.actions

export default adminSlice.reducer





