import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CheckboxState } from '../types';

const initialState: CheckboxState = {
  checkboxes: {},
  selectedCount: 0,
};

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.checkboxes[id] = !state.checkboxes[id];
      state.selectedCount += state.checkboxes[id] ? 1 : -1;
    },
    resetCheckboxes: (state) => {
      Object.keys(state.checkboxes).forEach((id) => {
        state.checkboxes[id] = false;
      });
      state.selectedCount = 0;
    },
  },
});

export const { toggleCheckbox, resetCheckboxes } = checkboxSlice.actions;
export default checkboxSlice.reducer;
