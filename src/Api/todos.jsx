import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://holiday-planner-4lnj.onrender.com",
});
export const getUsers = async () => {
  const response = await todoApi.get(`/api/v1/auth/users`);
  return response.data;
};

export const addUser = async (todo) => {
  return await todoApi.post(`/api/v1/auth/signup`, todo);
  return response.data;
};
export const updateUser= async (todo) => {
  return await todoApi.put(`/api/v1/auth/users/update/:email/${email}`, todo);
};

export const deleteUser = async ({ email }) => {
  return await todoApi.delete(
    `/api/v1/auth/users/delete/:email/${email}`,
    email
  );
};

export default todoApi;
