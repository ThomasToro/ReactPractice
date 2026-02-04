interface PropsMostrar {
    pregunta: string;
    respuesta: string;
}
export default function PregRes({pregunta,respuesta}:PropsMostrar) {
    
    return(
        <div>
            <h3>Pregunta</h3>
            <p>{pregunta}</p>
            <h3>Respuesta</h3>
            <p>{respuesta}</p>
        </div>

    );

}