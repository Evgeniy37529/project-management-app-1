import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderAuthorisingUser from './HeaderAuthorizedUser.component';
import HeaderLoginSignUpPage from './HeaderLoginSignUpPage.component';

const Header = () => {
  const location = useLocation();

  if (localStorage.token) {
    return <HeaderAuthorisingUser />;
  }
  if (location.pathname === '/') {
    return null;
  }
  return <HeaderLoginSignUpPage />;
};
export default Header;
