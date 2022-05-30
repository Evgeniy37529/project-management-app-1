import instance from './axiosInstance';
const COLUMNS_BASE_URL = `/boards`;

export const createNewColumns = (boardId: string, title: string) => {
  return instance
    .post(`${COLUMNS_BASE_URL}/${boardId}/columns`, { title: title })
    .then((data) => data.data);
};
export const loadAllColumns = (boardId: string) => {
  return instance.get(`${COLUMNS_BASE_URL}/${boardId}/columns`).then((data) => data.data);
};
export const deleteColumnById = (boardId: string, columnId: string) => {
  return instance.delete(`${COLUMNS_BASE_URL}/${boardId}/columns/${columnId}`).then(() => columnId);
};
export const getInfoColumnById = (boardId: string, columnId: string) => {
  return instance(`${COLUMNS_BASE_URL}/${boardId}/columns/${columnId}`).then((data) => data.data);
};
export const updateColumnData = ({
  boardId,
  id,
  title,
  order
}: {
  boardId: string;
  id: string;
  title: string;
  order: string;
}) => {
  return instance
    .put(`${COLUMNS_BASE_URL}/${boardId}/columns/${id}`, { title: title, order: order })
    .then((data) => data.data);
};
