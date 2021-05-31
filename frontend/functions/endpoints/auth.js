import API from '../index';

export const register = (data) => API.post('/auth/local/register', data) || {};
export const login = (data) => API.post('/auth/local', data) || {};
