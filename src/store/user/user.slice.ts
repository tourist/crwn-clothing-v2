import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './user.types';

interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state: UserState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
