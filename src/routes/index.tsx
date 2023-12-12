import { Auth, NewTodo, NotFound, Table, EditTodo } from '@/pages';
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
  NEW_TODO = '/new_todo',
  EDIT_TODO = '/edit_todo/:id',
}

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: (
      <PrivateRoute>
        <Table />
      </PrivateRoute>
    ),
    children: [
      {
        path: Routes.NEW_TODO,
        element: <NewTodo />,
      },
      {
        path: Routes.EDIT_TODO,
        element: <EditTodo />,
      },
    ],
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
