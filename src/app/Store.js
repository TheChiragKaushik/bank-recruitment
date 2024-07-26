import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';
import { loadState, saveState } from '../features/localStorage.js';

const preloadedState = loadState();

export const Store = configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState
});

Store.subscribe(() => {
  saveState(Store.getState());
});


