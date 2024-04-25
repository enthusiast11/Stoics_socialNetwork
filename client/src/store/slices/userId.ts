import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
      id: ''
    },
    reducers: {
      setIdUsers: (state, action) => {
        state.id = action.payload;
      },
    },
  });

export const {setIdUsers} = authSlice.actions
export default authSlice.reducer