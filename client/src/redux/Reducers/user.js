import { createReducer } from '@reduxjs/toolkit';
const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: state => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  RegisterRequest: state => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LoadUserRequest: state => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  uploadResumeRequest: state => {
    state.loading = true;
  },
  uploadResumeSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  uploadResumeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LogoutUserRequest: state => {
    state.loading = true;
  },
  LogoutUserSuccess: (state, action) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
    state.message = action.payload.message;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  clearErrors: state => {
    state.error = null;
  },
  clearMessage: state => {
    state.message = null;
  },
});
