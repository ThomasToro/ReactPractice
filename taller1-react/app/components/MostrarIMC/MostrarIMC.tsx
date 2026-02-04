// Definimos qué "props" acepta el componente
interface PropsMostrar {
  categoria: string;
  descripcion: string;
}

export default function MostrarIMC({ categoria, descripcion }: PropsMostrar) {
    // Si no hay categoría (al inicio), no mostramos nada
    if (!categoria) return null;

    return (
        <div id='resultadoIMC' style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h2>Tu categoría es: {categoria}</h2>
            <p>{descripcion}</p>
        </div>
    );
}