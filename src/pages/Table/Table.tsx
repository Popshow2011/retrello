import { NavBar } from '@/components';
import { useContext } from 'react';
import { AuthContext } from '@/context';

export const Table = () => {
  const { userName } = useContext(AuthContext);

  return (
    <>
      <div className="bg-amber-500">
        <NavBar userName={userName} />
        <div>Table Component with {userName}</div>
      </div>
    </>
  );
};
