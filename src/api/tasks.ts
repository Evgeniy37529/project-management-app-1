import instance from './axiosInstance';
import { ITask } from '../types/tasks';
import { AxiosPromise } from 'axios';

const TASKS_BASE_URL = `/boards`;

export const createNewTask = (boardId: string, columnId: string, title: string) => {
  return instance
    .post(`${TASKS_BASE_URL}/${boardId}/columns/${columnId}/tasks`, {
      title: title,
      description: title,
      userId: localStorage.getItem('userId')
    })
    .then((data) => data.data);
};
export const loadAllTasks = (boardId: string, columnId: string) => {
  return instance
    .get(`${TASKS_BASE_URL}/${boardId}/columns/${columnId}/tasks`)
    .then((data) => data.data);
};
export const deleteTaskById = (boardId: string, columnId: string, taskId: string) => {
  return instance
    .delete(`${TASKS_BASE_URL}/${boardId}/columns/${columnId}/tasks/${taskId}`)
    .then(() => taskId);
};
export const getInfoTaskById = (
  boardId: string,
  columnId: string,
  taskId: string
): AxiosPromise<ITask> => {
  return instance(`${TASKS_BASE_URL}/${boardId}/columns/${columnId}/tasks/${taskId}`).then(
    (data) => data.data
  );
};
export const updateTaskData = (
  taskId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
) => {
  return instance
    .put(`${TASKS_BASE_URL}/${boardId}/columns/${columnId}/tasks/${taskId}`, {
      title: title,
      order: order,
      description: description,
      userId: userId,
      boardId: boardId,
      columnId: columnId
    })
    .then((data) => data.data);
};
