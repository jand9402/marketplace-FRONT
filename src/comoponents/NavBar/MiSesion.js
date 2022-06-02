import React, { /*useState*/ } from "react";
import { Link } from "react-router-dom";
import './NavBarAll.css'

 export default function  MiSesion () {

// // const token = useSelector(state => state.token)
// const userData = useSelector(state => state.userData)
// const  history = useHistory() 

// console.log (userData)
// let data = JSON.parse(userData)
let data = JSON.parse(localStorage.getItem("userData"))
console.log(data)

// Le SAQUÉ EL TOKEN 

function handleLogOut (){
    localStorage.removeItem('authorization')
    localStorage.removeItem("userData")
    localStorage.removeItem("itemCar")
    localStorage.removeItem("order")
}

    return(
        <div class="d-flex">
                {
                    data.isAdmin? (
                <Link to='/admin' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Mi sesión</div>
                </Link>) : (<Link to='/miSesion' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Mi sesión</div>
                </Link>)
                }
                <Link to='/' className='styleLinkNavBar'>
                    <div onClick={handleLogOut}>Cerrar sesión</div>
                </Link> 
        </div>
    )
}