
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './CarItem.css'
export const REMOVE_ALL_FROM_CAR = 'REMOVE_ALL_FROM_CAR'
export const REMOVE_ONE_FROM_CAR = 'REMOVE_ONE_FROM_CAR'
export const ADD_TO_CAR = 'ADD_TO_CAR'


export default function CarItem({ data }) {
    const { _id, name, image, price, quantity } = data
    const dispatch = useDispatch()

    const removeFromCar = (payload, all = false) => {
        if(all){return dispatch({
            type: REMOVE_ALL_FROM_CAR,
            payload
        })}else{return dispatch({
            type: REMOVE_ONE_FROM_CAR,
            payload
        })
        }
    }
    const addToCar = (payload) => {
        return dispatch({
            type: ADD_TO_CAR,
            payload
        })
    }

    return (
      
        <div className="contenedor_car">
        <div className="row row_en_car">
            <div className="col">
                <img className="imageTamaño" src={image} alt='imagencard' />
            </div>
            <div className="col">
                <div className="nameCardProd">{name}</div>
                <div className="priceCardProd price_en_carrito" >${price}.00 x {quantity} = ${price*quantity}.00</div>
            </div>
            <div className="col">
                <button onClick={() => removeFromCar(_id)}> - </button><button onClick={() => addToCar(_id)}>+</button>
                <button onClick={() => removeFromCar(_id, true)}>Eliminar todos</button>
            </div>
        </div>
        </div>
    )
}

