import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count/countSlice';
export default configureStore({
  reducer: {
    count: countReducer,
  },
});
