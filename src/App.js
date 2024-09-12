import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import OptionPage from './pages/OptionPage';


const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4 bg-black min-h-screen">
        <nav className="mb-4 flex justify-center space-x-8">
          <Link 
            to="/" 
            className="text-lg text-white hover:text-white hover:underline"
          >
            Categorias
          </Link>
          <Link 
            to="/Option" 
            className="text-lg text-white hover:text-white hover:underline"
          >
            Opções
          </Link>
        </nav>
        <div className="bg-black shadow-md rounded p-6 text-white">
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/Option" element={<OptionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
