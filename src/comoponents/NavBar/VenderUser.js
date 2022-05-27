import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavBarAll.css'

const VenderUser = () => {

const token = useSelector(state => state.token)

function handleLogOut (){
    localStorage.removeItem('authorization', token)
}
    return(
        <div className='ordenLoginRegister'>
            <div >
                <Link to='/productForm' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Vender</div>
                </Link>
            </div>
            <div>
                <Link to='/' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Mi espacio</div>
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

export default VenderUser;