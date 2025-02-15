import { MainLayout, PATHS } from '@/assets';
import { AuthPage, FormPage, ItemPage, ListPage, NotFoundPage } from '@/pages';
import { AuthProvider, PrivateRouteProvider } from '@/shared';
import { Navigate, Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={'/'} element={<Navigate to='/list' replace />} />

        <Route path={PATHS.mainPage} element={<ListPage />} />
        <Route path={`${PATHS.itemPage}/:id`} element={<ItemPage />} />

        <Route path={'/auth'} element={<AuthProvider />}>
          <Route index element={<AuthPage />} />
        </Route>

        <Route path={PATHS.formPage} element={<PrivateRouteProvider />}>
          <Route index element={<FormPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
