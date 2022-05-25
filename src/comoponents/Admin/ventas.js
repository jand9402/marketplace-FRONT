import React from "react";
import { Link } from "react-router-dom";

export default function Ventas (){
    return(
        <div className="boxProductsInSesion">
            <div className="orderProdAndName">
                <Link to='/admin/ventas' id= 'click'>
                <button className="buttonVentasS"></button>
                </Link>
                <div className="nameProductsSesion">Mis Ventas</div>
            </div>
        </div>
    )
}