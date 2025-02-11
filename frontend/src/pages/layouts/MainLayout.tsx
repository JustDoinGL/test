import { AppBar, Toolbar, Container } from '@mui/material';
import { NavLink, Outlet } from 'react-router';
import styled from '@emotion/styled';
import { PATHS } from '@/assets';

const SCNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  &.active {
    background-color: #1976d2;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MainLayout = () => {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar sx={{ margin: '0 auto' }}>
          <nav>
            <SCNavLink to={PATHS.mainPage}>Главная</SCNavLink>
            <SCNavLink to={PATHS.formPage}>Создать объявление</SCNavLink>
          </nav>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
