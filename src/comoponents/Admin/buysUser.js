import React from "react";
import { Link } from "react-router-dom";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";

export default function BuysUser () {
let data = JSON.parse(localStorage.getItem("userData"))
    return(
        <div>
            <NavBarDetailAdmin/>
            {data.isAdmin? (
            <div className="contenedorSesionAdmin">
                <Link to= '/admin/users'>
                <button>VOLVER</button>
                </Link>
                <div>soy las ordenes del usriario</div>
            </div>

            ): (<div>No tiene acceso</div>)}
        </div>
    )
}