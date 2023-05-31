import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { EMAILS__URL } from '../../Constants';

interface IEmailList {
  id: number;
  email: string;
}

interface IEmailState {
  emailsList: IEmailList[];
  loading: boolean;
  error: string | null;
}

export const sendEmail = createAsyncThunk<IEmailList, string, {rejectValue: string}>(
  'emails/sendEmail',
  async function(newEmail, {rejectWithValue}) {
    
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
        return rejectWithValue('Can\'t add email. Server error.')
      }

      return (await response.json()) as IEmailList;
  }
)

const initialState: IEmailState = {
  emailsList: [],
  loading: false,
  error: null
}

const EmailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.emailsList.push(action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
});

export default EmailSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWidth('rejected');
};