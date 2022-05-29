import React from "react";
import { Link } from "react-router-dom";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";

export default function BuysUser () {
    return(
        <div>
            <NavBarDetailAdmin/>
            <div className="contenedorSesionAdmin">
                <Link to= '/admin/users'>
                <button>VOLVER</button>
                </Link>
                <div>soy las ordenes del usriario</div>
            </div>
        </div>
    )
}