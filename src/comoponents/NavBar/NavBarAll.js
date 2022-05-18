import React from "react";
import Filters from "./Filters";
import LoginRegister from "./LoginRegister";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'

const NavBarAll = () => {

    return(
        <div class='boxNavBar'>
            <nav class= 'ordenNavBar'>
                <img class= 'logoNavBar' src={LogoNav} alt='logoNav'/>
                <div>
                    <Filters/>
                </div>
                <div>
                <LoginRegister/>   
                </div>
                <img class='carritoNavBar' src={CarritoNavBar} alt='carritoNav' />
            </nav>

        </div>
    )

}

export default NavBarAll