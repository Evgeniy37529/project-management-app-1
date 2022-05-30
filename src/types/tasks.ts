export interface IState {
  status: string;
  error: null | string;
  tasks: ITask[];
}
export interface ITasks {
  id: string;
  title: string;
  order: number;
}
export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: {
    filename: string;
    fileSize: number;
  }[];
}
export interface IUpdateInfoTask {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}
