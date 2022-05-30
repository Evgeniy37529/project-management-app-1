import React, { useEffect, useRef, useState } from 'react';
import { Row, Typography, Layout, Button } from 'antd';
import {
  Page,
  AuthButtons,
  AboutProject,
  CardWrapper,
  StickyHeader,
  ButtonsContainer
} from './styled';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SwitcherLanguage } from '../../components/switcherLanguage/SwitcherLanguage';
import { DEVELOPER_CARDS_INFO } from '../../constants/developerCardConst';
import { handleScroll } from '../../components/header/stickyFunction/stickyFunction';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export const WelcomePage: React.FC = () => {
  const headerRef = useRef<any>(null);
  const [isSticky, setIsSticky] = useState(false);
  const token = localStorage.getItem('token');
  const { t, i18n } = useTranslation();
  const developerCardList = DEVELOPER_CARDS_INFO.map(({ id, name, role, avatar }) => (
    <DeveloperCard key={id} name={i18n.t(name)} role={i18n.t(role)} avatar={avatar} />
  ));

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      !token && handleScroll(header.top, setIsSticky);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <Layout className="layout">
      <Page ref={headerRef}>
        <StickyHeader sticky={isSticky}>
          <AuthButtons>
            {!token ? (
              <ButtonsContainer>
                <Link to="login">
                  <Button style={{ marginRight: '10px' }} type="primary" ghost>
                    {t('welcomPage.sign_in')}
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button style={{ marginRight: '10px' }} type="primary" ghost>
                    {t('welcomPage.sign_up')}
                  </Button>
                </Link>
                <SwitcherLanguage />
              </ButtonsContainer>
            ) : (
              <Link to="/boards">
                <Button type="primary" style={{ marginRight: '10px' }}>
                  Go to main page
                </Button>
              </Link>
            )}
          </AuthButtons>
        </StickyHeader>
        <Content className="container" style={{ padding: '0 10px 0 10px' }}>
          <AboutProject>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={1}>
              {t('welcomPage.about_project_title')}
            </Title>
            <Paragraph style={{ fontSize: 'calc(1rem + 1vw)', textAlign: 'center' }}>
              {t('welcomPage.about_project')}
            </Paragraph>
          </AboutProject>
          <div>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={2}>
              {t('welcomPage.team')}
            </Title>
            <CardWrapper>
              <Row
                gutter={[
                  { xs: 0, sm: 0, md: 16, lg: 16 },
                  { xs: 16, sm: 16, md: 0, lg: 0 }
                ]}
              >
                {developerCardList}
              </Row>
            </CardWrapper>
          </div>
        </Content>
      </Page>
    </Layout>
  );
};
