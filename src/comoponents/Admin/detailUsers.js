import React from "react";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import CardsUsers from "./cardsUsers/cardsUsers";

<<<<<<< HEAD
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
=======
export default function DetailUsers() {
  return (
    <div>
      <NavBarDetailAdmin />
      <div className="contenedorSesionAdmin">
        <CardsUsers />
      </div>
    </div>
  );
}
>>>>>>> 83738ef927a9fed1c27af16977578ce3d6e05172
