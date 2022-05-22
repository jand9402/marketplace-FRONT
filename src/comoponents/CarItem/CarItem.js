
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { locaLSatorage } from "../../redux/actions";
import './CarItem.css'
export const REMOVE_ALL_FROM_CAR = 'REMOVE_ALL_FROM_CAR'
export const REMOVE_ONE_FROM_CAR = 'REMOVE_ONE_FROM_CAR'
export const ADD_TO_CAR = 'ADD_TO_CAR'


export default function CarItem({ data }) {
    const { _id, name, image, price, quantity } = data
    const dispatch = useDispatch()
    let history = useHistory()
    console.log(data)

    const removeFromCar = (_id, all = false) => {
        if(all){ 
            let todos = JSON.parse(localStorage.itemCar)
            console.log(todos)
    
            function addQuantity(_id){
                todos.map(item => {
                    if(item._id === _id){
                        item.quantity = 0
                    }
                }
                )
                return todos 
            }
            
            let producto = addQuantity(_id)
    
            localStorage.setItem("itemCar", JSON.stringify(producto))
            console.log(JSON.parse(localStorage.itemCar))
            history.push('/shoppingCar')
        console.log(locaLSatorage)}
            else{
                let todos = JSON.parse(localStorage.itemCar)
                console.log(todos)
        
                function addQuantity(_id){
                    todos.map(item => {
                        if(item._id === _id){
                           if(item.quantity > 0) item.quantity = item.quantity -1 
                        }
                    }
                    )
                    return todos 
                }
                
                let producto = addQuantity(_id)
        
                localStorage.setItem("itemCar", JSON.stringify(producto))
                console.log(JSON.parse(localStorage.itemCar))
                history.push('/shoppingCar')
        }
    }
    const allProducts = useSelector(state => state.products)

    const addToCar = (_id) => {

        let todos = JSON.parse(localStorage.itemCar)
        console.log(todos)

        function addQuantity(_id){
            todos.map(item => {
                if(item._id === _id){
                    item.quantity += 1
                }
            }
            )
            return todos 
        }
        
        let producto = addQuantity(_id)

        localStorage.setItem("itemCar", JSON.stringify(producto))
        console.log(JSON.parse(localStorage.itemCar))
        history.push('/shoppingCar')
    }

    

    return (
      
        <div className="contenedor_car">
        <div className="row row_en_car">
            <div className="col">
                <img className="imageTamaño" src={image} alt='imagencard' />
            </div>
            <div className="col">
                <div className="nameCardProd">{name}</div>
                <div className="priceCardProd price_en_carrito" >${price}.00 x {quantity} = ${price*quantity}.00</div>
            </div>
            <div className="col">
                <button onClick={() => removeFromCar(_id)}> - </button><button onClick={() => addToCar(_id)}>+</button>
                <button onClick={() => removeFromCar(_id, true)}>Eliminar todos</button>
            </div>
        </div>
        </div>
    )
}

