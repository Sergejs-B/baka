import API from '../index';

export const createGroup = (data) => API.post('/group/createGroup/', data) || {};
export const getGroup = (groupId) => API.get(`/group/getGroup/${ groupId }`) || {};
export const updateGroup = (data, userId) => API.put(`/group/updateGroup/${ userId }`, data) || {};
export const createGroupInstrument = (data) => API.post('/group/createGroupInstrument/', data) || {};
