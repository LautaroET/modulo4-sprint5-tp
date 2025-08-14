import React from 'react'

const Noticia = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Campaña de esterilización gratuita",
      fecha: "15 Octubre 2023",
      resumen: "Realizaremos 100 esterilizaciones para mascotas de bajos recursos.",
      imagen: "https://nochistlan.gob.mx/wp-content/uploads/2022/05/CampanaEsterilizacion.jpg"
    },
    {
      id: 2,
      titulo: "Max encontró hogar después de 2 años",
      fecha: "5 Octubre 2023",
      resumen: "Este golden retriever fue adoptado por una familia amorosa.",
      imagen: "https://placedog.net/600/400"
    }
  ];

  return (
    <>
      <div className="min-h-screen  py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Noticias</h1>
          
          <div className="space-y-8">
            {noticias.map((noticia) => (
              <div key={noticia.id} className=" rounded-lg shadow-md overflow-hidden">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{noticia.fecha}</span>
                  <h2 className="text-2xl font-bold mt-2 mb-3">{noticia.titulo}</h2>
                  <p className="text-gray-700 mb-4">{noticia.resumen}</p>
                  <button className=" font-semibold hover:underline">
                    Leer más →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12  p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 ">Suscríbete a nuestro Noticias</h3>
            <div className="flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow p-2 border rounded"
              />
              <button className=" px-4 py-2 rounded hover:bg-orange-700">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noticia