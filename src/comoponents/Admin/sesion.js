import React from "react";
import Ventas from "./ventas";
import Productos from "./productos";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import Usuarios from "./usuarios";
import './adminAll.css'

export default function SesionAdmin () {
    let data = JSON.parse(localStorage.getItem("userData"))

    return(
        <div>
            <NavBarDetailAdmin/>
            { data.isAdmin? (
            <div className="contenedorSesionAdmin">
                <div className="miSesionName">Mi sesión</div>
                <div className="orederSesionAdmin">
                    <Productos/>
                    <Ventas/>
                    <Usuarios/>
                </div>
            </div>
            ): (<div>No tiene permitido el acceso</div>)}
        </div>
    )
}