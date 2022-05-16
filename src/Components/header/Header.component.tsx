import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderAuthorisingUser from './HeaderAuthorizedUser.component';
import HeaderLoginSignUpPage from './HeaderLoginSignUpPage.component';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {}, [token]);
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
