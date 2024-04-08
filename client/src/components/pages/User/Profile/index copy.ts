import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  useSelector } from "react-redux";
import { RootState } from "../../../../store";
import store from "../../../../store";


//const userId: number= store.getState().auth.userId
// const userPath1: string= store.getState().auth.userId.toString()
// const baseQueryPath: string = `http://localhost:3001/user:${userPath}`
export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getData: builder.query ({
            query: userId => ({
                url: `profile/${userId}`,
                method: 'GET'
            }),
            
            
        })
            
    
    })
})

export const {useGetDataQuery} = profileApi