import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICheckboxState {
  [key: string]: boolean;
}

const initialState: ICheckboxState = {};

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state[id] = !state[id];
    },
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
