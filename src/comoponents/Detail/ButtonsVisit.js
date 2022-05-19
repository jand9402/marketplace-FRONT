import React from "react";
import { Link } from "react-router-dom";
import './ProductDetail.css'

export default function ButtonsVisit (){
    return(
        <div className="boxBotonesDetalle">
            <div>
                <Link to='/login' id='click'>
                    <button className='botonIncSesDetail'>Iniciar sesión</button>
                </Link>
            </div>
            <div>
                <Link to='/register' id='click'>
                    <button className='botonRegistroDetail'>Crear cuenta</button>
                </Link>
            </div>
        </div>
    )
}