import React, { useState } from "react";
import { getWishList } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Wishlist.css'
import { postWishList } from "../../redux/actions";
import NavBaRSesionUsers from "../NavBar/navBarSesionUsers";
import { deleteWishList } from "../../redux/actions";




export default function Wishlist  () {

    const dispatch = useDispatch()
    const wishlist = useSelector((state) => state.allWishlist)
useEffect(() => {
    dispatch(getWishList(localStorage.getItem('authorization')))

},[dispatch]
)


function handleDelete (e, id) {
    e.preventDefault()
    dispatch(deleteWishList(id))
}


console.log(wishlist)

    return (
   
        <div>
            <NavBaRSesionUsers/>
            <div className="container">
            <h1 className="title">Wishlist</h1>
            {
                wishlist.map(w => {
                   return (
                       <div key={w._id} className="row row_wish">
                           <div className="col col_wish">
                           <img className="img_wish" src={w.image[0]} alt="imagenWishlist" />
                           </div>
                           <div className="col col_wish">
                           <div className="d-flex"><h3 className="text_wish">Producto:  </h3><h3 className="text_wish1">{w.name}</h3></div> 
                           <div className="d-flex"><h3 className="text_wish">Precio:  </h3><h3 className="text_wish1"> ${w.price}</h3></div>
                           <div className="d-flex"><h3 className="text_wish">Marca:  </h3><h3 className="text_wish1"> {w.brand}</h3></div>
                           </div>
                           <div className="col col_wish">
                               <button onClick={(e) => handleDelete(e, w._id) }>Eliminar</button>
                               </div>

                       </div>
                   )
                })
            }
            </div>
        </div>
       
    )
}

