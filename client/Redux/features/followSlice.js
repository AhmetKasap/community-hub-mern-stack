import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

const initialState = {
    follow : {
        data :{
            follower : [

            ],
            userRef : {

            },
            __v  :'',
            _id : ''
        },
        message : '',
        success : ''

    }
        
    
}

export const token = Cookies.get('jsonwebtoken')


export const follower = createAsyncThunk('follower', async(username) => {
    const response = await fetch('http://localhost:5000/api/user/followers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username })
    })

    const followers = await response.json()
    return followers
})


const followerSlice = createSlice({
    name:"follower",
    initialState,
    reducers : {
        addfollow : (state,action) => {
            if(state.follow.data.follower) {
                            state.follow.data.follower.push(action.payload)

            }
        },
        unfollow : (state,action) => {
            state.follow.data.follower = state.follow.data.follower.filter(data => {
                if(data !== action.payload) {
                    return data
                }
            })

        } 
    },
    extraReducers : (builder) => {
        builder.addCase(follower.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.follow = action.payload
        }) 
    }
})

export const {unfollow,addfollow} = followerSlice.actions
export default followerSlice.reducer