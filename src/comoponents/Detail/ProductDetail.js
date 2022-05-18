import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./PriceDetail.css";
import { getProducts } from "../../redux/actions";



export default function ProductDetail () {

    let {id} = useParams()
    let idProducto = {id}
    let test = idProducto.id
    const dispatch = useDispatch()
    let allProducts = useSelector((state) => state.products)
    console.log('hola')
    

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  
  return ( <div>
    {allProducts?.map((producto) => {
                  if(producto._id === test){
                                            return (
                                              <div key={producto._id}>
                                              <div className='positionButtonVolverDetai'>
                                                <Link to='/homeVisit' id='click'>
                                                  <button className='botonVolverDetail'>VOLVER</button>
                                                </Link>
                                              </div>
                                        
                                              <div className='boxDetailProducto'>
                                                <img className='imagenDetailProd' src={producto.image} alt='char-img' />
                                                <div className='boxDetailDescription'>
                                                  <div className='detailDescripcionName'>Descripción: </div>
                                                  <div>{producto.description}</div>
                                                </div>
                                        
                                                <div className='boxTablaCaracteristicas'>
                                                  <div className='tituloDetailCaracteristicas'>{producto.name}</div>
                                        
                                                  <div className='boxTablaCarBase'>
                                                    <div className='boxNameMarca'>Marca</div>{producto.brand}
                                                    <div className='boxContDesModelo'>
                                                      <div className='boxNameModelo'>Modelo</div>{producto.model}
                                                    </div>
                                                    <div className='boxNameDimensiones'>Dimensiones</div>{producto.dimensions.$numberDecimal}
                                                    <div className='boxContDesCantidad '>
                                                      <div className='boxNameCantidad'>Cantidad</div>{producto.amount}
                                                    </div>
                                                    <div className='boxNameEstado'>Estado</div>{producto.condition}
                                                    <div className='boxContDesOtros'>
                                                      <div className='boxNameOtros'>Otros</div>{producto.other}
                                                    </div>
                                                  </div>
                                        
                                                </div>
                                        
                                              </div>
                                            </div>
                                            )}
                                        }
                                        )
               
        }
   
  </div>
    
  )
}
