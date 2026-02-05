import { NavLink } from "react-router";

export default function Header() {
    let menu = [
        { nombre: "Inicio", enlace: "/" },
        { nombre: "IMC", enlace: "/imc" },
        { nombre: "PPT", enlace: "/ppt" }
    ];

    return (
        <header className="main-header">
            <nav className="header-nav">
                <ul className="header-list">
                    {menu.map((item, index) => (
                        <li key={index} className="header-item">
                            <NavLink 
                                to={item.enlace} 
                                className={({ isActive }) => isActive ? "active-link" : "nav-link"}
                            >
                                {item.nombre}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}