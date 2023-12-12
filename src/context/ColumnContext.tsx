import { createContext } from 'react';
import { ColumnType } from '@/types';

type ColumnContextType = {
  columns: ColumnType[];
  addColumn: (name: string) => void;
  deleteColumn: (id: number) => void;
};

export const ColumnContext = createContext<ColumnContextType>({
  columns: [
    { id: 1, name: 'Открыт' },
    { id: 2, name: 'В работе' },
    { id: 3, name: 'На проверке' },
  ],
  addColumn: () => {},
  deleteColumn: () => {},
});
