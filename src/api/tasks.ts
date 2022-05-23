import instance from './axiosInstance';
const boardsId = '';
const columnsId = '';
const TASKS_BASE_URL = `/boards/${boardsId}/${columnsId}`;

export const createNewTask = ({ title }: { title: string }) => {
  return instance.post(TASKS_BASE_URL, { title: title }).then((data) => data.data);
};
export const loadAllTasks = () => {
  return instance.get(TASKS_BASE_URL).then((data) => data.data);
};
export const deleteTaskById = (id: string) => {
  return instance.delete(`${TASKS_BASE_URL}/${id}`);
};
export const getInfoTaskById = (id: string) => {
  return instance(`${TASKS_BASE_URL}/${id}`).then((data) => data.data);
};
export const updateTaskData = ({
  id,
  title,
  order
}: {
  id: string;
  title: string;
  order: string;
}) => {
  return instance
    .put(`${TASKS_BASE_URL}/${id}`, { title: title, order: order })
    .then((data) => data);
};
