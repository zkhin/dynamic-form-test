import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {},
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: () => {
      return {};
    }
  },
});

const { actions, reducer } = formSlice;

export const { reset, update } = actions;

export default reducer;
