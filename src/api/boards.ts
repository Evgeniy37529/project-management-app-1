import instance from './axiosInstance';
const BOARDS_BASE_URL = '/boards';

export const createNewBoard = ({ title, description }: { title: string; description: string }) => {
  return instance
    .post(BOARDS_BASE_URL, { title: title, description: description })
    .then((data) => data.data);
};
export const getAllBoards = () => {
  return instance.get(BOARDS_BASE_URL).then((data) => data.data);
};
export const deleteBoardById = (id: string) => {
  return instance.delete(`${BOARDS_BASE_URL}/${id}`);
};
export const getInfoBoardById = (id: string) => {
  return instance(`${BOARDS_BASE_URL}/${id}`).then((data) => data.data);
};
export const updateBoardData = ({ id, title }: { id: string; title: string }) => {
  return instance.put(`${BOARDS_BASE_URL}/${id}`, title).then((data) => data);
};
