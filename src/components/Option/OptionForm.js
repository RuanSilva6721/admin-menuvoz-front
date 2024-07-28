import React, { useState, useEffect } from 'react';
import { createOption } from '../../services/OptionService';
import { getAllCategories } from '../../services/CategoryService';

const OptionForm = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState(null);
    const [categoriaId, setCategoriaId] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            const response = await getAllCategories();
            setCategorias(response.data);
        };

        fetchCategorias();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newOption = {
            nome,
            descricao,
            preco,
            imagem, // A imagem agora é uma string Base64
            categoriaId
        };

        await createOption(newOption);

        // Clear form
        setNome('');
        setDescricao('');
        setPreco('');
        setImagem('');
        setCategoriaId('');
        //window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Adicionar Opções</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição:</label>
                <input 
                    type="text" 
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preço:</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Url Imagem:</label>
                <input 
                    type="text" 
                    value={imagem} 
                    onChange={(e) => setImagem(e.target.value)} 
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria:</label>
                <select
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                    <option value="">Selecionar Categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
            </div>
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                Adicionar Opções
            </button>
        </form>
    );
};

export default OptionForm;
