import '@/index.css';

import { ReactNode, StrictMode, useContext, FC } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@/pages/Auth/AuthProvider.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Auth, NotFound, Table, CreateTableItem } from '@/pages';
import { AuthContext } from '@/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColumnProvider } from './pages/Table/ColumnProvider';

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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ColumnProvider>
          <ReactQueryDevtools initialIsOpen={true} />
          <RouterProvider router={router} />
        </ColumnProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
