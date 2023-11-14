import { ReactNode, useState } from 'react';
import { ColumnContext } from '@/context';
import { ColumnType } from '@/types';

const initialTableItem = [
  { id: 1, name: 'Открыт' },
  { id: 2, name: 'В работе' },
  { id: 3, name: 'На проверке' },
];

export const ColumnProvider = ({ children }: { children: ReactNode }) => {
  const [columns, setColumns] = useState<ColumnType[]>(initialTableItem);

  const addColumn = (name: string) => {
    setColumns([...columns, { id: columns.length + 1, name }]);
  };

  const deleteColumn = (id: number) => {
    setColumns(columns.filter((column) => column.id !== id));
  };

  return <ColumnContext.Provider value={{ columns, addColumn, deleteColumn }}>{children}</ColumnContext.Provider>;
};
