import { Route, Routes } from 'react-router-dom';
import Auth from '../../pages/Auth';
import Dashboard from '../../pages/Dashboard';

import ProtectedRoute from '../ProtectedRoute';
import ErrorPage from '../../pages/ErrorPage';
import { useState } from 'react';

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(
    () => localStorage.getItem('token') !== null
  );

  return (
    <Routes>
      <Route element={<ProtectedRoute isAuthenticated={isAuth} />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route
        path="/auth"
        element={<Auth isAuth={isAuth} setIsAuth={setIsAuth} />}
      />
      setIsAuthenticated
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
