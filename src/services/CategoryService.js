import axios from 'axios';

const API_URL = `https://api-node-menuvoz-f9hf.vercel.app/Category`;

export const getAllCategories = async () => {
    return axios.get(`https://api-node-menuvoz-f9hf.vercel.app/Categories`);
};

export const getCategoryById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createCategory = async (Category) => {
    console.log(Category);
    return axios.post(API_URL, Category, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateCategory = async (id, Category) => {
    return axios.put(`${API_URL}/${id}`, Category, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteCategory = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
