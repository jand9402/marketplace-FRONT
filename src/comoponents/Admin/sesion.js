import React from "react";
import Ventas from "./ventas";
import Productos from "./productos";
import NavBarDetail from "../NavBar/NavBaRDetail";
import './adminAll.css'

export default function SesionAdmin () {
    return(
        <div>
            <NavBarDetail/>
            <div className="contenedorSesionAdmin">
                <div className="miSesionName">Mi sesión</div>
                <div className="orederSesionAdmin">
                    <Productos/>
                    <Ventas/>
                </div>
            </div>
        </div>
    )
}