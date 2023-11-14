import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  signout: () => {},
  userName: '',
  authenticate: (_username: string) => {},
});
