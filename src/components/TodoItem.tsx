import { TodoType } from '@/types';

type PropsType = {
  todo: TodoType;
};

export const TodoItem = ({ todo }: PropsType) => {
  return (
    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
      {todo.title}
    </div>
  );
};
