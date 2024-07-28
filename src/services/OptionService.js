import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/Options`;

export const getAllOptions = async () => {
    return axios.get(API_URL);
};

export const getOptionById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createOption = async (Option) => {
    return axios.post(API_URL, Option, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const updateOption = async (id, Option) => {
    return axios.put(`${API_URL}/${id}`, Option, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteOption = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
