import React, { useEffect, useState } from 'react';
import { getAllOptions, deleteOption } from '../../services/OptionService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const OptionList = () => {
    const [options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadOptions();
    }, []);

    const loadOptions = async () => {
        try {
            const response = await getAllOptions();
            console.log("Dados carregados:", response.data); // Verifique os dados recebidos
            setOptions(response.data || []); // Garantia de que options é sempre um array
        } catch (error) {
            console.error("Erro ao carregar opções:", error);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            await deleteOption(id);
            loadOptions();
        } catch (error) {
            console.error("Erro ao deletar opção:", error);
        }
    };

    const filteredOptions = options.filter(option =>
        option.nome?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    );

    return (
        <div className="p-6 bg-black min-h-screen">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Lista de Opções</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Procurar por opção"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border rounded w-full"
                />
            </div>
            <div className="overflow-y-auto max-h-80 p-4 bg-black rounded shadow-md text-white">
                <ul className="list-none space-y-4">
                    {filteredOptions.map(option => (
                        <li key={option.id} className="flex justify-between items-center p-3 bg-black rounded-lg shadow">
                            <img 
                                        src={option.imagem} 
                                        alt={option.nome} 
                                        className="w-16 h-16 object-cover rounded"
                                    />
                            <span className="text-white">
                                {option.nome} - {option.descricao} - {option.preco} - {option.categoriaId}
                            </span>
                            <FontAwesomeIcon 
                                icon={faTrash} 
                                className="ml-4 text-red-500 cursor-pointer hover:text-red-600 transition duration-300" 
                                onClick={() => handleDelete(option.id)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OptionList;
