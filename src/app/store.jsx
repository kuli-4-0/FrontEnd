import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice.js';


export const store = configureStore({
  reducer: { counter: authReducer },
});
