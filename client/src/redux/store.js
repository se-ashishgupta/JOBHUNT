import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const server = process.env.REACT_APP_SERVER_API;
