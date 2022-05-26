import instance from './axiosInstance';
const boardsId = localStorage.getItem('currentBoardId');
const TASKS_BASE_URL = `/boards/${boardsId}/columns`;

export const createNewTask = ({ title }: { title: string }) => {
  return instance.post(TASKS_BASE_URL, { title: title }).then((data) => data.data);
};
export const loadAllTasks = () => {
  return instance.get(TASKS_BASE_URL).then((data) => data.data);
};
export const deleteTaskById = (columnId: string, taskId: string) => {
  return instance.delete(`${TASKS_BASE_URL}/${columnId}/tasks/${taskId}`);
};
export const getInfoTaskById = (id: string) => {
  return instance(`${TASKS_BASE_URL}/${id}`).then((data) => data.data);
};
export const updateTaskData = ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
}: {
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}) => {
  return instance
    .put(`${TASKS_BASE_URL}/${id}`, {
      title: title,
      order: order,
      description: description,
      userId: userId,
      boardId: boardId,
      columnId: columnId
    })
    .then((data) => data);
};
