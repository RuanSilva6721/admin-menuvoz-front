import React, { useState, useEffect } from 'react';
import { createOption } from '../../services/OptionService';
import { getAllCategories } from '../../services/CategoryService';

const OptionForm = () => {
    const [nome, setNome] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [CategoryId, setCategoryId] = useState('');
    const [Categorys, setCategorys] = useState([]);

    useEffect(() => {
        const fetchCategorys = async () => {
            const response = await getAllCategories();
            setCategorys(response.data);
        };

        fetchCategorys();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('duration', duration);
        formData.append('genre', genre);
        formData.append('Category_id', CategoryId);

        await createOption(formData);

        // Clear form
        setNome('');
        setDuration('');
        setGenre('');
        setCategoryId('');
        window.location.reload()
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Adicionar Música</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome:</label>
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duração (minutos):</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gênero:</label>
                <input 
                    type="text" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category:</label>
                <select
                    value={CategoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                    <option value="">Selecionar Category</option>
                    {Categorys.map(Category => (
                        <option key={Category.id} value={Category.id}>
                            {Category.nome}
                        </option>
                    ))}
                </select>
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                Adicionar Música
            </button>
        </form>
    );
};

export default OptionForm;
