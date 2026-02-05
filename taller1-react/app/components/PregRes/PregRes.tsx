interface PropsMostrar {
    pregunta: string;
    respuesta: string;
}

export default function PregRes({ pregunta, respuesta }: PropsMostrar) {
    return (
        <div className="preg-res-card">
            <div className="preg-seccion">
                <span className="etiqueta-badge preg">Pregunta</span>
                <p className="texto-contenido">{pregunta}</p>
            </div>
            
            <div className="res-seccion">
                <span className="etiqueta-badge res">Respuesta</span>
                <p className="texto-contenido">{respuesta}</p>
            </div>
        </div>
    );
}