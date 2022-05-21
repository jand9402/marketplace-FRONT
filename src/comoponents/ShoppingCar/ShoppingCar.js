
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import CarItem from "../CarItem/CarItem";
export const CLEAR_CAR = 'CLEAR_CAR'



export default function ShoppingCar () {
    const carProducts = useSelector(state => state.car)
    const dispatch = useDispatch()
    const clearCar = (payload) => {
        return dispatch({
            type: CLEAR_CAR,
            payload
        })
    }
    return (<div>
        <h1>Carrito de compras</h1>
        <button onClick={() => clearCar()}>Limpiar carrito</button>
        <div className="row">
        {
        carProducts.map((product, index) => <CarItem key={index} data={product}/>)
        }
        </div>
    </div>)
}


