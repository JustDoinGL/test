import { AppBar, Toolbar, Box } from '@mui/material';
import { NavLink, Outlet, useSearchParams } from 'react-router';
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
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <AppBar component='header' position='sticky'>
        <Toolbar sx={{ margin: '0 auto', p: 0 }} component='nav'>
          <SCNavLink to={PATHS.mainPage}>Главная</SCNavLink>
          <SCNavLink
            to={PATHS.formPage}
            style={({ isActive }) => (isActive && id ? { display: 'none' } : {})}
          >
            Разместить объявление
          </SCNavLink>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: '0 auto', maxWidth: '1200px', marginTop: 4, p: 0 }}>
        <Outlet />
      </Box>
    </>
  );
};
