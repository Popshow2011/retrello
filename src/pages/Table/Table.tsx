import { NavBar, TodoItem } from '@/components';
import { TodoType } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { z } from 'zod';
import axios from 'axios';
import { AuthContext } from '@/context';

const todoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

// Now add this object into an array
const todosSchema = z.array(todoSchema);



export const Table = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { userName } = useContext(AuthContext);


  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const { success } = todosSchema.safeParse(data);
    if (success) {
      setTodos(data);
    }
  };

  return (
    <>
      <div className="bg-amber-500 overflow-hidden">
        <NavBar userName={userName} />
        <div className="text-center text-2xl">Table Component with {userName}</div>
        <div className="flex gap-5 flex-wrap">
          {todos &&
            todos.map((item: TodoType) => (
              <div key={item.id}>
                <TodoItem todo={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
