import apiClient from './apiClient';

export const fetchGuides = () => apiClient.get('/guides');
export const fetchGuideById = (id) => 
    apiClient.get(`/guides/${id}`, { responseType: 'blob' });
export const createGuide = (data) => {
    return apiClient.post('/guides', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
export const updateGuide = (id, data) => apiClient.patch(`/guides/${id}`, data);
export const deleteGuide = (id) => apiClient.delete(`/guides/${id}`);
