import { MainLayout, PATHS } from '@/assets';
import { FormPage, ItemPage, ListPage, NotFoundPage } from '@/pages';
import { Navigate, Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={'/'} element={<Navigate to='/list' replace />} />

        <Route path={PATHS.mainPage} element={<ListPage />} />
        <Route path={PATHS.formPage} element={<FormPage />} />
        <Route path={`${PATHS.itemPage}/:id`} element={<ItemPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
