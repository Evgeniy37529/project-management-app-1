import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { WelcomePage } from '../../features/Pages/WelcomPage/WelcomPage';
import 'antd/dist/antd.min.css';
import './App.css';

const App = () => {
  return (
    <>
      {/*<Header />*/}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/boards" />
        <Route path="/boards/:id" />
        <Route path="/404" />
        <Route path="/welcome" />
        <Route path="/sing-up" />
        <Route path="*" />
      </Routes>
      <Outlet />
      {/*<Footer />*/}
    </>
  );
};

export default App;
