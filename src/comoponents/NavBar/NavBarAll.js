import React, {useEffect, useState} from "react";
import Filters from "./Filters";
import LoginRegister from "./LoginRegister";
import './NavBarAll.css'
import LogoNav from '../../assets/logo/log.png'
import CarritoNavBar from '../../assets/icons/carritoNav.png'




const NavBarAll = () => {
const[detail, setDetail] = useState(false)

    
return(
        <div className='boxNavBar'>
            
            <nav className= 'ordenNavBar'>
                <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
                <div>
                    
                    <Filters/>
                </div>
                <div>
                    <LoginRegister/>   
                </div>
                <img className='carritoNavBar' src={CarritoNavBar} alt='carritoNav' />
            </nav>


        </div>
    )

}

export default NavBarAll