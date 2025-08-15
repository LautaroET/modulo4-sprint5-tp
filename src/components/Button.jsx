// src/components/Button.jsx

import React from 'react';

const Button = ({ children, onClick, ...props }) => {
  // Aquí se define el único estilo para todos los botones.
  const buttonStyles = 'bg-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-indigo-600 transition duration-300';
  
  return (
    <button
      onClick={onClick}
      className={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;