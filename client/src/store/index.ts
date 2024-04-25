
import { configureStore} from "@reduxjs/toolkit";



import { authApi } from "./slices/auth";
import { loginApi } from "./slices/login"
import { editApi } from "./slices/edit";
import { profileApi } from "./slices/user"
import userIdReducer from './slices/userId'



let store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [editApi.reducerPath]: editApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        userId: userIdReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware, loginApi.middleware, editApi.middleware, profileApi.middleware)
    }, 

})
export type RootState = ReturnType<typeof store.getState>
export default store