import instance from './axiosInstance';
const boardsId = '';
const COLUMNS_BASE_URL = `/boards/${boardsId}/columns`;

export const createNewColumns = ({ title }: { title: string }) => {
  return instance.post(COLUMNS_BASE_URL, { title: title }).then((data) => data.data);
};
export const loadAllColumns = () => {
  return instance.get(COLUMNS_BASE_URL).then((data) => data.data);
};
export const deleteColumnById = (id: string) => {
  return instance.delete(`${COLUMNS_BASE_URL}/${id}`);
};
export const getInfoColumnById = (id: string) => {
  return instance(`${COLUMNS_BASE_URL}/${id}`).then((data) => data.data);
};
export const updateColumnData = ({
  id,
  title,
  order
}: {
  id: string;
  title: string;
  order: string;
}) => {
  return instance
    .put(`${COLUMNS_BASE_URL}/${id}`, { title: title, order: order })
    .then((data) => data);
};
