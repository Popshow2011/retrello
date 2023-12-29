import { TodoType } from '@/types';
import { Outlet, useNavigate } from 'react-router-dom';

type PropsType = {
  todo: TodoType;
};

export const TodoItem = ({ todo }: PropsType) => {
  const navigate = useNavigate();
  const goToEdit = (id: number) => {
    navigate(`/edit_todo/${id}`);
  };
  return (
    <>
      <div
        onClick={() => goToEdit(todo.id)}
        className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
      >
        {todo.title}
      </div>
      <Outlet />
    </>
  );
};
