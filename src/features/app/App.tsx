import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Login from '../../Pages/login/LoginPage';
import SignUp from '../../Pages/sign-up/SignUpPage';
import Footer from '../../Components/footer/Footer.component';
import { WelcomePage } from '../Pages/WelcomPage/WelcomPage';
import './App.css';
import Header from '../../Components/header/Header.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/boards" />
        <Route path="/boards/:id" />
        <Route path="/404" />
        <Route path="/welcome" />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
