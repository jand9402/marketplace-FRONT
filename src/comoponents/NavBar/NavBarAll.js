import React, {useEffect, useState} from "react";
import Filters from "./Filters";
import LoginRegister from "./LoginRegister";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'

import { Link, useHistory } from "react-router-dom";
import IconoCarrito from "./IconoCarrito";

import  MiSesionUser from './MiSesionUser'
import { useSelector } from "react-redux";





const NavBarAll = () => {
const[detail, setDetail] = useState(false)


let history = useHistory()



const token = useSelector (state => state.token)


    
return(
        <div className='boxNavBar'>
            
            <nav className= 'ordenNavBar'>
                <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
                <div>
                    
                    <Filters/>
                </div>
                <div>
                    {
                    localStorage.getItem('authorization', token)? <MiSesionUser/> : <LoginRegister/>
                    }
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

export default NavBarAll