import axios from 'axios';
import { server } from '../store';

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({
      type: 'LoginRequest',
    });

    const { data } = await axios.post(
      `${server}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'LoginSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'LoginFailure',
      payload: error.response.data.message,
    });
  }
};

export const registerUser =
  (avatar, name, email, phone, password) => async dispatch => {
    try {
      dispatch({
        type: 'RegisterRequest',
      });

      const { data } = await axios.post(
        `${server}/user/register`,
        {
          avatar,
          name,
          email,
          phone,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: 'RegisterSuccess',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'RegisterFailure',
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async dispatch => {
  try {
    dispatch({
      type: 'LoadUserRequest',
    });
    const { data } = await axios.get(`${server}/user/me`, {
      withCredentials: true,
    });
    dispatch({
      type: 'LoadUserSuccess',
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: 'LoadUserFailure',
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({
      type: 'LogoutUserRequest',
    });
    const { data } = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });
    dispatch({
      type: 'LogoutUserSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'LogoutUserFailure',
      payload: error.response.data.message,
    });
  }
};

export const uploadResume = resume => async dispatch => {
  try {
    dispatch({
      type: 'uploadResumeRequest',
    });

    const { data } = await axios.put(
      `${server}/user/uploadresume`,
      { resume },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: 'uploadResumeSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'uploadResumeFailure',
      payload: error.response.data.message,
    });
  }
};
