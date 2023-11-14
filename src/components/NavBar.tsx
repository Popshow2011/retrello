import { useContext } from 'react';
import { AuthContext } from '@/context';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  userName: string;
};

export const NavBar = ({ userName }: PropsType) => {
  const { signout } = useContext(AuthContext);

  const navigate = useNavigate();

  const createNewColumn = () => {
    return navigate('/new_column');
  };

  const handleExit = () => {
    signout();
  };

  return (
    <>
      <nav className="backdrop-brightness-75 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="text-gray-300 rounded-md px-3 py-2 text-xl font-medium">Retrello App</div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={createNewColumn}
                className="bg-blue-light border-2  rounded h-12 w-12  font-bold text-white text-2xl mr-2 hover:bg-blue-300"
              >
                +
              </button>
              <div className="flex relative ml-3  cursor-pointer" onClick={handleExit}>
                <div className="text-gray-300 border-2 rounded-md px-3 py-2 text-xl font-medium">{userName}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
