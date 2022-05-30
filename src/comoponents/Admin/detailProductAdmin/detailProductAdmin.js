import React, { useEffect, useState } from "react";
import { getDetail } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletepreviousdetail } from "../../../redux/actions";
import NavBarDetailAdmin from "../../NavBar/navBarDetaiAdmin";
import Modal from "../Modales/Modal";
import './detailProductAdmin.css'
// import CreateProduct from "../../ProductForm/createProduct";
import EditProduct from "../../ProductForm/editProduct";

export default function DetailProductAdmin () {
const dispatch = useDispatch();
const detail = useSelector (state => state.detail)
// console.log (detail.image)
const [stateModalPut, setStateModalPut] = useState (false)

function handleClickModal (e) {
    setStateModalPut(!stateModalPut)
}

const {id} = useParams();

useEffect (()=>{
    dispatch(getDetail(id))
}, [dispatch, id])

useEffect (() => {
    return dispatch(deletepreviousdetail())
}, [dispatch])
    
    return (
        <div>
            <NavBarDetailAdmin/>
            <div key={id} className='contenedorDetailAdmin'>
                <div className="boxDetaiQuePuedoModificar">
                    <img  className="imageDetailAdmin" src={detail.image ? detail.image[0] : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Ftecnologia%2Fbanco-nacion-relanza-venta-celulares-modelos-descuento-18-cuotas-interes_0_QmAUsjhAU.html&psig=AOvVaw1sQbEUoycHdCfckA6AJk7V&ust=1653956093926000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiOtd34hfgCFQAAAAAdAAAAABAH" } alt="imageDetailAdmin"/>
                    <div className="boxNBMCDCO">
                        <div className="detailProductName">Detalle del producto</div>
                        <button
                        onClick={handleClickModal} 
                        className="editarProdButton"
                        >Editar producto</button>
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
                            <div className="namesAllDetailAdmin">ESTADO:</div>
                            <div className="descriptionDetailAdmin">{detail.condition}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CATEGORÍA/S:</div>
                            <div className="descriptionDetailAdmin">{detail.categories}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">DISPLAY:</div>
                            <div className="descriptionDetailAdmin">{detail.screenSize ? detail.screenSize.$numberDecimal : "No se encuentra display"}" </div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">MEMORIA INTERNA:</div>
                            <div className="descriptionDetailAdmin">{detail.internalMemory} GB </div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">DESCRIPCIÓN:</div>
                            <div className="descriptionDetailAdminDes">{detail.description}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">PRECIO:</div>
                            <div className="descriptionDetailAdmin">US$ {detail.price}</div>
                        </div>
                        <div className="cajasDetailAdmin">
                            <div className="namesAllDetailAdmin">CANTIDAD:</div>
                            <div className="descriptionDetailAdmin">{detail.amountInStock} uds.</div>
                        </div>
                    </div>
                </div>
                <div className="boxDetaiQueNoPuedoModificar">
                    <div className="detailProductName">Valoración del producto</div>
                </div>
            </div>
            <Modal
            state= {stateModalPut}
            changeState = {setStateModalPut}
            >
                {/* ACÁ VA EL EDITAR PRODUCTO -EL PUT- */}
                <EditProduct/>
            </Modal>
        </div>
    )
}