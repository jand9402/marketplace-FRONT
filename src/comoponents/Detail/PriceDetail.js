import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./PriceDetail.css";
import axios from 'axios'
import { getProducts } from "../../redux/actions";

export default function PriceDetail () {

    let {id} = useParams()
    let idProducto = {id}
    let test = idProducto.id
    const dispatch = useDispatch()

    let allProducts = useSelector((state) => state.products)
   


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
  
      <div>
  {allProducts?.map((producto) => {
    if(producto._id === test){
                              return (
                                <div key={producto._id}class='boxMacroPrice'>
        
        <div className='princeNameProd'>{producto.name}</div>
        <div className='princeProd'>$ {producto.price}</div>
        <div className='princeCuotProd'>6 cuoutas sin interés {producto.price}</div>
  
        <div className='boxPriceStock'>
          <div className='princeStockName'>Stock disponible:</div>
          <div className='princeStockNumber'>{producto.amount}</div>
        </div>
  
        <div className='boxPriceCatidad'>
          <div className='princeCantName'>Cantidad:</div>
          <select className='princeCantNumber'>
            <option> X unidades </option>
            <option>Soy un map</option>
          </select>
        </div>
  
        <div className='princeAdvertencia'>Para comprar necesita estar registrado</div>
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
                              )}
                          }
                          )
                         
                          }
                          </div>
      
    )
  }