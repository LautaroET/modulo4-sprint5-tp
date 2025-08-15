import React, { useState } from 'react';
import RefugioList from "../components/RefugioList";
import Loader from "../components/Loader";
import SearchInput from "../components/SearchInput";
import { useRefugios } from "../hook/useRefugios";

const Refugios = () => {
  const [searchValue, setSearchValue] = useState("");
  const { refugios, allRefugios, isLoading, handleShowMore } = useRefugios(searchValue);

  return (
    <div className="bg-gradient-to-b from-blue-700 to-indigo-900 min-h-screen p-4 transition-colors duration-700 dark:from-indigo-900 dark:to-gray-900">
      
      {/* Buscador solo por nombre */}
      <SearchInput onSearchChange={setSearchValue} />

      {isLoading ? (
        <Loader />
      ) : (
        <RefugioList 
          refugios={refugios} 
          allRefugios={allRefugios} 
          onShowMore={handleShowMore} 
        />
      )}
    </div>
  );
};

export default Refugios;
