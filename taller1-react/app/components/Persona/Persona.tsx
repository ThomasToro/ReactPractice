// components/Persona/Persona.tsx
import { useOutletContext } from "react-router";

export default function Persona() {
    // Recogemos la info que viene del SideBar
    const datos: any = useOutletContext();

    return (
        <div >
            <h2>Información de {datos.nombre}</h2>
            <hr />
            <p><strong>Correo:</strong> {datos.correo}</p>
            <p><strong>Teléfono:</strong> {datos.telefono}</p>
            <p><strong>Descripción:</strong> {datos.descripcion}</p>
            <a href={datos.git} target="_blank">Perfil GitHub</a>
        </div>
    );
}