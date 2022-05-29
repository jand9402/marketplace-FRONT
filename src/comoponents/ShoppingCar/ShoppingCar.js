
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory} from "react-router-dom";
import CarItem from "../CarItem/CarItem";
import { locaLSatorage } from "../../redux/actions";
import './ShoppingCar.css'
import carritoVacio from '../../assets/icons/carritoVacio.png'
export const CLEAR_CAR = 'CLEAR_CAR'




export default function ShoppingCar () {
    let infoFromLocalStorage = JSON.parse(localStorage.itemCar)
    const dispatch = useDispatch()
    let history = useHistory()
    const clearCar = () => {
    let locaS = []
    localStorage.setItem("itemCar", JSON.stringify(locaS))
    history.push('/shoppingCar')
    }

    return (
    <div>
    {localStorage.itemCar.length>2?<div className="container">
        
    <div className='row'>
    
    <div className='divVolver'>
    <Link to='/'>
    <button className='botonVolverCarrito'>Volver</button>
    </Link>
    </div>
    
    <div className='divLimpiar'>
    <button className='botonLimpiarCarrito' onClick={() => clearCar()}>Limpiar Carrito</button>
    </div>
    
    </div>
    
    <div >
    {
    // data.car.map((product, index) => <CarItem key={index} data={product}/>)
    infoFromLocalStorage.map((product, index) => <CarItem key={index} data={product}/>)
    }
    </div>
    <div className="divContinuarCompra">
     <Link to="/CheckOut"> 
        <button className="continuarCompra">Continuar con la compra</button>
         </Link> 
    </div>
</div>:<div className="container containerVacioCarrito">
        
        <div className='elCarritoVacio'>El carrito esta vacio</div>
        <Link to='/'>
        <button className='irAComprar'>Volver a la tienda</button>
        </Link>
        <div className='carritoVacio'>
            <img className='imagenCarritoVacio' src={carritoVacio}/>
        </div>
        </div >
            }
</div>)
}


