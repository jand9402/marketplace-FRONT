import React from "react";
import NavBaRSesionUsers from "../NavBar/navBarSesionUsers";
import './miSesion.css'

export default function MiSesion (){
    return(
        <div>
            <NavBaRSesionUsers/>
            <div className="contenedorSesionUser">
            soy la sesión del usuario, tengo el registro mis compras
            </div>
        </div>
    )
}