
import { configureStore} from "@reduxjs/toolkit";
import chatReducer from "./slices/chat";
import postReducer from "./slices/post";
import createMeetReducer from "./slices/meet"
import userPostsReducer from "./slices/userPosts";
import settingsReducer from "./slices/settings";
import loginReducer from "./slices/login";
import postListReducer from "./slices/postList";
import bookmarksReducer from "./slices/bookmarks";
import profileReducer from "./slices/profile";


import { authApi } from "../components/elements/AuthForm/api/rtk_query/auth";
import { loginApi } from "../components/elements/LoginForm/login";



let store = configureStore({
    reducer: {
        post: postReducer,
        createMeet: createMeetReducer,
        settings: settingsReducer,
        chat: chatReducer,
        profile: profileReducer,
        postList: postListReducer,
        [authApi.reducerPath]: authApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware, loginApi.middleware)
    }, 

})
export default store