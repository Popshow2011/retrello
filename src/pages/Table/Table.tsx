import { NavBar } from '@/components';
import { TableItemType } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { AuthContext } from '@/context';
import { TableItem } from '@/pages';

const todoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

// Now add this object into an array
const todosSchema = z.array(todoSchema);

const initialTableItem = [
  { id: 1, name: 'Открыт' },
  { id: 2, name: 'В работе' },
  { id: 3, name: 'На проверке' },
];
export const Table = () => {
  const [tableItem, setTableItem] = useState<TableItemType[]>(initialTableItem);
  // const [todos, setTodos] = useState<TodoType[]>([]);
  const { userName } = useContext(AuthContext);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const { success } = todosSchema.safeParse(data);
    if (success) {
      // setTodos(data);
    }
  };

  const addColumn = (name: string) => {
    setTableItem([...tableItem, { id: tableItem.length + 1, name }]);
  };

  return (
    <>
      <div className="bg-amber-500 overflow-hidden w-full h-full relative">
        <NavBar userName={userName} addColumn={addColumn} />
        <div className="bg-blue w-full h-screen font-sans">
          <div className="flex px-4 pb-8 items-start bg-blue-300 overflow-x-scroll">
            {tableItem &&
              tableItem.map((item) => (
                <div key={item.id}>
                  <TableItem tableItem={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
