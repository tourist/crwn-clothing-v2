import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategoriesAsync } from './category.action';
import { Categories } from './category.types';

interface CategoriesState {
  categories: Categories;
  isLoading: boolean;
  error: Error | null;
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'users',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state: CategoriesState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCategoriesAsync.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      fetchCategoriesAsync.rejected,
      (state: CategoriesState, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
