import { ReactNode, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

type AuthType = {
  isLoggedIn: boolean;
  userName: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }): any => {
  const [auth, setAuth] = useState<AuthType | null>(null);
  const authenticate = (userName: string) => {
    setAuth({ isLoggedIn: true, userName: userName });
  };

  const userName = auth?.userName ? auth.userName : '';

  const isLoggedIn = auth ? auth.isLoggedIn : false;

  const signout = () => {
    setAuth(null);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, signout, authenticate, userName }}>{children}</AuthContext.Provider>
  );
};
