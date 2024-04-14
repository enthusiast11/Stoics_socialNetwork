import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getData: builder.query ({
            query: userId => ({
                url: `/${userId}`,
                method: 'GET'
            }),
            
            
        })
            
    
    })
})

export const {useGetDataQuery} = profileApi