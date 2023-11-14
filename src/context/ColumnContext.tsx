import { createContext } from 'react';
import { ColumnType } from '@/types';

type ColumnContextType = {
  columns: ColumnType[];
  addColumn: (name: string) => void;
  deleteColumn: (id: number) => void;
};

export const ColumnContext = createContext<ColumnContextType>({
  columns: [],
  addColumn: () => {},
  deleteColumn: () => {},
});
