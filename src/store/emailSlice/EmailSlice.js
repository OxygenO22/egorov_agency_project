import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { EMAILS__URL } from '../../Constants';

export const sendEmail = createAsyncThunk(
  'emails/sendEmail',
  async function(newEmail, {rejectWithValue}) {
    try {
      const email = {
        email: newEmail
      }

      const response = await fetch(EMAILS__URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
      })

      if (!response.ok) {
        throw new Error('Can\'t add email. Server error.')
      }

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const EmailSlice = createSlice({
  name: 'emails',
  initialState: {
    emailsList: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [sendEmail.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [sendEmail.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.emailsList = action.payload;
    },
    [sendEmail.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

export const {addEmail} = EmailSlice.actions;
export default EmailSlice.reducer;