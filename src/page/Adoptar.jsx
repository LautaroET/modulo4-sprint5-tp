import React from 'react'

const Adoptar = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          ¿Cómo Adoptar?
        </h1>
        <div className=" p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Requisitos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ser mayor de edad.</li>
            <li>Compromiso de esterilización.</li>
            <li>Firma de contrato de adopción.</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 ">Proceso</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Elige a tu mascota en la sección </li>
            <li>Contacta al refugio mediante el formulario.</li>
            <li>Visita al animal y conócelo.</li>
            <li>¡Firma de adopción y llévatela a casa!</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Adoptar