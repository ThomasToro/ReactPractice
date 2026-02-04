import { useState } from "react";

export default function Ppt(){
    //Haremos un piedra papel o tijera donde el usuario verá 3 imagenes, una de piedra, tra de papel y otra de tijera, las 3 son circulares, y cuando escoja la primera por ejemplo, o sea hacerle clic, lo que pasará es que se activará la funcion de generar resultado y de  acuerdo a eso, el resultado se mostrara en pantalla teniendo en cuneta el resultado que se generó en generarresultado, tambien tendremos un contador de vitorias y derrotas
    

    const [usuario, setUsuario] = useState<number | null> (null);
    const [maquina, setMaquina] = useState<number | null> (null); 
    const [resultado, setResultado] = useState <string> ("");
    const [victorias, setVictorias] = useState(0);
    const [derrotas, setDerrotas] = useState(0);

    const imagenResultado : Record<string,string> = {
        ganaste: "/ganaste.png",
        perdiste: "/perdiste.png",
        empate: "/empate.png"
        
    };

    const ganar = () => setVictorias(v=>v+1);
    const perder = () => setDerrotas(d=> d+1);

    function jugar(eleccionUsuario:number){
         setUsuario(eleccionUsuario);

         //aca vamos a generar la eleccion de la maquina

         const eleccionMaquina= Math.floor(Math.random()*3)+1;
         setMaquina(eleccionMaquina);

         //ya tenemos las dos elecciones, entonces podemos comparar 
         //

         let mensaje="";

         if (eleccionUsuario==eleccionMaquina) {
            mensaje="empate";
            
         } else if (
            eleccionUsuario === 1 && eleccionMaquina ===3 ||
            eleccionUsuario === 2 && eleccionMaquina === 1 || 
            eleccionUsuario === 3 && eleccionMaquina === 2
         ) {
            mensaje = "ganaste";
            ganar();
         }else
         {
            mensaje="perdiste";
            perder();
         }

         setResultado(mensaje);

    }
    return(
        <div>
            <h1>Piedra Papel o Tijera</h1>
            <p>Escoge una opcion</p>

            <div>
                <button onClick={()=> jugar(1)} title="Pieda">
                    <img src="/piedra.png" alt="Piedra"  width={100} height={100}/>
                </button>

                <button onClick={()=> jugar(2)} title="Papel">
                    <img src="/papel.png" alt="Papel"  width={100} height={100}/>
                </button>

                <button onClick={()=> jugar(3)} title="Tijera">
                    <img src="/tijera.png" alt="Tijera"  width={100} height={100}/>
                </button>
            </div>

            <div>

                <div>
                    <h3>{resultado}</h3>
                    <h3>{ (
                        <img src={imagenResultado[resultado]}
                        alt="Ganaste"
                        width={400}
                        height={400}
                        />

                    )}</h3>


                </div>

                <div>
                    <div>
                        <h3>Vicorias: <span>{victorias}</span></h3>
                        
                    </div>

                    <div>
                        <h3>Derrotas: <span>{derrotas}</span> </h3>
                        
                    </div>
                </div>
            </div>







        </div>
        
        


    );





    



}