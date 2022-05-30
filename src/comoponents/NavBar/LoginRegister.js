import React from "react";
import { Link } from "react-router-dom";
import './NavBarAll.css'

const LoginRegister = () => {

    return(
        <div className="d-flex">
            <div >
                <Link to='/login' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Iniciar sesión</div>
                </Link>
            </div>
            <div>
                <Link to='/register' className='styleLinkNavBar'>
                    <div>Crear cuenta</div>
                </Link>
            </div>
        </div>
    )

}

export default LoginRegister