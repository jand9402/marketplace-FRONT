import React from "react";
import { Link } from "react-router-dom";
import './NavBarAll.css'

const VenderUser = () => {

    return(
        <div className='ordenLoginRegister'>
            <div >
                <Link to='/productForm' className='styleLinkNavBar'>
                    <div className='styleLogReg'>Vender</div>
                </Link>
            </div>
            <div>
                <Link to='/home' className='styleLinkNavBar'>
                    <div>Nombre de usuario</div>
                </Link>
            </div>
        </div>
    )

}

export default VenderUser;