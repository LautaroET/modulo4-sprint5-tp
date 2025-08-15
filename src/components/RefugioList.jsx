import React from "react";
import RefugioCard from "./RefugioCard";

function RefugioList({ refugios, allRefugios, onShowMore }) {
  const canShowMore = refugios.length < allRefugios.length;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {refugios.length > 0 ? (
        <>
          {refugios.map((refugio) => (
            <RefugioCard key={refugio.id} refugio={refugio} />
          ))}
          
          {canShowMore && (
            <div className="col-span-full flex justify-center mt-8">
              <button
                onClick={onShowMore}
                className="bg-amber-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-400 transition duration-300 transform hover:scale-105 dark:bg-yellow-400 dark:hover:bg-yellow-500"
              >
                Mostrar más refugios
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="col-span-full text-center text-xl text-gray-600 dark:text-gray-300">
          No hay refugios para mostrar. ¡Vuelve a intentarlo más tarde!
        </p>
      )}
    </div>
  );
}

export default RefugioList;






