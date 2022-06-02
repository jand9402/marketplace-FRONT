import React from "react";
import NavBaRSesionUsers from "../NavBar/navBarSesionUsers";
import './miSesion.css'
import { Link } from "react-router-dom";

export default function MiSesion (){
    return(
        <div>
            <NavBaRSesionUsers/>
            <Link to='/user/wishlist'><button className="botonVolverDetail">Wishlist</button></Link>
        </div>
    )
}