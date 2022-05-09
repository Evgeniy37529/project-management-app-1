import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/*<Header />*/}
      <Routes>
        <Route path="/" />
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
