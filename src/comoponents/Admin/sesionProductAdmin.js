import React, { useState } from "react";
import CardsProduct from "./cardsProducts/cardsProducts";
import Modal from "./Modales/Modal";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import CreateProduct from "../ProductForm/createProduct";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function SesionProductAdmin () {
const [stateModalCreate, setStateModalCreate] = useState (false)
let data = JSON.parse(localStorage.getItem("userData"))
=======
export default function SesionProductAdmin() {
  const [stateModalCreate, setStateModalCreate] = useState(false);
>>>>>>> 83738ef927a9fed1c27af16977578ce3d6e05172

  function handleClickModalC(e) {
    setStateModalCreate(!stateModalCreate);
  }

  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavBarDetailAdmin />
      <div className="contenedorSesionProductAdmin">
        <div className="tituloCardsAdminProducts">Productos disponibles</div>
        <Link to="/admin/">
          <button>Volver</button>
        </Link>
        <button className="buttonNewProduct" onClick={handleClickModalC}>
          Agregar producto
        </button>
        <CardsProduct />
      </div>

<<<<<<< HEAD
    return(
        <div>
            <NavBarDetailAdmin/>
            {data.isAdmin? (
            <div className="contenedorSesionProductAdmin">
                <div className="tituloCardsAdminProducts">Productos disponibles</div>
                <button className="buttonNewProduct" onClick={handleClickModalC}>Agregar producto</button>
                <CardsProduct/>
            </div>
            ) :(<div>No tiene permitido el acceso</div>) }
            <Modal
            state={stateModalCreate}
            changeState= {setStateModalCreate}
            >
            <CreateProduct/>
            </Modal>
        </div>
    )
}
=======
      <Modal state={stateModalCreate} changeState={setStateModalCreate}>
        <CreateProduct />
      </Modal>
    </div>
  );
}
>>>>>>> 83738ef927a9fed1c27af16977578ce3d6e05172
