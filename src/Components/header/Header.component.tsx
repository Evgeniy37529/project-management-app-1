import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderAuthorisingUser from './HeaderAuthorizedUser.component';
import HeaderLoginSignUpPage from './HeaderLoginSignUpPage.component';

const Header = () => {
  const location = useLocation();
  let currentHeader = <></>;
  useEffect(() => {}, [location]);
  if (location.pathname === '/') {
  } else if (localStorage.getItem('token')) {
    currentHeader = <HeaderAuthorisingUser />;
  } else {
    currentHeader = <HeaderLoginSignUpPage />;
  }
  return <>{currentHeader}</>;
};
export default Header;
