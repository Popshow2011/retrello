import '@/index.css';

import { ReactNode, StrictMode, useContext, FC } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@/pages/Auth/AuthProvider.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Auth, NotFound, Table, CreateTableItem } from '@/pages';
import { AuthContext } from '@/context';

const isAuthenticated = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Table />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/new_column',
        element: <CreateTableItem />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
