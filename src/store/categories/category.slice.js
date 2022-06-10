import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesAsync } from './category.action';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'users',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
