import { useState } from "react";
import MostrarIMC from "~/components/MostrarIMC/MostrarIMC";

export default function Imc() {
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const NIVELES_IMC = [
    { min: 0, max: 18.5, categoria: "Bajo peso", descripcion: "Tu peso está por debajo de lo recomendado." },
    { min: 18.5, max: 24.9, categoria: "Peso saludable", descripcion: "¡Felicidades! Tienes un peso ideal." },
    { min: 25.0, max: 29.9, categoria: "Sobrepeso", descripcion: "Estás ligeramente por encima del peso ideal." },
    { min: 30.0, max: 34.9, categoria: "Obesidad Grado I", descripcion: "Riesgo moderado. Haz más ejercicio." },
    { min: 35.0, max: 39.9, categoria: "Obesidad Grado II", descripcion: "Riesgo severo. Busca asesoría profesional." },
    { min: 40.0, max: Infinity, categoria: "Obesidad Grado III", descripcion: "Riesgo muy alto. Requiere atención médica." }
  ];

  function actualizarTexto(e: React.FormEvent) {
    e.preventDefault();
    calcularImc();
  }

  function calcularImc() {
    const pesoKilos = parseFloat(peso) * 0.453592;
    const alturaNum = parseFloat(altura);
    let resultado = pesoKilos / (alturaNum * alturaNum);

    const info = NIVELES_IMC.find(nivel => resultado >= nivel.min && resultado <= nivel.max) 
                 || { categoria: "Desconocido", descripcion: "Valor fuera de rango" };

    setCategoria(info.categoria);
    setDescripcion(info.descripcion);
  }

  return (
    <div className="imc-page">
      <div className="imc-container">
        <h1>Calculadora de IMC</h1>
        <p>Ingresa tus datos para conocer tu índice de masa corporal.</p>

        <form onSubmit={actualizarTexto} className="imc-form">
          <div className="input-group">
            <label>Nombre:</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Juan" />
          </div>

          <div className="input-group">
            <label>Altura (m):</label>
            <input type="number" step="0.01" onChange={(e) => setAltura(e.target.value)} placeholder="Ej: 1.75" />
          </div>

          <div className="input-group">
            <label>Peso (lbs):</label>
            <input type="number" step="0.1" onChange={(e) => setPeso(e.target.value)} placeholder="Ej: 160" />
          </div>

          <button type="submit" className="btn-calcular">Calcular ahora</button>
        </form>

        <div className="resultado-imc">
          <MostrarIMC categoria={categoria} descripcion={descripcion} />
        </div>
      </div>
    </div>
  );
}