import React from "react";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'
import IconoCarrito from "./IconoCarrito";
import { Link } from "react-router-dom";
import SesionAdminNav from "./sesionAdmin";
import carritoLleno1 from '../../assets/icons/carritoLleno1G.png'
import CarritoVacioIcono from '../../assets/icons/carritoVacioIconoG.png'
import isotipo from '../../assets/logo/isotipo.png'

export default function NavBarDetailAdmin () {
    return (
    // <div className='boxNavBar'>
    //     <nav className= 'ordenNavBar'>
    //         <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
    //         <div className="arregloProvisorioNav2"></div>
    //         <div>
    //           <SesionAdminNav/>  
    //         </div>
    //         <Link to="/shoppingCar">
    //             <img className='carritoNavBar' src={CarritoNavBar} alt='carritoNav' />
    //             {
    //                JSON.parse(localStorage.itemCar.length>2)? <IconoCarrito className="iconoDmiracion" />
    //                 :<button className="botonParaNada"></button>                 
    //             }
    //         </Link>
    //     </nav>
    // </div>


<nav class="navbar ">
            <div class="container-fluid">
            <Link to='/' className='styleLinkNavBar'>
<img src={isotipo} class="navbar-brand"/>
            </Link>
                    <SesionAdminNav/> 
                    <Link to="/shoppingCar">
               {
                   JSON.parse(localStorage.itemCar.length>2)? <img className='carritoNavBar' src={carritoLleno1} alt='carritoNav' />
                    :<img className='carritoNavBar' src={CarritoVacioIcono} alt='carritoNav' />
                }
                </Link>
            </div>
        </nav>
    )
}