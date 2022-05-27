import React from "react";
import { Link } from "react-router-dom";

export default function Usuarios () {
    return(
        <div className="boxProductsInSesion">
            <div className="orderProdAndName">
                <Link to='/admin/usuarios' id= 'click'>
                <button className="buttonUsersS"></button>
                </Link>
                <Link to='/admin/usuarios' id= 'click' className="sinLineaVPU">
                <div className="nameProductsSesion">Usuarios</div>
                </Link>
            </div>
        </div>
    )
}