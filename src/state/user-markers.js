import {createSlice} from '@reduxjs/toolkit';
import {DELTA_CONSTANTS} from '../utils/constants';

const initialState = {
  userMarkers: [
    {
      latitude: 28.421339,
      longitude: 77.090079,
      title: 'Ajay Chauhan',
      description: 'Male',
      ...DELTA_CONSTANTS,
      id: 1,
    },
    {
      latitude: 28.423953,
      longitude: 77.084586,
      title: 'Manisha Khanna',
      description: 'Female',
      ...DELTA_CONSTANTS,
      id: 2,
    },
    {
      latitude: 28.421154,
      longitude: 77.099032,
      title: 'Jennifer Watson',
      description: 'Female',
      ...DELTA_CONSTANTS,
      id: 3,
    },
  ],
};
const userMakrers = createSlice({
  name: 'userMakrers',
  initialState: initialState,
  reducers: {
    setUserMarkers: (state, action) => {
      state.userMarkers = [...state.userMarkers, ...action.payload];
    },
  },
});

export default userMakrers.reducer;

export const {setUserMarkers} = userMakrers.actions;
