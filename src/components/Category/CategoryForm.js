import React, { useState } from 'react';
import { createCategory } from '../../services/CategoryService';

const CategoryForm = () => {
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCategory = { nome: nome };
        await createCategory(newCategory);

        setNome('');
        window.location.reload();
       
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-black rounded-lg shadow-md space-y-6 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Adicionar Categoria</h2>
            <div>
                <label className="block text-white font-semibold mb-2">Nome:</label>
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Adicionar Categoria
            </button>
        </form>
    );
};

export default CategoryForm;
