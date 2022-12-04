import {createSlice} from '@reduxjs/toolkit';
import {DELTA_CONSTANTS} from '../utils/constants';

const initialState = {
  currentUser: {
    latitude: 28.383815,
    longitude: 77.051962,
    ...DELTA_CONSTANTS,
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
