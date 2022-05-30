import React from "react";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'
import IconoCarrito from "./IconoCarrito";
import { Link } from "react-router-dom";
import SesionAdminNav from "./sesionAdmin";

export default function NavBarDetailAdmin () {
    return (
    <div className='boxNavBar'>
        <nav className= 'ordenNavBar'>
            <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
            <div className="arregloProvisorioNav2"></div>
            <div>
              <SesionAdminNav/>  
            </div>
            <Link to="/shoppingCar">
                <img className='carritoNavBar' src={CarritoNavBar} alt='carritoNav' />
                {
                   JSON.parse(localStorage.itemCar.length>2)? <IconoCarrito className="iconoDmiracion" />
                    :<button className="botonParaNada"></button>                 
                }
            </Link>
        </nav>
    </div>
    )
}