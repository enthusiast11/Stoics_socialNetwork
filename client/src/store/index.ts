
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
import authReducer from "./slices/auth"

import { authApi } from "../components/modules/AuthForm/api/rtk_query/auth";
import { loginApi } from "../components/pages/Login/Form/login";
import { editApi } from "./slices/edit";



let store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        createMeet: createMeetReducer,
        settings: settingsReducer,
        chat: chatReducer,
        profile: profileReducer,
        postList: postListReducer,
        [authApi.reducerPath]: authApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [editApi.reducerPath]: editApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware, loginApi.middleware, editApi.middleware)
    }, 

})
export type RootState = ReturnType<typeof store.getState>
export default store