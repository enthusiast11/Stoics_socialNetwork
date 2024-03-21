import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const editApi = createApi({
    reducerPath: 'edit',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (builder) => ({
        editChanges: builder.mutation({
            query(user) {
                return {
                    method: 'POST',
                    url: '/edit',
                    body: user
                }
                
            }
        })
    })
})

export const {useEditChangesMutation} = editApi