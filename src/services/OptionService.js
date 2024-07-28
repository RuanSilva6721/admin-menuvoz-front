import axios from 'axios';

const API_URL = `https://api-node-menuvoz-f9hf.vercel.app/Option`;

export const getAllOptions = async () => {
    return axios.get(`https://api-node-menuvoz-f9hf.vercel.app/options`);
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
