import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  filter: {
    range: 1000,
  },
};
const filter = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setRange: (state, action) => {
      state.filter.range = action.payload;
    },
  },
});

export default filter.reducer;

export const {setRange} = filter.actions;
