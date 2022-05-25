export interface IState {
  status: string;
  error: null | string;
  columns: IColumns[];
}
export interface IColumns {
  id: string;
  title: string;
  order: number;
}
