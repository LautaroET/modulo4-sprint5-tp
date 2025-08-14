import React from 'react'

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-5xl font-bold">
            Bienvenido a Patitas al Rescate
          </h1>
          <p className="text-xl mb-8">
            Conectamos mascotas en busca de hogar con personas.
          </p>
          <img src="/img/home-presentar" alt="Image De Mascota Para Home" />
        </div>
      </div>
    </>
  )
}

export default Home