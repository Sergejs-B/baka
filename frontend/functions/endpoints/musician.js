import API from '../index';

export const createMusician = (data, userId) => API.post(`/musician/create/${ userId }`, data) || {};
export const getMusician = (userId) => API.get(`/musician/getMusician/${ userId }`) || {};
export const updateMusician = (data, userId) => API.put(`/musician/updateMusician/${ userId }`, data) || {};
