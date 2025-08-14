import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    motivo: "adopcion"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, tu mensaje ha sido enviado.`);
    // Aquí iría la lógica para enviar a un backend
  };

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold  mb-8 text-center">Contacto</h1>
        
        <div className=" p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Motivo de contacto</label>
              <select
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 "
              >
                <option value="adopcion">Adopción</option>
                <option value="donacion">Donación</option>
                <option value="voluntariado">Voluntariado</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Nombre Refugio</label>
              <input
                type="text"
                name="refugio"
                value={formData.refugio}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border rounded focus:ring-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Enviar mensaje
            </button>
          </form>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-xl font-bold mb-4">Otras formas de contacto</h3>
            <ul className="space-y-2">
              <li>📧 Email: Atravez del email del refugio</li>
              <li>📞 Teléfono: Telefono del Refugio</li>
              <li>📍 Dirección: Presencial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;