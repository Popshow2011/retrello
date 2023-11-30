import { Auth, NotFound, Table } from '@/pages';
import { AuthContext } from '@/context';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { FC, ReactNode, useContext } from 'react';

const isAuthenticated = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

enum Routes {
  ROOT = '/',
  ALL = '*',
  AUTH = '/auth',
}

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: (
      <PrivateRoute>
        <Table />
      </PrivateRoute>
    ),
  },
  {
    path: Routes.ALL,
    element: <NotFound />,
  },
  {
    path: Routes.AUTH,
    element: <Auth />,
  },
]);
