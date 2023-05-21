import { createSlice } from '@reduxjs/toolkit';

const PopupSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false
  },
  reducers: {
    openPopup(state) {
      state.isOpen = true;
    },
    closePopup(state) {
      state.isOpen = false;
    }
  }
});

export const {openPopup, closePopup} = PopupSlice.actions;
export default PopupSlice.reducer;