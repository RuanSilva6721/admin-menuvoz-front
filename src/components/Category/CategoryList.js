import React, { useEffect, useState } from 'react';
import { getAllCategories, deleteCategory } from '../../services/CategoryService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CategoryList = ({ searchTerm }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const response = await getAllCategories();
        setCategories(response.data);
    };

    const handleDelete = async (id) => {
        await deleteCategory(id);
        loadCategories();
    };


    const filteredCategories = categories.filter(category =>
        category.nome?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    );

    return (
        <div className="overflow-y-auto max-h-80 p-4 bg-black rounded-lg shadow-lg text-light">
            {filteredCategories.length === 0 ? (
                <p className="text-center text-white">Não há categorias.</p>
            ) : (
                <ul className="list-none space-y-6">
                    {filteredCategories.map(category => (
                        <li key={category.id} className="flex flex-col p-5 bg-black rounded-lg shadow-md hover:bg-black transition duration-300">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                
                                    <div>
                                        <span 
                                            className="text-lg font-semibold text-white cursor-pointer" 
                                            
                                        >
                                            {category.nome}
                                        </span>
                                    </div>
                                </div>
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className="ml-4 text-red-500 cursor-pointer hover:text-red-600 transition duration-300" 
                                    onClick={() => handleDelete(category.id)}
                                />
                            </div>                       
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryList;
