import React from 'react'

const Colabora = () => {
  return (
    <>
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Colabora con Nosotros</h1>
        
        {/* Sección de Donaciones */}
        <div className="p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Donaciones Económicas</h2>
          <p className="mb-4">Tu aporte ayuda a cubrir gastos de alimentos, medicinas y cuidados veterinarios.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-orange-300 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Transferencia Bancaria</h3>
              <p className="text-sm">Banco: BBVA<br />Cuenta: Esta no es una Cuenta Bancaria Falsa</p>
            </div>
            <div className="border border-orange-300 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">PayPal</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-500">
                Donar ahora
              </button>
            </div>
            <div className="border border-orange-300 p-4 rounded-lg text-center">
              <h3 className="font-bold mb-2">Mercado Pago</h3>
              <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Escanear QR
              </button>
            </div>
          </div>
          <br />
          <p className='font-bold mb-8 text-center'><small>Donaciones Económicas desahabilida</small></p>
        </div>

        {/* Otras formas de colaborar */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 ">Donación de Insumos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Alimento balanceado</li>
              <li>Cobijas y toallas</li>
              <li>Juguetes para mascotas</li>
              <li>Medicinas (consultar lista)</li>
            </ul>
          </div>

          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 ">Voluntariado</h2>
            <p className="mb-4">Únete a nuestro equipo:</p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre completo" 
                className="w-full p-2 border rounded"
              />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full p-2 border rounded"
              />
              <button 
                type="submit" 
                className=" px-4 py-2 rounded "
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Colabora