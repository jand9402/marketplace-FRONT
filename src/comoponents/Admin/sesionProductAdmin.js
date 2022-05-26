import React, { useEffect, useState } from "react";
import CardsProduct from "./cardsProducts/cardsProducts";
import NavBarDetail from "../NavBar/NavBaRDetail";
import ModalFormCreate from "./Modales/ModalFormCreate";
export default function SesionProductAdmin () {

const [modal, setModal] = useState (false)
    return(
        <div>
            <NavBarDetail/>
            <div className="contenedorSesionProductAdmin">
                <div className="tituloCardsAdminProducts">Productos disponibles</div>
                <button className="buttonNewProduct" onClick={()=> setModal(!modal)}>Agregar producto</button>
                <CardsProduct/>
            </div>
            <ModalFormCreate 
            estado={modal}
            setEstado= {setModal}
            />
        </div>
    )
}