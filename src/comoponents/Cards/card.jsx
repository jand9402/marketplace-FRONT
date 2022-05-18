import React from "react";
import './Cards.css'
import CarritoCard from '../../assets/icons/CarritoCards.png'

export default function Card ({image, name, price}) {
    return(
        <div className="boxCard">
            <img className="imageTamaño" src={image} alt='imagencard'/>
            <div className="nameCardProd">{name}</div>
            <div className="priceCardProd" >${price}</div>
            <img src={CarritoCard} className="carritoCards"/>
        </div>
    )
}