import React from "react";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import CardsUsers from "./cardsUsers/cardsUsers";

export default function DetailUsers () {

    return(
        <div>
            <NavBarDetailAdmin/>
            <div className="contenedorSesionAdmin">
                <CardsUsers/>
            </div>
        </div>
    )
}