import React, { useState } from "react";
import CardsProduct from "./cardsProducts/cardsProducts";
import ModalFormCreate from "./Modales/ModalFormCreate";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";

export default function SesionProductAdmin () {

const [modal, setModal] = useState (false)
    return(
        <div>
            <NavBarDetailAdmin/>
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