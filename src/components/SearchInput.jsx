// components/SearchInput.jsx
import React, { useState } from "react";

function SearchInput({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Buscar por nombre o ubicación"
        className="w-full p-3 rounded-lg border border-gray-300"
      />
    </div>
  );
}

export default SearchInput;

