import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavBarAll.css'

 export default function SesionAdminNav () {

const token = useSelector(state => state.token)

function handleLogOut (){
    localStorage.removeItem('authorization', token)
}
    return(
        <div className='ordenLoginRegister'>
            <div >
                <Link to='/' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Home</div>
                </Link>
            </div>
            <div>
                <Link to='/admin' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Mi sesión</div>
                </Link>
            </div>
            <div>
                <Link to='/' className='styleLinkNavBar'>
                    <div onClick={handleLogOut}>Cerrar sesión</div>
                </Link> 
            </div>
        </div>
    )
}