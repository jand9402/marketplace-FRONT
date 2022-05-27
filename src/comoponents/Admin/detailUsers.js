import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import { getUsers } from "../../redux/actions";

export default function DetailUsers () {
const users = useSelector (state => state.users)
const token = useSelector (state => state.token)
console.log(users)
const dispatch = useDispatch()

useEffect (()=>{
    dispatch(getUsers(localStorage.getItem('authorization', token)))
}, [dispatch])

    return(
        <div>
            <NavBarDetailAdmin/>
            <div className="contenedorSesionAdmin">
                {
                    users.user?.map(u => {
                        return (
                            <div>{u.name}</div>
                        )
                    })
                }
            soy el detalle de los usuarios
            </div>
        </div>
    )
}