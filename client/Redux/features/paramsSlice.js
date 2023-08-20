import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: ''
}

const paramsSlice = createSlice({
    name : "params",
    initialState,
    reducers : {
        setParams : (state,action) => {
            state.value = action.payload
        }

    }

})

export const {setParams} = paramsSlice.actions
export default paramsSlice.reducer