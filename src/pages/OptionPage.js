import React from 'react';
import OptionForm from '../components/Option/OptionForm';
import OptionList from '../components/Option/OptionList';

const OptionPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Opções</h1>
      <OptionForm CategoryId={1} /> {/* Passe o ID do álbum ao qual você deseja adicionar músicas */}
      <OptionList />
    </div>
  );
};

export default OptionPage;
