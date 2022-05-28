import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductDetail.css'
import swal from 'sweetalert'


export default function ButtonsUser ({id}){
    const allProducts = useSelector(state => state.products)
    const history = useHistory()
    const [contador, setContador] = useState(0)
    
function handleCompar(e){
    alert('vas a comprar')
}

function handleContador(e){
if(e.target.value === "mas"){
    setContador(contador + 1)
}else{
    if(contador>0){
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
        setContador(0)
       
    }
    
    return(
        <div className="boxBotonesDetalle">
            <button className="botones_contador_detail_menos" onClick={(e) => handleContador(e)} value="menos"> - </button><div className="contador_carrito">{contador}</div><button className="botones_contador_detail_mas" onClick={(e) => handleContador(e)} value="mas">+</button>
           <br/>
            <div>
                    <button className='botonIncSesDetail' onClick={(e) =>handleCompar(e)}>Comprar</button>
            </div>
            <div>
                    <button className='botonRegistroDetail' onClick={() => addToCar(id)}>Agregar al carrito</button>
               
            </div>
        </div>
    )
}