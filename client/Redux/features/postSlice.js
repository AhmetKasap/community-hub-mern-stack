'use client'

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    posts : []
}


export const userPosts = createAsyncThunk('userPosts', async (username) => {
    const response = await fetch('http://localhost:5000/api/users/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username }) 
        });

        const data = await response.json();
        return data
})

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
        
    },

    extraReducers : (builder) => {
        builder.addCase(userPosts.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.posts = action.payload
        }) 
    }
})

export default postSlice.reducer




















