import { NavBar } from '@/components';
import { UserType } from '@/types';

export const Table = ({ userName }: UserType) => {
  return (
    <>
      <div className="bg-amber-500">
        <NavBar userName={userName} />
        <div>Table Component with {userName}</div>
      </div>
    </>
  );
};
