import { useState } from 'react';

export default function SideBar() {
  const David = {
    nombre: "David",
    foto: "/david.JPEG", 
    git: "https://github.com/DavidToroHrr",
    telefono: "3138945544",
    correo: "davidesteban0726@gmail.com",
    descripcion: "Estudiante de Ingeniería de Sistemas de la UAM."
  };

  const Thomas = {
    nombre: "Thomas",
    foto: "/thomas.jpeg",
    git: "https://github.com/ThomasToro",
    telefono: "3106430535",
    correo: "thomy0736@gmail.com",
    descripcion: "Estudiante de Ingeniería de Sistemas de la UAM."
  };

  const [perfil, setPerfil] = useState(David);

  return (
    <aside id="SideBarNav" className="sidebar-derecho-fijo">
      {/* Contenedor de la foto y los botones encima */}
      <div className="foto-wrapper">
        <img 
          src={perfil.foto} 
          alt={`Foto de ${perfil.nombre}`} 
          className="perfil-img"
        />
        
        <div className="botones-sobre-foto">
          <button onClick={() => setPerfil(David)}>David</button>
          <button onClick={() => setPerfil(Thomas)}>Thomas</button>
        </div>
      </div>

      <div className="info-perfil">
        <h2>{perfil.nombre}</h2>
        <p><strong>Correo:</strong> {perfil.correo}</p>
        <p><strong>Teléfono:</strong> {perfil.telefono}</p>
        <p className="bio"><strong>Bio:</strong> {perfil.descripcion}</p>
        
        {perfil.git && (
          <a href={perfil.git} target="_blank" rel="noreferrer" className="github-link">
            Ver GitHub
          </a>
        )}
      </div>
    </aside>
  );
}