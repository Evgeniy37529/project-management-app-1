import { Button, Grid, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import {
  PlusCircleOutlined,
  SettingOutlined,
  ExportOutlined,
  ArrowLeftOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SwitcherLanguage } from '../switcherLanguage/SwitcherLanguage';
import ModalWindowCreateBoard from '../modalCreateBoards/modalCreateBoard.component';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors/user';
import { AppDispatch } from '../../store/store';
import { getUserById, userSlice } from '../../store/reducers/user';
import Paragraph from 'antd/lib/typography/Paragraph';
import jwt_decode from 'jwt-decode';

const HeaderAuthorisingUser = () => {
  const [visibleState, setVisibleState] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || 'noToken';
  const userId: { userId: string; login: string; iat: number } = jwt_decode(token);
  const { id, name } = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const { getUserId, defaultStatus } = userSlice.actions;
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();

  const renderName = useCallback(() => {
    return name;
  }, [name]);

  const exit = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentBoardId');
    localStorage.removeItem('userId');
    navigate('/');
    dispatch(defaultStatus());
  };

  const toggleModalCreated = () => {
    setVisibleState(!visibleState);
  };
  const backToBoards = () => {
    navigate('/boards');
  };
  const redirectionToEditProfile = () => {
    navigate('/change-profile');
  };

  useEffect(() => {
    dispatch(getUserById(userId!.userId));
  }, [id]);

  useEffect(() => {
    dispatch(getUserId(userId!.userId));
  }, [token]);

  return (
    <PageHeader
      className="site-page-header-responsive"
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Paragraph style={{ margin: '0 10px 0 0' }} key="name">
          <UserOutlined style={{ marginRight: '5px' }} />
          {renderName()}
        </Paragraph>,
        <Button
          key="Create new board"
          icon={location.pathname === '/boards' ? <PlusCircleOutlined /> : <ArrowLeftOutlined />}
          onClick={location.pathname === '/boards' ? toggleModalCreated : backToBoards}
        >
          {location.pathname === '/boards'
            ? md && t('header.create_new_board')
            : md && t('header.go_boards')}
        </Button>,
        <Button key="login" icon={<SettingOutlined />} onClick={() => navigate('/edit-profile')}>
          {md && t('header.edit_profile')}
        </Button>,
        <Button key="sign-up" danger icon={<ExportOutlined />} onClick={exit}>
          {md && t('header.sign_out')}
        </Button>,
        <SwitcherLanguage key="language" />,
        <ModalWindowCreateBoard
          visible={visibleState}
          changeVisible={toggleModalCreated}
          key="modalCreateBoard"
        />
      ]}
    />
  );
};
export default HeaderAuthorisingUser;
