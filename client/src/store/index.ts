
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authReducer from "../components/pages/Login/Form/Slice"
import createPostReducer from "../components/pages/CreatePost/Form/Slice"
import createMeetReducer from "../components/pages/CreateMeet/Form/CreateMeetSlice"
import settingsReducer from "../components/pages/Settings/SettingsSlice"
import chatReducer from "../components/pages/Chat/Form/ChatSlice"
import profileReducer from "../components/pages/User/UpBar/Slice"
import postListReducer from "../components/pages/PostList/Slice"
import  {thunk}  from "redux-thunk";



// const fetchData = createAsyncThunk('data/fetchData', async () => {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   });

let store = configureStore({
    reducer: {
        auth: authReducer,
        createPost: createPostReducer,
        createMeet: createMeetReducer,
        settings: settingsReducer,
        chat: chatReducer,
        profile: profileReducer,
        postList: postListReducer


    },
    //middleware: [thunk] as any, 

})
//store.dispatch(fetchData());
export default store