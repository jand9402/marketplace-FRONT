import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductDetail.css'


export default function ButtonsVisit (id){
    const allProducts = useSelector(state => state.products)

function handleCompar(e){
    e.preventdefault()
    alert('Debes estar registrado para poder comprar ¿te deseas registrar?')
}

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
            newCarItem.quantity = 1
            agregado.push(newCarItem)
        }
        return agregado
    }
    let producto = addOrCreate(itemInCar)

    localStorage.setItem("itemCar", JSON.stringify(producto))
    console.log(JSON.parse(localStorage.itemCar))
}

    return(
        <div className="boxBotonesDetalle">
            <div>
                <Link to='/home' id='click'>
                    <button className='botonIncSesDetail' onClick={(e) =>handleCompar(e)}>Comprar</button>
                </Link>
            </div>
            <div>
                <Link to='/register' id='click'>
                    <button className='botonRegistroDetail'  onClick={() => addToCar(id)}>Agregar al carrito</button>
                </Link>
            </div>
        </div>
    )
}