import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/Option`;

export const getAllOptions = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/options`);
};

export const getOptionById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};


export const createOption = async (option) => {
    return axios.post(API_URL, option, {
        headers: {
             'Content-Type': 'application/json'
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
