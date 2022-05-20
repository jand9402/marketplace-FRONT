import React from "react";
import './Cards.css'
import CarritoCard from '../../assets/icons/CarritoCards.png'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export const ADD_TO_CAR = 'ADD_TO_CAR'

export default function Card ({id, image, name, price}) {

    const dispatch = useDispatch()

    const addToCar = (payload) => {
        return dispatch({
            type: ADD_TO_CAR,
            payload
        })
    }
    
    return(
        <div className="boxCard">
             <Link to= {'/detailVisit/'+ id}  className= "sinlineaCountCards">
            <img className="imageTamaño" src={image} alt='imagencard'/>
            <div className="nameCardProd">{name}</div>
            <div className="priceCardProd" >${price}</div>
            </Link>
            <button onClick={() => addToCar(id)}>Agregar al carrito</button>
            <img src={CarritoCard} className="carritoCards"/>
        </div>
    )
}