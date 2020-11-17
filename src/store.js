import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./features/categoriesSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
