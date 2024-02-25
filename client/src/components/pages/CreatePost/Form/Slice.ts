import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const CreatePostFormSlice = createSlice({
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
export const {addHeader, addMain} = CreatePostFormSlice.actions

export default CreatePostFormSlice.reducer