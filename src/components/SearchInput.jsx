// src/components/SearchInput.jsx
import React from 'react';

function SearchInput({ onInputChange, placeholder = "Buscar..." }) {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="relative w-full max-w-lg">
        {/* Ícono de búsqueda */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <i className="bi bi-search text-lg text-gray-500 dark:text-gray-400"></i>
        </div>
        
        {/* Campo de texto */}
        <input
          type="text"
          placeholder={placeholder} // <-- Ahora usa la prop placeholder
          onChange={handleInputChange}
          className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
        />
      </div>
    </div>
  );
}

export default SearchInput;