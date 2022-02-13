import { configureStore } from '@reduxjs/toolkit';
import marvelReducer from '../features/marvel/marvelSlice';

export const store = configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});
