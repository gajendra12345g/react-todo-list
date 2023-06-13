import todoReducer from './todoReducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
