import instance from './axiosInstance';

export const signUpUser = (userData: { name: string; login: string; password: string }) => {
  const { name, login, password } = userData;
  return instance
    .post('/signup', { name, login, password })
    .then((data) => {
      localStorage.setItem('userId', data.data.id);
      return data.data;
    })
    .catch((e) => {
      throw new Error(`${e.message}`);
    });
};
export const signInUser = (userData: { login: string; password: string }) => {
  const { login, password } = userData;
  return instance
    .post(`/signin`, { login, password })
    .then((data) => {
      return data.data;
    })
    .catch((e) => {
      throw new Error(`${e.message}`);
    });
};
export const deleteUser = (id: string) => {
  try {
    instance.delete(`/users/${id}`);
  } catch (e) {}
};
export const updateInfo = (userData: {
  id: string;
  name: string;
  login: string;
  password: string;
}) => {
  return instance
    .put(`/users/${userData.id}`, {
      name: userData.name,
      login: userData.login,
      password: userData.password
    })
    .then((data) => data.data);
};

export const getUser = (id: string) => {
  return instance.get(`users/${id}`).then((data) => {
    return data.data;
  });
};
