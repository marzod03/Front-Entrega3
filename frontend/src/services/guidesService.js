import apiClient from './apiClient';

export const fetchGuides = () => apiClient.get('/guides');
export const fetchGuideById = (id) => apiClient.get(`/guides/${id}`);
export const createGuide = (data) => apiClient.post('/guides', data);
export const updateGuide = (id, data) => apiClient.patch(`/guides/${id}`, data);
export const deleteGuide = (id) => apiClient.delete(`/guides/${id}`);
