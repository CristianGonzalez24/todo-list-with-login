import axios from './axios';

export const getTasksRequest = () => axios.get('/tasks');
export const getTask = id => axios.get(`/tasks/${id}`);
export const createTaskRequest = task => axios.post('/tasks', task);
export const updateTask = task => axios.put(`/tasks/${task._id}`, task);
export const deleteTaskRequest = id => axios.delete(`/tasks/${id}`)