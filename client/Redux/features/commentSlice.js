import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment : []
}

export const postComments = createAsyncThunk('postComments', async(postId) => {
    const response = await fetch('http://localhost:5000/api/post/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId })
    })

    const comments = await response.json()
    return comments
})


const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers : {
        updateComment : (state,action) => {
            state.comment.data.push(action.payload) 

        } 
    },
    extraReducers : (builder) => {
        builder.addCase(postComments.fulfilled , (state, action) => {     //fulfilled, işlem gerçekleşti, pending = bekleniyor, rejected = error
            state.comment = action.payload
        }) 
    }
})

export const {updateComment} = commentSlice.actions
export default commentSlice.reducer