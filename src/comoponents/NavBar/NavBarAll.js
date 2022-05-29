import React, {useEffect, useState} from "react";
import Filters from "./Filters";
import LoginRegister from "./LoginRegister";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'
import carritoLleno1 from '../../assets/icons/carritoLleno1G.png'
import CarritoVacioIcono from '../../assets/icons/carritoVacioIconoG.png'

import { Link, useHistory } from "react-router-dom";
import IconoCarrito from "./IconoCarrito";

import MiSesion from "./MiSesion";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";





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
                    <SearchBar/>
                <div className="sesion">
                    {
                    localStorage.getItem('authorization', token)? <MiSesion/> : <LoginRegister/>
                    }
                </div>
                <Link to="/shoppingCar">
                {
                    
                
                   JSON.parse(localStorage.itemCar.length>2)? <img className='carritoNavBar' src={carritoLleno1} alt='carritoNav' />
                    :<img className='carritoNavBar' src={CarritoVacioIcono} alt='carritoNav' />
                    

                }
                </Link>
            </nav>


        </div>
    )

}

export default NavBarAll