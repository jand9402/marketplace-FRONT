import React from "react";
import { Link } from "react-router-dom";
import './NavBarAll.css'

const LoginRegister = () => {

    return(
        <div class='ordenLoginRegister'>
            <div >
                <Link to='/login' class='styleLinkNavBar'>
                    <div class='styleLogReg'>Iniciar sesión</div>
                </Link>
            </div>
            <div>
                <Link to='/register' class='styleLinkNavBar'>
                    <div>Crear cuenta</div>
                </Link>
            </div>
        </div>
    )

}

export default LoginRegister