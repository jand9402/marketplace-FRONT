
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import CarItem from "../CarItem/CarItem";
import { locaLSatorage } from "../../redux/actions";
export const CLEAR_CAR = 'CLEAR_CAR'




export default function ShoppingCar () {
    let infoFromLocalStorage = JSON.parse(localStorage.itemCar)
    console.log(infoFromLocalStorage)
    const dispatch = useDispatch()
    let history = useHistory()
    const clearCar = () => {
        
    let locaS = []
    localStorage.setItem("itemCar", JSON.stringify(locaS))
    history.push('/shoppingCar')
    }

    return (<div>
        <h1>Carrito de compras</h1>
        <button onClick={() => clearCar()}>Limpiar carrito</button>
        <Link to='/homeVisit'>
        <button>Volver</button>
        </Link>
        <div className="row">
        {
        // data.car.map((product, index) => <CarItem key={index} data={product}/>)
        infoFromLocalStorage.map((product, index) => <CarItem key={index} data={product}/>)
        }
        </div>
    </div>)
}


