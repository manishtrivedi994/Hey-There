import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userMarkers: [
    {
      latitude: '28.421339',
      longitude: '77.090079',
      title: 'Ajay Chauhan',
      description: 'Male',
      id: 1,
    },
    {
      latitude: '28.423953',
      longitude: '77.084586',
      title: 'Manisha Khanna',
      description: 'Female',
      id: 2,
    },
    {
      latitude: '28.421154',
      longitude: '77.099032',
      title: 'Jennifer Watson',
      description: 'Female',
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
