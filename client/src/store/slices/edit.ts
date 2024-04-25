import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface IUser {
    name: string,
    avatar: File | string,
    location: string,
    about: string,
    quote: string
}
interface IPostChanges {
    user: FormData,
    userId: string
}
export const editApi = createApi({
    reducerPath: 'edit',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    tagTypes : [ 'Users' ],
    endpoints: (builder) => ({
        editChanges: builder.mutation({
            query: ({user, userId}: IPostChanges) => ({
                method: 'PATCH',
                url: `/${userId}/edit`,
                body: user,
                invalidatesTags: ['Users'], 
            }),
            invalidatesTags: ['Users'] 
        })
    }),
});

export const {useEditChangesMutation} = editApi