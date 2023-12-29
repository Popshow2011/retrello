import { ColumnType, TodoType } from '@/types';
import { TodoItem } from '@/components';
import { router } from '@/routes';

type ItemProps = {
  tableItem: ColumnType;
  todos: TodoType[] | undefined;
};

export const TableItem = ({ tableItem, todos }: ItemProps) => {
  const newTodo = () => {
    router.navigate('/new_todo');
  };

  return (
    <div className=" rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
      <div className="flex justify-between py-1">
        <h3 className="text-2xl font-bold text-center">{tableItem.name}</h3>
        <button onClick={newTodo}>+</button>
      </div>
      <div className="text-sm mt-2">
        {todos?.length &&
          todos.map((item) => (
            <div key={item.id}>
              <TodoItem todo={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
