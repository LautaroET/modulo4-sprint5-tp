import React from 'react';
import RefugioList from "../components/RefugioList";
import Loader from "../components/Loader";
import { useRefugios } from "../hook/useRefugios";

const Refugios = () => {
  const { refugios, allRefugios, isLoading, handleShowMore } = useRefugios();

  return (
    <div className="bg-gradient-to-b from-blue-700 to-indigo-900 min-h-screen p-4 transition-colors duration-700 dark:from-indigo-900 dark:to-gray-900">
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