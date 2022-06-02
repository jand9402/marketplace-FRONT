
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { locaLSatorage } from "../../redux/actions";
import './CarItem.css'
export const REMOVE_ALL_FROM_CAR = 'REMOVE_ALL_FROM_CAR'
export const REMOVE_ONE_FROM_CAR = 'REMOVE_ONE_FROM_CAR'
export const ADD_TO_CAR = 'ADD_TO_CAR'


export default function CarItem({ data }) {
    let data2 = JSON.parse(localStorage.getItem("userData"))
    console.log(data)
    let { _id, name, image, price, quantity, amountInStock} = data
    
   
    const dispatch = useDispatch()
    let history = useHistory()

    const removeFromCar = (_id, all = false) => {
        if(all){ 
            let todos = JSON.parse(localStorage.itemCar)
    
            function addQuantity(_id){
                todos= todos.filter(item => item._id !== _id)
                return todos 
            }
            
            let producto = addQuantity(_id)
    
            localStorage.setItem("itemCar", JSON.stringify(producto))
            history.push('/shoppingCar')
        } else{
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
                    if(item.quantity<amountInStock)
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
    function comprarEste(id){
        let infoDeLocal = JSON.parse(localStorage.itemCar)
        let este = infoDeLocal.find(item => item._id === id)
        if(!localStorage.itemCar || localStorage.itemCar !== JSON.stringify(este))
    localStorage.setItem("itemCar", JSON.stringify(este))
    }
    function handleAdmin(e){
        e.preventDefault()
        alert('No puedes comprar, sos admin, adios')
    }

    

    return (
      
        
        <div className="container">
            <div className="row">
            <div className='col'>
                <img className='imagenCarrito' src={image[0]} alt='imagencard' />
            </div>
            <div className='col'>
                <div className='nameEnCarrito'>{name}</div>
                {quantity>amountInStock?
                <div className='priceEnCarrito'>${price}.00 x {amountInStock} = ${price*amountInStock}.00</div>:
                <div className='priceEnCarrito'>${price}.00 x {quantity} = ${price*quantity}.00</div>}
                
            </div>
            <div className='col'>
                <button  className='botonRemover' onClick={() => removeFromCar(_id)}> - </button><button className='botonAgregar' onClick={() => addToCar(_id)}>+</button>
                <button className='botonEliminar' onClick={() => removeFromCar(_id, true)}>Eliminar todos</button>
               
                <div>

                    {data2.isAdmin?
                    
                        <button onClick={e => handleAdmin(e)} className='comprarEsteProducto'>Comprar este producto</button>
                        :
                        <Link to="CheckOut">
                        <button onClick={() => comprarEste(_id)} className='comprarEsteProducto'>Comprar este producto</button>
                        </Link>
                   }
                   </div>
            </div>
            </div>
        </div>
        
    )
}

