import React from "react";
import { Link } from "react-router-dom";

export default function Productos () {
    return(
        <div className="boxProductsInSesion">
            <div className="orderProdAndName">
                <Link to='/admin/products' id= 'click'>
                <button className="buttonProductosS"></button>
                </Link>
                <div className="nameProductsSesion">Mis productos</div>
            </div>
        </div>
    )
}