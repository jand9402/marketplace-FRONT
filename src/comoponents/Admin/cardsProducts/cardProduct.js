import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './cardsProducts.css'

export default function CardProducts({ id, image, name, price }) {

    return (
        <div className="boxCardProductAdmin">
            <img className="imageCardAdmin" src={image[0]} alt='imageCardAdmin' />
            <div className="boxNamePriceProdAdm ">
                <div className="productAdminName">{name}</div>
                <div className="productAdminPrice">${price}</div>
            </div>
            
            <div className="orderDeletAndButton">
                <button className="buttonDetailProductAdmin">Eliminar</button>
                <Link to={'/admin/products/detail/' + id}  id= 'click'>
                <button className="buttonDetailProductAdmin">Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}