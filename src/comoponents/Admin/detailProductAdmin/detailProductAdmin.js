import React, { useEffect } from "react";
import { getProducts, getDetail } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletepreviousdetail } from "../../../redux/actions";
import NavBarAll from '../../NavBar/NavBaRDetail'
import './detailProductAdmin.css'

export default function DetailProductAdmin () {
const dispatch = useDispatch();
const detail = useSelector (state => state.detail)
console.log (detail)

const {id} = useParams();

useEffect (()=>{
    dispatch(getDetail(id))
}, [dispatch, id])

useEffect (() => {
    return dispatch(deletepreviousdetail())
}, [dispatch])
    
    return (
        <div>
            <NavBarAll/>
            <div key={id} className='contenedorDetailAdmin'>
                <div className="boxDetaiQuePuedoModificar">
                    <img  className="imageDetailAdmin" src={detail.image} alt="imageDetailAdmin"/>
                    <div className="boxNBMCDCO">
                        <div className="detailProductName">Detalle del producto</div>
                        <button className="editarProdButton">Editar producto</button>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">NOMBRE:</div>
                            <div className="descriptionDetailAdmin">{detail.name}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">MARCA:</div>
                            <div className="descriptionDetailAdmin">{detail.brand}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">MODELO:</div>
                            <div className="descriptionDetailAdmin">{detail.model}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CATEGORÍA:</div>
                            <div className="descriptionDetailAdmin">{detail.category}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">MEMORIA INTERNA</div>
                            <div className="descriptionDetailAdmin">nu gb</div>
                            {/* <div>{detail.dimensions.$numberDecimal}</div> */}
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CÁMARA FRONTAL:</div>
                            {/* <div className="namesAllDetailAdmin">{detail.condision}</div> */}
                            <div className="descriptionDetailAdmin">nu px</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CÁMARA TRASERA:</div>
                            {/* <div>{detail.other}</div> */}
                            <div className="descriptionDetailAdmin">nu px </div>
                        </div>
                        <div>
                            <div className="namesAllDetailAdmin">DESCRIPCIÓN:</div>
                            <div className="descriptionDetailAdminDes">{detail.description}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">PRECIO:</div>
                            <div className="descriptionDetailAdmin">US$ {detail.price}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">DESCUENTO:</div>
                            {/* <div className="descriptionDetailAdminDes">{detail.offer}</div> */}
                            <div className="descriptionDetailAdmin">5%</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CANTIDAD:</div>
                            <div className="descriptionDetailAdmin">{detail.amount}</div>
                        </div>
                    </div>
                </div>
                <div className="boxDetaiQueNoPuedoModificar">
                    <div className="detailProductName">Valoración del producto</div>
                </div>
            </div>
        </div>
    )
}