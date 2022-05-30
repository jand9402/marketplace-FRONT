import React from 'react'
import { useEffect } from "react";
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./ProductDetail.css";
import { getProducts } from "../../redux/actions";


export default function DescriptionProduct () {

    let {id} = useParams()
    let idProducto = {id}
    let test = idProducto.id
    const dispatch = useDispatch()
    let allProducts = useSelector((state) => state.products)
    

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return ( <div>
    <div>
      {allProducts?.map((producto) => {
        if(producto._id === test){
          return (
          <div className='boxDetailProducto' key={producto._id}>
            <div> 
              <div className='boxCaracteristicas'>
                <div className='detailDescripcionName'>Características</div>
                <div className='lineaDetail' ></div>
                <div className='boxMarcModel'>
                  <div className='boxCaractLadoA'>
                    <div className='nameMarcaModel'>Marca:</div>
                    <div className='nameContenMarcaModel'>{producto.brand}</div>
                  </div>
                  <div className='boxCaractLadoA'>
                    <div className='nameMarcaModel'>Modelo:</div>
                    <div className='nameContenMarcaModel'>{producto.model}</div>
                  </div>
                </div>
                <div className='lineaVerticalDetalle' ></div>
                  <div className='boxDimenEstado'>
                    <div className='boxCardDimenEstado'>
                      <div className='nameMarcaModel'>Display:</div>
                      <div className='nameContenMarcaModel'>{producto.screenSize.$numberDecimal}"</div>
                    </div>
                    <div className='boxCardDimenEstado'>
                      <div className='nameMarcaModel'>Estado:</div>
                      <div className='nameContenMarcaModel'>{producto.condition}</div>
                    </div>
                  </div>
                  <div className='boxCaractLadoA'>
                    <div className='nameMarcaModel'>Memoria interna:</div>
                    <div className='nameContenMarcaModel'>{producto.internalMemory} GB</div>
                  </div>
              </div>
                  <div className='boxCardCategories'>
                    <div className='nameMarcaModel'>Categoría/s:</div>
                    <div className='nameContenMarcaModel'>{producto.categories}</div>
                  </div>
            </div>
              
              <div className='boxDetailDescription'>
                <div className='detailDescripcionName'>Descripción </div>
                <div className='lineaDetail' ></div>
                <div className='detailDescriptionDescription'>{producto.description}</div>
              </div>
                                        
        </div>
                                  
                                            )}
                                        }
                                        )
               
        }
    </div>
   
  </div>
    
  )
}
