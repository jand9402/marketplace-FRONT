import React from "react";

export default function SesionVentasAdmin () {

let data = JSON.parse(localStorage.getItem("userData"))
    return(
        <div>
            {
                data.isAdmin? (
                    <div>soy mis ventas...</div>
    
                ):(<div>No tiene permitido el acceso</div>)
            }
        </div>
    )
}