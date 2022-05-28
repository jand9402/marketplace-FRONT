import React from "react";
import { Link } from "react-router-dom";

export default function Productos () {
    return(
        <div className="boxProductsInSesion">
            <div className="orderProdAndName">
                <Link to='/admin/products' id= 'click'>
                <button className="buttonProductosS"></button>
                </Link>
                <Link to='/admin/products' id= 'click' className="sinLineaVPU">
                <div className="nameProductsSesion">Mis productos</div>
                </Link>
            </div>
        </div>
    )
}