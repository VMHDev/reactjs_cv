import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME, LANGUAGE } from 'src/constants/commons';

interface AuthState {
  theme: string;
  language: string;
}

const initialState: AuthState = {
  theme: THEME.DARK,
  language: LANGUAGE.EN,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    resetStateLayout: (state) => Object.assign(state, initialState),
    setTheme: (state, action: PayloadAction<THEME>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LANGUAGE>) => {
      state.language = action.payload;
    },
  },
});

export const { resetStateLayout, setTheme, setLanguage } = layoutSlice.actions;

export default layoutSlice.reducer;
