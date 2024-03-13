import { createSlice } from "@reduxjs/toolkit";

const post = createSlice({
    name: 'CreatePost',
    initialState: {
        value: 0
    },
    reducers: {
        addHeader: (state, action)=>{
            console.log(state);
            console.log(action);
            
            state = action.payload

        },
        addMain: (state, action)=>{
            console.log(state);
            console.log(action);
            state=action.payload

        }
    }
})
export const {addHeader, addMain} = post.actions

export default post.reducer