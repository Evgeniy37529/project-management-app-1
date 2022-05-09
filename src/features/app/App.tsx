import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../login/login.component';
import Header from '../header/header.component';
import SignUp from '../sign-up/sign-up.component';
import Footer from '../footer/footer.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
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
