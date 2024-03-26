import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { log } from 'console';

interface IUser {
    email: string;
    password: string;
}

interface IloginResponse {
    authToken: string
}

interface AuthResponse extends Response {
    authToken: string;
    data: IUser; 
  }

  export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<IloginResponse, IUser>({
            query: (user) => ({
                
                url: '/login',
                method: 'POST',
                body: user,
            }),
            transformResponse:  (response: Response, meta, ) => {
                const authTokenHeader =  response!.headers.get('Authorization')
                console.log(authTokenHeader);
                
                return { authToken: authTokenHeader || ''};
            },
        }),
    }),
});

export const { useLoginUserMutation } = loginApi;
