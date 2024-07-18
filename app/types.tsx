export type task = {
  id: number;
  createdAt: string;
  priority: boolean;
  tag: string;
  taskName: string;
  taskDescription: string;
  location: string;
  completed: boolean;
  editing: boolean;
};
export type getData = {
  id: number;
  createdAt: string;
  tag: string;
  priority: boolean;
  taskName: string;
  taskDescription: string;
  location: string;
};

export type sendData = {
  id: number;
  createdAt: string;
  tag: string;
  priority: boolean;
  taskName: string;
  taskDescription: string;
  location: string;
};
