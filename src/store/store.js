import { configureStore } from '@reduxjs/toolkit';
import PopupSlice from './popupSlice/PopupSlice';

export default configureStore({
  reducer: {
    popup: PopupSlice
  }
});