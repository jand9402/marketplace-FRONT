import React, { useState } from "react";
import CardsProduct from "./cardsProducts/cardsProducts";
import Modal from "./Modales/Modal";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import CreateProduct from "../ProductForm/createProduct";

export default function SesionProductAdmin () {
    const [stateModalCreate, setStateModalCreate] = useState (false)

function handleClickModalC (e) {
    setStateModalCreate(!stateModalCreate)
}

const [modal, setModal] = useState (false)
    return(
        <div>
            <NavBarDetailAdmin/>
            <div className="contenedorSesionProductAdmin">
                <div className="tituloCardsAdminProducts">Productos disponibles</div>
                <button className="buttonNewProduct" onClick={handleClickModalC}>Agregar producto</button>
                <CardsProduct/>
            </div>
            <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >
                <CreateProduct/>
            </Modal>
        </div>
    )
}