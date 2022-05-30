import React, {useEffect, useState} from "react";
import Filters from "./Filters";
import LoginRegister from "./LoginRegister";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'
import MiSesion from "./MiSesion";
import { useSelector } from "react-redux";
import IconoCarrito from "./IconoCarrito";
import { Link } from "react-router-dom";
import carritoLleno1 from '../../assets/icons/carritoLleno1G.png'
import CarritoVacioIcono from '../../assets/icons/carritoVacioIconoG.png'

const NavBarDetail = () => {
const token = useSelector (state => state.token)
    
return(
        // <div className='boxNavBar'>
        //     <nav className= 'ordenNavBar'>
        //         <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
        //         <div className="arregloProvisorioNav2"></div>
        //         <div>
        //             {localStorage.getItem('authorization', token)? <MiSesion/> : <LoginRegister/>}
        //         </div>
        //         <Link to="/shoppingCar">
        //         <img className='carritoNavBar' src={CarritoNavBar} alt='carritoNav' />
        //         {
        //            JSON.parse(localStorage.itemCar.length>2)? <IconoCarrito className="iconoDmiracion" />
        //             :<button className="botonParaNada"></button>                 
        //         }
        //         </Link>
        //     </nav>
        // </div>
        
        <nav class="navbar ">
            <div class="container-fluid">
            <Link to='/' className='styleLinkNavBar'>
                <a class="navbar-brand">Storecel</a>
                </Link>
                {localStorage.getItem('authorization', token)? <MiSesion/> : <LoginRegister/>}
                {
                   JSON.parse(localStorage.itemCar.length>2)? <img className='carritoNavBar' src={carritoLleno1} alt='carritoNav' />
                    :<img className='carritoNavBar' src={CarritoVacioIcono} alt='carritoNav' />
                }
            </div>
        </nav>
    )
}

export default NavBarDetail