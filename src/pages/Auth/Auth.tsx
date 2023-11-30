import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

export const Auth = () => {
  const [text, setText] = useState('');
  const { authenticate, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  const handleLogin = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    if (!text) return;
    authenticate(text);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-amber-900 bg-cover bg-no-repeat">
        <div className="rounded-xl bg-amber-700 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Retrello App</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4 text-lg">
                <input
                  onChange={handleChange}
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="Type Login"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  disabled={!text}
                  onClick={handleLogin}
                  type="submit"
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
