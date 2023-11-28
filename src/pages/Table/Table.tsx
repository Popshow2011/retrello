import { Loader, NavBar } from '@/components';
import { TableItemType, TodoType } from '@/types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { z } from 'zod';
import { Outlet } from 'react-router-dom';
import { get } from '@/helpers/request.tsx';
import { AuthContext } from '@/context';
import { TableItem } from '@/pages/Table/TableItem';

const initialTableItem = [
  { id: 1, name: 'Открыт' },
  { id: 2, name: 'В работе' },
  { id: 3, name: 'На проверке' },
];

export const todoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export const todosSchema = z.array(todoSchema);

export const Table = () => {
  const [tableItem, setTableItem] = useState<TableItemType[]>(initialTableItem);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { userName } = useContext(AuthContext);

  useEffect(() => {
    getTodos();
  }, []);

  const grindingTodos = useCallback(
    (todos: TodoType[]) => {
      const newTodos = todos.map((item: TodoType) => {
        if (!item.tableId) {
          return { ...item, tableId: Math.floor(Math.random() * tableItem.length + 1) };
        }
        return item;
      });
      setTodos(newTodos);
    },
    [setTodos],
  );

  const getTodos = async () => {
    const { data } = await get('https://jsonplaceholder.typicode.com/todos');
    const { success } = todosSchema.safeParse(data);
    if (success) {
      grindingTodos(data);
    }
  };

  // const addColumn = (name: string) => {
  //   setTableItem([...tableItem, { id: tableItem.length + 1, name }]);
  // };

  return (
    <>
      <div className="bg-amber-500 overflow-hidden w-full h-screen">
        <NavBar userName={userName} />
        <div className="bg-blue w-full font-sans relative">
          <div className="flex px-4 pb-8 items-start bg-blue-300 overflow-x-scroll">
            {tableItem &&
              todos.length &&
              tableItem.map((item) => (
                <div key={item.id} className="min-h-min overflow-y-auto max-h-96 overflow-x-hidden">
                  <TableItem tableItem={item} todos={todos.filter((todo) => todo.tableId === item.id)} />
                </div>
              ))}
            {!todos.length && <Loader />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
