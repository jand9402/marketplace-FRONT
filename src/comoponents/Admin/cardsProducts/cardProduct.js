import React from "react";
// import { Link } from "react-router-dom";
import './cardsProducts.css'

export default function CardProducts({ id, image, name, price }) {

    return (
        <div className="boxCardProductAdmin">
            <img className="imageCardAdmin" src={image} alt='imageCardAdmin' />
            <div className="boxNamePriceProdAdm ">
                <div className="productAdminName">{name}</div>
                <div className="productAdminPrice">${price}</div>
            </div>
            <button>Ver detalle</button>
        </div>
    )
}