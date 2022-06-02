import React, { useState } from "react";
import { getWishList } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Wishlist.css'
import { postWishList } from "../../redux/actions";
import NavBaRSesionUsers from "../NavBar/navBarSesionUsers";




export default function Wishlist  () {
    const dispatch = useDispatch()
    const wishlist = useSelector((state) => state.allWishlist)
useEffect(() => {
    dispatch(getWishList(localStorage.getItem('authorization')))

},[dispatch]
)

console.log(wishlist)

// function handleClicked (e) {
//     e.preventDefault()
//     dispatch(postWishList()) 
// }

    // const [input, setInput] = useState({
    //     review: '',
    //     estrellas: 0
    // })

    // function handleChange (e) {
    //     setInput({
    //       ...input,
    //       [e.target.name]: e.target.value
    //     })
    // }

    // function handleCreate (e) {
    //     e.preventDefault(e);
    //     dispatch(postWishList(input))
    //     console.log(input)
    //     alert('Se creo la wishlist')
    // }

    return (
    //    <div>
    //        <h1>Soy la wishlist</h1>
    //        <form onSubmit={e => handleCreate(e)}>

    //        <input type="text" name="review" value={input.review} onChange={e => handleChange(e)} id="" />
    //        <input type="number" name="estrellas" value={input.estrellas} onChange={e => handleChange(e)} id="" />
    //        <button type="submit">Crear</button>
    //        </form>
    //        </div>
        <div>
            <NavBaRSesionUsers/>
            <h1 className="title">Wishlist</h1>
            {
                wishlist.map(w => {
                   return (
                       <div className="divWishlist">

                           <img src={w.image[0]} alt="imagenWishlist" />
                           <div className="divAll">

                           <div className="divContenido"><b>Producto: </b> {w.name}</div>
                           <div className="divContenido"><b>Precio: </b>{w.price}$</div>
                           <div className="divContenido"><b>Marca: </b>{w.brand}</div>
                           </div>
                       </div>
                   )
                })
            }
        </div>
       
    )
}

