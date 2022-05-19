import React from "react";
import { Link } from "react-router-dom";
import './ProductDetail.css'

export default function ButtonsUser (){
    return(
        <div>
            <div>
                <Link to='/' id='click'>
                    <button className='botonIncSesDetail'>Comprar</button>
                </Link>
            </div>
            <div>
                <Link to='/' id='click'>
                    <button className='botonRegistroDetail'>Agregar al carrito</button>
                </Link>
            </div>
        </div>
    )
}