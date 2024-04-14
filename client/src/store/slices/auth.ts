import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        authUser: builder.mutation({
            query(user) {
                return {
                    method: 'POST',
                    url: '/auth',
                    body: user
                }
                
            }
        }),
        
    })
})
export const {useAuthUserMutation} = authApi

