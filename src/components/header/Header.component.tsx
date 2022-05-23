import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderAuthorisingUser from './HeaderAuthorizedUser.component';
import HeaderLoginSignUpPage from './HeaderLoginSignUpPage.component';

const Header = () => {
  const location = useLocation();

  const renderHeader = () => {
    if (localStorage.getItem('token')) {
      return <HeaderAuthorisingUser />;
    }
    if (location.pathname === '/') {
      return <></>;
    }
    return <HeaderLoginSignUpPage />;
  };

  return <>{renderHeader()}</>;
};
export default Header;
