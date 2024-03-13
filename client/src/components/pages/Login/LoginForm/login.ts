import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query(user) {
                return {
                    method: 'POST',
                    url: '/login',
                    body: user
                }
                
            }
        }),
        
    })
})
export const {useLoginUserMutation} = loginApi

