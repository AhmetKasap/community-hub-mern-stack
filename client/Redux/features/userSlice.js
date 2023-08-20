'use client'

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    users : []
}


export const userInformation = createAsyncThunk('userInformation', async (username) => {
    const response = await fetch('http://localhost:5000/api/users/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: username }) 
        });

        const data = await response.json();
        return data
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setReduxAvatar : (state, action) => {
            state.users.data.avatar = action.payload
        },
        setReduxName : (state, action) => {
            state.users.data.name = action.payload
        },
        setReduxLastName : (state, action) => {
            state.users.data.lastname = action.payload
        },
        setReduxUserName : (state, action) => {
            state.users.data.username = action.payload
        },
        setReduxExplanation : (state, action) => {
            state.users.data.explanation = action.payload
        },
    },

    extraReducers : (builder) => {
        builder.addCase(userInformation.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.users = action.payload
        }) 
    }
})

export default userSlice.reducer





