
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import CarItem from "../CarItem/CarItem";
import { locaLSatorage } from "../../redux/actions";
import './ShoppingCar.css'
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
        <div className="contenedor_del_contendor">
        <div className="contenedor_botones_car">
            
        <Link to='/home'>
        <button type="button" class="btn btn-primary btn-lg">Volver</button>
        </Link>
        
        
        <button type="button" onClick={() => clearCar()} class="btn btn-secondary btn-lg">Limpiar Carrito</button>
        
        </div>
        </div>
        <div className="row">
        {
        // data.car.map((product, index) => <CarItem key={index} data={product}/>)
        infoFromLocalStorage.map((product, index) => <CarItem key={index} data={product}/>)
        }
        </div>
    </div>)
}


