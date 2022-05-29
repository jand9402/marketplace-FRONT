import React from "react";
import './Cards.css'
import CarritoCard from '../../assets/icons/CarritoCards.png'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import swal from "sweetalert"
export const ADD_TO_CAR = 'ADD_TO_CAR'


export default function Card({ id, image, name, price }) {
    
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)
    // console.log(allProducts)
    const history = useHistory()
    const addToCar = (id) => {

        let newCarItem = allProducts.find(allProducts => allProducts._id === id)
         let infoFromLocalStorage = JSON.parse(localStorage.itemCar)

        let itemInCar = infoFromLocalStorage.find(item => item._id === newCarItem._id)

        function addOrCreate(producto) {
            let agregado = infoFromLocalStorage
            if (producto) {
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 900
                  })
                agregado.map(item =>{
                    if (item._id === newCarItem._id) {
                        item.quantity += 1
                    }
                }) 
            }else{ 
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 900
                  })
                history.push('/')
                newCarItem.quantity = 1
                agregado.push(newCarItem)
            }
            return agregado
        }
        let producto = addOrCreate(itemInCar)

        localStorage.setItem("itemCar", JSON.stringify(producto))
        console.log(JSON.parse(localStorage.itemCar))

    }

   

    return (
        <div className="boxCard">
            <Link to={'/detailVisit/' + id} className="sinlineaCountCards">
                <div className="nameCardProd">{name}</div>
                <img className="imageTamaño" src={image[0]} alt='imagencard'/>
                <div className="priceCardProd" >US${price}</div>
            </Link>
            <button className="boton_carrito_card" onClick={() => addToCar(id)}></button>
        </div>
    )
}