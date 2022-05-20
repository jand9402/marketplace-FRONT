
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import CarItem from "../CarItem/CarItem";


const ShoppingCar = () =>{
    const carProducts = useSelector(state => state.car)
    
    const removeFromCar = () => {}
    const clearCar = () => {}
    
    return (<div>
        <h1>Carrito de compras</h1>
        <button onClick={clearCar}>Limpiar carrito</button>
        {
        carProducts.map((product, index) => <CarItem key={index} data={product} removeFromCar={removeFromCar}/>)
        }
    </div>)
}


export default ShoppingCar