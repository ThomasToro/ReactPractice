import {NavLink} from "react-router";

export default function Header(){
    let menu = [
        {nombre: "Inicio", enlace:"."},
        {nombre: "IMC", enlace:"/imc"},
        {nombre: "PPT", enlace: "/ppt"}
    ]

    return(
        <header>
            <nav>
                <ul>
                    {
                    menu.map((item,index) =>

                    <li>
                        <NavLink to={item.enlace}>{item.nombre}</NavLink>
                    </li>
                    
                    )

                }
                </ul>
            </nav>
        </header>
    );

    


}