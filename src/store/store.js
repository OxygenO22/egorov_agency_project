import { configureStore } from '@reduxjs/toolkit';
import PopupSlice from './popupSlice/PopupSlice';
import EmailSlice from './emailSlice/EmailSlice';

export default configureStore({
  reducer: {
    popup: PopupSlice,
    emails: EmailSlice
  }
});