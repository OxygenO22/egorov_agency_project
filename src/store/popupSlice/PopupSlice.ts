import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isOpen: boolean;
};

const initialState: IInitialState = {
  isOpen: false
};

const PopupSlice = createSlice({
  name: 'popup',
  initialState,
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