import React from "react";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import CardsUsers from "./cardsUsers/cardsUsers";

export default function DetailUsers () {
let data = JSON.parse(localStorage.getItem("userData"))
    return(
        <div>
            <NavBarDetailAdmin/>
            {
                data.isAdmin? (
                <div className="contenedorSesionAdminUsers">
                    <CardsUsers/>
                </div>):(<div>No tiene permitido el acceso</div>)
            }
        </div>
    )
}
