import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const [text, setText] = useState<string>('');
  const { authenticate, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  const handleLogin = (username: string) => {
    authenticate(username);
  };
  return (
    <>
      <div className="flex-col">
        <input
          type="text"
          placeholder="Введите имя"
          value={text}
          className="border p-2"
          onChange={(event) => setText(event.target.value)}
        />
        <button disabled={!text} onClick={() => handleLogin(text)}>
          login
        </button>
      </div>
    </>
  );
};
