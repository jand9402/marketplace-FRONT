import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductDetail.css'
import swal from 'sweetalert'
import { useState } from "react";


export default function ButtonsVisit ({id}){
    
    const allProducts = useSelector(state => state.products)
    const token = useSelector(state=> state.token)
    const history = useHistory()
    const [contador, setContador] = useState(1)
    const [maximo, setMaximo] = useState(1000000)
    let newCarItem = allProducts.find(allProducts => allProducts._id === id)
    localStorage.setItem("maxStock", JSON.stringify(newCarItem))
    let maxFromLocal = JSON.parse(localStorage.maxStock)
    maxFromLocal = maxFromLocal.amountInStock
    console.log(localStorage.maxStock)
function maximoStock(maximo){
    if(maximo===1000000){
    console.log(maxFromLocal)
    setMaximo(maxFromLocal)
    }
}
maximoStock(maximo)
    
function handleCompar(e){
    if(!token){
        alert('No ha inicado su sesión o no tienen una')
    } else{
        alert('vas a comprar')
    }
}

function handleContador(e){
    if(e.target.value === "mas"){
        if(contador < maximo){
            setContador(contador+1)
        }
    }else{
        if(contador>1){
            setContador(contador-1)
        }
    }
    }
    
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
                        item.quantity += contador
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
                history.push('/detailVisit/' + id)
                newCarItem.quantity = contador
                agregado.push(newCarItem)
            }
            return agregado
        }
        let producto = addOrCreate(itemInCar)
    
        localStorage.setItem("itemCar", JSON.stringify(producto))
        setContador(1)
       
    }

    return(
        <div className="boxBotonesDetalle">
              <button className="botones_contador_detail_menos" onClick={(e) => handleContador(e)} value="menos"> - </button><div className="contador_carrito">{contador}</div><button className="botones_contador_detail_mas" onClick={(e) => handleContador(e)} value="mas">+</button>
           <br/>
            <div>
                <Link to={'/detailVisit/' + id} id='click'>
                    <button className='botonIncSesDetail' onClick={(e) =>handleCompar(e)}>Comprar</button>
                </Link>
            </div>
            <div>
                    <button className='botonRegistroDetail'  onClick={() => addToCar(id)}>Agregar al carrito</button>
               
            </div>
        </div>
    )
}