import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Signup from './components/Register/Signup';
import Profile from './components/Profile/Profile';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/Actions/user';
import Login from './components/login/Login';

const App = () => {
  const dispatch = useDispatch();
  const { message, error } = useSelector(state => state.user);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearErrors' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
