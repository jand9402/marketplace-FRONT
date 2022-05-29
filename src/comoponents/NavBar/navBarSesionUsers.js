import React  from "react";
import IconoCarrito from "./IconoCarrito";
import { useSelector } from "react-redux";
import LogoNav from '../../assets/logo/log.png'
import { Link } from "react-router-dom";
import CarritoNavBar from '../../assets/icons/carritoNav.png'

export default function NavBaRSesionUsers (){
const token = useSelector(state => state.token)
const userData = useSelector(state => state.userData)
console.log (userData)
let data =JSON.parse(userData)
console.log(data)

function handleLogOut (){
    localStorage.removeItem('authorization', token)
    localStorage.removeItem("userData", userData)
}
    return (
        <div className='boxNavBar'>
           <nav className= 'ordenNavBar'>
                <img className= 'logoNavBar' src={LogoNav} alt='logoNav'/>
                <div className="arregloProvisorioNav2"></div>
                <div >
                <Link to='/' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Home</div>
                </Link>
            </div>
                <div>
                <Link to='/' className='styleLinkNavBar'>
                    <div onClick={handleLogOut}>Cerrar sesión</div>
                </Link>
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