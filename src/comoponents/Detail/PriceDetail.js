import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./ProductDetail.css";
import { getProducts } from "../../redux/actions";
import ButtonsVisit from "./ButtonsVisit";
// import ButtonsUser from "./ButtonsUser";

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
    <div className="boxMacroPrice">
      {allProducts?.map((producto) => {
        if(producto._id === test){
          return (
          <div key={producto._id}>
            <div className="princeNameProd">{producto.name}</div>
            <div className="princePrince">${producto.price}</div>
            <div className="boxPriceStock">
              <div className="princeStockName">Stock disponible:</div>
              <div className="princeStockNumber">{producto.amount}</div>
            </div>
            <div>
              <div>Cantidad:</div>
              <select>
                <option> X unidades </option>
                <option>Soy un map</option>
              </select>
            </div>
          </div>
          )}
        })}
        <div className="princeAdvertencia">Para comprar debe iniciar sesión, si no tiene cuenta puede crearse una</div>
        <ButtonsVisit/>
        {/* <ButtonsUser/> */}
    </div>
      
    )
  }