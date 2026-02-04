
import PregRes from "~/components/PregRes/PregRes";
export default function Inicio(){
    const PREGUNTA_RESPUESTA = [
  {
    "Qué es React": "Es una biblioteca de JavaScript de código abierto orientada a la creación de interfaces de usuario basadas en componentes de forma declarativa y eficiente."
  },
  {
    "Qué es la arquitectura de componentes": "Es un patrón de diseño que divide la interfaz en piezas independientes, reutilizables y aisladas (componentes), lo que facilita el mantenimiento y la escalabilidad del código."
  },
  {
    "Qué es el proceso de transpilación": "Es la transformación de código escrito en una versión avanzada de JS (o JSX) a una versión de JavaScript que el navegador pueda entender (normalmente ES5), usando herramientas como Babel."
  },
  {
    "Qué es JSX": "Es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro de archivos JS, facilitando la visualización de la estructura de la interfaz."
  },
  {
    "Qué son los hooks": "Son funciones especiales (como useState o useEffect) que permiten 'enganchar' el estado y otras características de React en componentes funcionales sin necesidad de escribir clases."
  },
  {
    "Qué es VITE": "Es una herramienta de construcción (build tool) moderna que ofrece un servidor de desarrollo extremadamente rápido gracias al uso de módulos nativos de JS (ESM) y una compilación optimizada."
  },
  {
    "Qué es STATE": "Es un objeto interno de un componente que almacena datos que pueden cambiar con el tiempo. Cuando el 'state' cambia, React re-renderiza el componente para actualizar la vista."
  },
  {
    "Qué son PROPS": "Son argumentos (propiedades) que se pasan de un componente padre a un componente hijo. Son de solo lectura y sirven para que los componentes se comuniquen entre sí."
  }
];
    return(<div>

    
        <h1>Inicio</h1>

        {PREGUNTA_RESPUESTA.map((item, index) => {
            const pregunta = Object.keys(item)[0];
            const respuesta = item[pregunta];
            return <PregRes key={index} pregunta={pregunta} respuesta={respuesta} />;
        })}
    </div>
    );

}