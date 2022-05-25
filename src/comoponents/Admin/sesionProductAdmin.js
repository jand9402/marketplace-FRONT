import React from "react";
import CardsProduct from "./cardsProducts/cardsProducts";
import NavBarDetail from "../NavBar/NavBaRDetail";

export default function SesionProductAdmin () {
    return(
        <div>
            <NavBarDetail/>
            <div className="contenedorSesionProductAdmin">
                <CardsProduct/>
            </div>
        </div>
    )
}