import { createSlice } from '@reduxjs/toolkit';

export const potatoSlice = createSlice({
  name: 'potato',
  initialState:{
    couter1:23
  },
  reducers: {
    increment: (state) => {
      state.couter1 += 1;
    },
    decrement: (state) => {
      state.couter1 -= 1;
    },
    potatoIncrement: (state, action) => {
      state.couter1 += action.payload;
    },
  }
});

export const { increment, decrement, potatoIncrement } = potatoSlice.actions;

export const slectCouter1 = (state) => state.potato.couter1;

export default potatoSlice.reducer;
