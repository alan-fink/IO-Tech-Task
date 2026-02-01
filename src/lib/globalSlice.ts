import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  language: 'en' | 'ar';
  searchQuery: string;
}

const initialState: GlobalState = {
  language: 'en', // По умолчанию английский
  searchQuery: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // Действие для смены языка
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.language = action.payload;
    },
    // Действие для сохранения поиска
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setLanguage, setSearchQuery } = globalSlice.actions;
export default globalSlice.reducer;