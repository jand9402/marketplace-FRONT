import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert'
import { deleteProduct } from "../../../redux/actions";
import './cardsProducts.css'

export default function CardProducts({ id, image, name, price }) {
const dispatch = useDispatch()
function handleDelete(name, id){
    Swal({
        title: 'Estas seguro que quieres elimar ' + name +'?',
        text: "No podras revertir esta acción!",
        icon: 'warning',
        buttons: ["Cancelar", "Confirmar"]
      }).then((result) => {
        if (result) {
          Swal({
              text: "Eliminado con exito",
              icon: "success"
          })
          console.log(id)
          dispatch(deleteProduct(id))
        }
      })
}

    return (
        <div className="boxCardProductAdmin">
            <img className="imageCardAdmin" src={image[0]} alt='imageCardAdmin' />
            <div className="boxNamePriceProdAdm ">
                <div className="productAdminName">{name}</div>
                <div className="productAdminPrice">${price}</div>
            </div>
            
            <div className="orderDeletAndButton">
                <button className="buttonDetailProductAdmin" onClick={() => handleDelete(name, id)}>Eliminar</button>
                <Link to={'/admin/products/detail/' + id}  id= 'click'>
                <button className="buttonDetailProductAdmin">Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}