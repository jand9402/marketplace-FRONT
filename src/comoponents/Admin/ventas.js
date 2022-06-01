import React from "react";
import { Link } from "react-router-dom";

export default function Ventas (){
    return(
        <div className="boxProductsInSesion">
            <div className="orderProdAndName">
                <Link to='/admin/ventas' id= 'click'>
                <button className="buttonVentasS"></button>
                </Link>
                <Link to='/admin/ventas' id= 'click' className="sinLineaVPU">
                <div className="nameProductsSesion">Mis Ventas</div>
                </Link>
            </div>
        </div>
    )
}