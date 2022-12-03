import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    latitude: '28.383815',
    longitude: '77.051962',
    title: 'Me',
    description: 'My Current location',
  },
};
const currentUser = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default currentUser.reducer;

export const {setCurrentUser} = currentUser.actions;
