import {ReactNode, useState} from 'react';
//обернуть в ErrorBoundary почитать и обернуть
import {AuthContext} from '../../context/AuthContext';

type AuthType = {
  isLoggedIn: boolean;
  userName: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const [auth, setAuth] = useState<AuthType | null>(null);
  // получаем данные авторизирован ли пользователь, засовываем их в контекст
  const authenticate = (userName: string) => {
    setAuth({ isLoggedIn: true, userName: userName });
  };

  const userName = auth?.userName ? auth.userName : '';

  const isLoggedIn = auth ? auth.isLoggedIn : false;

  const signout = () => {
    setAuth(null);
  };
  return <AuthContext.Provider value={{ isLoggedIn, signout, authenticate, userName }}>{children}</AuthContext.Provider>;
};

// export const useAuth = () => {
//   const [user, setUser] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const login = (userName: string) => {
//     setUser(userName);
//     navigate('/table', { replace: true });
//   };

//   const isLoggedIn = !!user;

//   const exit = () => {
//     setUser(null);
//     navigate('/auth', { replace: true });
//   };

//   const getUser = () => {
//     return user;
//   };

//   return { getUser, login, exit, isLoggedIn };
// };
