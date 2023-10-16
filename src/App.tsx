import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext.tsx';
import { Auth, NotFound, Table } from '@/pages';

const ProtectedAuthRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: ReactNode }): ReactNode => {
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to={'/auth'} replace />;
  } else if (location.pathname.includes('auth') && isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }
  return children;
};

export const App = () => {
  const { isLoggedIn, userName } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={
            <ProtectedAuthRoute isLoggedIn={isLoggedIn}>
              <Table userName={userName} />
            </ProtectedAuthRoute>
          }
        />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  );
};
