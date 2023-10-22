import { TodoType } from '@/types';

type PropsType = {
  todo: TodoType;
};

export const TodoItem = ({ todo }: PropsType) => {
  return (
    <>
      <div className="flex-col w-32 bg-amber-50 p-5 select-none">
        <div className="text-center mb-4 font-bold">id: {todo.id}</div>
        <div className="text-center">{todo.title}</div>
        <div className="text-1xl text-center">{todo.completed}</div>
      </div>
    </>
  );
};