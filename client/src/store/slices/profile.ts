import { createSlice } from "@reduxjs/toolkit";

import { createApi } from "@reduxjs/toolkit/dist/query/react";

const profile = createSlice({
    name: 'Profile',
    initialState: {
        value: 0
    },
    reducers: {

    }
})
export const {} = profile.actions

export default profile.reducer

// const profileApi = createApi({
//     reducerPath: 'profile',
    

// })