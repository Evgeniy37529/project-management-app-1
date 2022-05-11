import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../../Pages/login/LoginPage';
import HeaderLoginSignUpPage from '../../Components/header/HeaderLoginSignUpPage.component';
import SignUp from '../../Pages/sign-up/SignUpPage';
import Footer from '../../Components/footer/Footer.component';
import { WelcomePage } from '../Pages/WelcomPage/WelcomPage';
import 'antd/dist/antd.min.css';
import './App.css';
import HeaderAuthorisingUser from '../../Components/header/HeaderAuthorizedUser.component';

const App = () => {
  useEffect(() => {}, [document.location.pathname]);
  const stateDefinitionHeader = () => {
    if (document.location.pathname === '/') {
    } else if (localStorage.getItem('token')) {
      return <HeaderAuthorisingUser />;
    } else {
      return <HeaderLoginSignUpPage />;
    }
  };
  return (
    <>
      {stateDefinitionHeader()}
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
