import React, { useState } from 'react';
import CategoryForm from '../components/Category/CategoryForm';
import CategoryList from '../components/Category/CategoryList';

const CategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-8 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Categorias</h1>

      <div className="mb-8 bg-black p-6 rounded-lg shadow-md">
        <CategoryForm />
      </div>

      <div className="mb-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Lista de Categorias</h2>
        <input
          type="text"
          placeholder="Procurar por Categoria.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-black p-6 rounded-lg shadow-md">
        <CategoryList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default CategoryPage;
