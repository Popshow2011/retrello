import { NavBar } from '../../components/NavBar.tsx';

export const Table = ({ user }: { user: string }) => {
  return (
    <>
      <div className="bg-amber-500">
        <NavBar user={user} />
        <div>Table Component with {user}</div>
      </div>
    </>
  );
};
