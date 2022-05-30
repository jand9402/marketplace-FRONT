import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './NavBarAll.css'

 export default function  MiSesion () {

const token = useSelector(state => state.token)
const userData = useSelector(state => state.userData)
const  history = useHistory() 

console.log (userData)
let data = JSON.parse(userData)
console.log(data)

function handleLogOut (){
    localStorage.removeItem('authorization', token)
    localStorage.removeItem("userData", userData)
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