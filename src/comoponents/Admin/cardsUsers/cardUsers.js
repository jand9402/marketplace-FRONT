import React from "react";
import { Link } from "react-router-dom";
import './cardsUsers.css'
import IconUser from '../../../assets/admin/user.png'
import { useSelector } from "react-redux";

export default function CardUsers({ _id, name, phoneNumber, role }) {

    return (
        <div className="boxCardUser">
            <img className="imageCardUser" src={IconUser} alt='imageCardAdmin' />
            <div className="boxInfoUsers">
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">Usuario:</div>
                    <div className="userData">{name}</div>
                </div>
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">ID:</div>
                    <div className="userData">{_id}</div>
                </div>
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">Celular:</div>
                    <div className="userData">{phoneNumber}</div>
                </div>
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">Rol:</div>
                    <div className="userData">{role}</div>
                </div>
            </div>
            
            <div className="orderButtonsUsers">
                <Link to={'/admin/users/buys/' + _id}  id= 'click'>
                <button className="buttonUsersAll">Detalle compras</button>
                </Link>
                {/* <button className="buttonUsersAll">Hacer admin</button> */}
                {/* <button className="buttonUsersAll">Sacar de admin</button> */}
                <button className="buttonUsersAll">Password reset</button>
                <button className="buttonUsersAll">Eliminar usuario</button>
            </div>
        </div>
    )
}