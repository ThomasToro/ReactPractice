import { useState } from 'react';

export default function SideBar() {
  // Definimos tus objetos
  const David = {
    nombre: "David",
    git: "https://github.com/DavidToroHrr",
    telefono: "3138945544",
    correo: "davidesteban0726@gmail.com",
    descripcion: "Estudiante de Ingeniería de Sistemas de la UAM."
  };

  const Thomas = {
    nombre: "Thomas",
    git: "https://github.com",
    telefono: "3106430535", // (Cambié este para notar la diferencia)
    correo: "thomy0736@gmail.com",
    descripcion: "Estudiante de Ingeniería de Sistemas de la UAM."
  };

  // El estado inicial será David
  const [perfil, setPerfil] = useState(David);

  return (
    <div id='SideBarNav'>
    <h2>Perfil Seleccionado : {perfil.nombre}</h2>
    <p><strong>Correo:</strong> {perfil.correo}</p>
    <p><strong>Teléfono:</strong> {perfil.telefono}</p>
    <p><strong>Bio:</strong> {perfil.descripcion}</p>
    
    {perfil.git && <a href={perfil.git}>Ver GitHub</a>}

    <hr />
    
    {/* Al hacer clic, pasamos el objeto completo a la función setPerfil */}
    <button onClick={() => setPerfil(David)}>Cargar a David</button>
    <button onClick={() => setPerfil(Thomas)}>Cargar a Thomas</button>
    </div>
  );
};
