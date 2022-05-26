import React from "react";
import './Cards.css'
import CarritoCard from '../../assets/icons/CarritoCards.png'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const ADD_TO_CAR = 'ADD_TO_CAR'

export default function Card({ id, image, name, price }) {
    
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)
    const history = useHistory()
    const addToCar = (id) => {

        let newCarItem = allProducts.find(allProducts => allProducts._id === id)
         let infoFromLocalStorage = JSON.parse(localStorage.itemCar)

        let itemInCar = infoFromLocalStorage.find(item => item._id === newCarItem._id)

        function addOrCreate(producto) {
            let agregado = infoFromLocalStorage
            if (producto) {
                agregado.map(item =>{
                    if (item._id === newCarItem._id) {
                        item.quantity += 1
                    }
                }) 
            }else{ 
                alert('Producto agregado')
                history.push('/home')
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
                <img className="imageTamaño" src={image} alt='imagencard' />
                <div className="nameCardProd">{name}</div>
                <div className="priceCardProd" >${price}</div>
            </Link>
            <button className="boton_carrito_card" onClick={() => addToCar(id)}></button>
        </div>
    )
}