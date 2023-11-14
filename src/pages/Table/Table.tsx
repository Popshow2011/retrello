import { Loader, NavBar } from '@/components';
import { ColumnType, TodoType } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { z } from 'zod';
import { TableItem } from '@/pages';
import { Outlet } from 'react-router-dom';
import { get } from '@/helpers/request.tsx';
import { AuthContext, ColumnContext } from '@/context';

export const todoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export const todosSchema = z.array(todoSchema);

export const Table = () => {
  const { columns } = useContext(ColumnContext);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { userName } = useContext(AuthContext);

  useEffect(() => {
    getTodos();
  }, []);

  const grindingTodos = (todos: TodoType[]) => {
    const newTodos = todos.map((item: TodoType) => {
      if (!item.tableId) {
        item.tableId = Math.floor(Math.random() * columns.length + 1);
      }
      return item;
    });
    setTodos(newTodos);
  };

  const getTodos = async () => {
    const { data } = await get('https://jsonplaceholder.typicode.com/todos');
    const { success } = todosSchema.safeParse(data);
    if (success) {
      grindingTodos(data);
    }
  };

  return (
    <>
      <div className="bg-amber-500 overflow-hidden w-full h-screen">
        <NavBar userName={userName} />
        <div className="bg-blue w-full font-sans relative">
          <div className="flex px-4 pb-8 items-start bg-blue-300 overflow-x-scroll">
            {columns &&
              todos.length &&
              columns.map((item: ColumnType) => (
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
