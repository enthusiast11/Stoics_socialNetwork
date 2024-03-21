import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      userId: 0
    },
    reducers: {
      setIdUsers: (state, action) => {
        state.userId = action.payload;
      },
    },
  });

export const {setIdUsers} = authSlice.actions
export default authSlice.reducer