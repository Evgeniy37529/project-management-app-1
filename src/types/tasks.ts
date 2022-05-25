export interface IState {
  status: string;
  error: null | string;
  tasks: ITasks[];
}
export interface ITasks {
  id: string;
  title: string;
  order: number;
  tasks: [];
}
