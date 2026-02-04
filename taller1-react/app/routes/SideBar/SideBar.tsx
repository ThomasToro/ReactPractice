import { Link, Outlet, useLocation } from "react-router";

export default function SideBar() {
    const location = useLocation();

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
        telefono: "3106430535",
        correo: "thomy0736@gmail.com",
        descripcion: "Estudiante de Ingeniería de Sistemas de la UAM."
    };

    // Lógica: Si la URL es exactamente /thomas, mandamos a Thomas.
    // Para cualquier otra ruta del SideBar, mandamos a David.
    const infoActual = location.pathname.includes("/thomas") ? Thomas : David;

    return (
        <div >
            {/* ESTE NAVEGADOR SIEMPRE ESTARÁ VISIBLE */}
            <nav>
                <h2>Menú Global</h2>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/imc">Calculadora IMC</Link></li>
                    <li><Link to="/ppt">Piedra Papel Tijera</Link></li>
                    <hr />
                    <h3>Equipo</h3>
                    <li><Link to="/david">Perfil David</Link></li>
                    <li><Link to="/thomas">Perfil Thomas</Link></li>
                </ul>
            </nav>

            <main >
                {/* Aquí se cargará Inicio, IMC, PPT o Persona */}
                <Outlet context={infoActual} />
            </main>
        </div>
    );
}