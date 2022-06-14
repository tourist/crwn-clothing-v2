import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategoriesAsync = createAsyncThunk(
  'users/fetchCategoriesAsync',
  getCategoriesAndDocuments
);
