import { useContext, useState } from 'react';
import { AuthContext } from '@/context';
import { useNavigate } from 'react-router-dom';
import { CreateTableItem } from '@/pages';

type PropsType = {
  userName: string;
  addColumn: (name: string) => void;
};

export const NavBar = ({ userName, addColumn }: PropsType) => {
  const { signout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleExit = () => {
    signout();
  };

  const createNewColumn = () => {
    openModal();
    return navigate('/new_column');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="backdrop-brightness-75">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="text-gray-300 rounded-md px-3 py-2 text-xl font-medium">Retrello App</div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="text-gray-300 rounded-md px-3 py-2 text-xl font-medium">{userName}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
