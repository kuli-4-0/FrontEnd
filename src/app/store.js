import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/test/counterSlice.js';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
