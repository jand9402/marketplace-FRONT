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
            <div className="orderDeletAndButton">
                <div className="switch-button">
                    <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"/>
                    <label for="switch-label" class="switch-button__label"></label>
                </div>
                <button className="buttonDetailProductAdmin">Ver detalle</button>
            </div>
        </div>
    )
}