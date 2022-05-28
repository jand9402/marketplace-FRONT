
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
                todos= todos.filter(item => item._id !== _id)
                return todos 
            }
            
            let producto = addQuantity(_id)
    
            localStorage.setItem("itemCar", JSON.stringify(producto))
            console.log(JSON.parse(localStorage.itemCar))
            history.push('/shoppingCar')
        console.log(producto)}
            else{
                let todos = JSON.parse(localStorage.itemCar)
                console.log(todos)
        
                function addQuantity(_id){
                    todos.map(item => {
                        if(item._id === _id){
                           if(item.quantity > 1){ 
                               item.quantity = item.quantity -1
                            } else if(item.quantity === 1){
                                todos = todos.filter(item => item._id !== _id)
                                return todos 
                            }
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
        history.push('/shoppingCar')
        
    }

    

    return (
      
        
        <div className="container">
            <div className="row">
            <div className='col'>
                <img className='imagenCarrito' src={image[0]} alt='imagencard' />
            </div>
            <div className='col'>
                <div className='nameEnCarrito'>{name}</div>
                <div className='priceEnCarrito'>${price}.00 x {quantity} = ${price*quantity}.00</div>
            </div>
            <div className='col'>
                <button  className='botonRemover' onClick={() => removeFromCar(_id)}> - </button><button className='botonAgregar' onClick={() => addToCar(_id)}>+</button>
                <button className='botonEliminar' onClick={() => removeFromCar(_id, true)}>Eliminar todos</button>
                <div><button className='comprarEsteProducto'>Comprar este producto</button></div>
            </div>
            </div>
        </div>
        
    )
}

