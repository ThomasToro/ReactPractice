import { useState } from "react";
import MostrarIMC from "~/components/MostrarIMC/MostrarIMC";

export default function Imc(){
const [categoria, setCategoria] = useState('');
const [descripcion, setDescripcion] = useState('');

const [nombre, setNombre]=useState('');
const [altura, setAltura]=useState('');
const [peso, setPeso]=useState('');

const NIVELES_IMC = [
  {
    min: 0,
    max: 18.5,
    categoria: "Bajo peso",
    descripcion: "Tu peso está por debajo de lo recomendado. Es importante consultar a un profesional.",
  },
  {
    min: 18.5,
    max: 24.9,
    categoria: "Peso saludable",
    descripcion: "¡Felicidades! Tienes un peso ideal para tu estatura.",
  },
  {
    min: 25.0,
    max: 29.9,
    categoria: "Sobrepeso",
    descripcion: "Estás ligeramente por encima del peso ideal. Mantén una dieta balanceada.",
  },
  {
    min: 30.0,
    max: 34.9,
    categoria: "Obesidad Grado I",
    descripcion: "Riesgo moderado. Sería bueno incrementar la actividad física.",
  },
  {
    min: 35.0,
    max: 39.9,
    categoria: "Obesidad Grado II",
    descripcion: "Riesgo severo. Es recomendable buscar asesoría nutricional.",
   
  },
  {
    min: 40.0,
    max: Infinity,
    categoria: "Obesidad Grado III",
    descripcion: "Riesgo muy alto (Mórbida). Requiere atención médica prioritaria.",
  }
];



// const [datosIMC,setDatosIMC]=useState({categoria:'', descripcion:''});


function manejadorNombre(e: React.ChangeEvent<HTMLInputElement>){
    setNombre(e.target.value);
}

function manejadorAltura(e: React.ChangeEvent<HTMLInputElement>){
    setAltura(e.target.value);
}

function manejadorPeso(e: React.ChangeEvent<HTMLInputElement>){
    setPeso(e.target.value);
}

function actualizarTexto(e: React.FormEvent) {
    e.preventDefault();
    calcularImc();
}

function calcularImc(){
    const pesoKilos=parseFloat(peso)*0.453592;
    let resultado=pesoKilos/(parseFloat(altura)*parseFloat(altura));

    const info=obtenerInfoIMC(resultado);
    
    setCategoria(info.categoria);
    setDescripcion(info.descripcion);


    
}
function obtenerInfoIMC(valorCalculado: any) {
    // Buscamos el objeto donde el IMC encaje entre el mínimo y el máximo
    const resultado = NIVELES_IMC.find(nivel => 
        valorCalculado >= nivel.min && valorCalculado <= nivel.max
    );

    return resultado || { categoria: "Desconocido", descripcion: "Valor fuera de rango" };
}



    return(
        <div>
            <h1>Imc</h1>
            
            <form onSubmit={actualizarTexto}>

                <label htmlFor="">
                    Nombre:
                    <input type="text" 
                    onChange={manejadorNombre} />
                </label>

                <label htmlFor="">
                    Altura en metros:
                    <input type="text" 
                    onChange={manejadorAltura}/>
                </label>

                <label htmlFor="">
                    Peso en libras:
                    <input type="text" 
                    onChange={manejadorPeso}/>
                </label>

                <button type="submit">calcular IMC</button>

                
            </form>
            <MostrarIMC 
            categoria={categoria} 
            descripcion={descripcion} 
            
            />
            

        
        </div>
        
        

    
    );
}