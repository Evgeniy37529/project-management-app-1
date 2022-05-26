import { userSelector } from './store/selectors/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export const useUnloginNavigate = () => {
  const { token } = useSelector(userSelector);
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname !== '/' && !token) {
    navigate('/');
  }
};
