import React  from "react";
import IconoCarrito from "./IconoCarrito";
import { useSelector } from "react-redux";
import LogoNav from '../../assets/logo/log.png'
import { Link } from "react-router-dom";
import CarritoNavBar from '../../assets/icons/carritoNav.png'
import carritoLleno1 from '../../assets/icons/carritoLleno1G.png'
import CarritoVacioIcono from '../../assets/icons/carritoVacioIconoG.png'

export default function NavBaRSesionUsers (){
const token = useSelector(state => state.token)
const userData = useSelector(state => state.userData)
console.log (userData)
let data =JSON.parse(userData)
console.log(data)

function handleLogOut (){
    localStorage.removeItem('authorization', token)
    localStorage.removeItem("userData", userData)
    localStorage.removeItem("itemCar")
    localStorage.removeItem("order")
}
    return (
       
        <nav class="navbar ">
            <div class="container-fluid">
            <Link to='/' className='styleLinkNavBar'>
                <a class="navbar-brand">Storecel</a>
                </Link>
                <div className="d-flex">
            <div >
                <Link to='/' className='styleLinkNavBar'>
                <div className='styleLogReg'>Home</div>
                </Link>
            </div>
            <div>
                <Link to='/' className='styleLinkNavBar'>
                <div onClick={handleLogOut}>Crear cuenta</div>
                </Link>
            </div>
            </div>
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