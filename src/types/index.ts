export type UserType = {
  userName: string;
};
export type TodoType = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
  tableId?: number;
};

export type ColumnType = {
  id: number;
  name: string;
};
