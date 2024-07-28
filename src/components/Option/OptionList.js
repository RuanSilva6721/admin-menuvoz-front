import React, { useEffect, useState } from 'react';
import { getAllOptions, deleteOption } from '../../services/OptionService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const OptionList = () => {
    const [Options, setOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadOptions();
    }, []);

    const loadOptions = async () => {
        const response = await getAllOptions();
        setOptions(response.data);
    };

    const handleDelete = async (id) => {
        await deleteOption(id);
        loadOptions();
    };

    const filteredOptions = Options.filter(Option =>
        Option.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Músicas</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Procurar por música"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border rounded w-full"
                />
            </div>
            <div className="overflow-y-auto max-h-80 p-4 bg-white rounded shadow-md">
                <ul className="list-none space-y-4">
                    {filteredOptions.map(Option => (
                        <li key={Option.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow">
                            <span className="text-gray-700">{Option.title} - {Option.genre} - {Option.duration} mins</span>
                            
                            <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className="ml-4 text-red-500 cursor-pointer hover:text-red-600 transition duration-300" 
                                    onClick={() => handleDelete(Option.id)}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OptionList;
