import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  language: 'en' | 'ar';
  searchQuery: string;
}

const initialState: GlobalState = {
  language: 'en', 
  searchQuery: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.language = action.payload;
    },
    
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setLanguage, setSearchQuery } = globalSlice.actions;
export default globalSlice.reducer;