import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetail.css";
import swal from "sweetalert";
import { useState } from "react";

export default function ButtonsVisit({ id }) {
  const token = useSelector((state) => state.token);
  const allProducts = useSelector((state) => state.allProducts2);
  const history = useHistory();
  const [contador, setContador] = useState(1);
  const max = useSelector((state) => state.products);
  let maxi = max.find((item) => item._id === id);
  // const [maximo, setMaximo] = useState(1000000)
  let newCarItem = allProducts.find((allProducts) => allProducts._id === id);

  function inicioLocalStorage() {
    if (localStorage.maxStock === JSON.stringify(newCarItem)) {
      localStorage.maxStock = localStorage.maxStock;
    } else {
      localStorage.setItem("maxStock", JSON.stringify(newCarItem));
    }
  }

  function handleCompar(e) {
    if (!token) {
      alert("No ha inicado su sesión o no tienen una");
    } else {
      alert("vas a comprar");
    }
  }

  function handleContador(e) {
    if (e.target.value === "mas") {
      if (contador < maxi.amountInStock) {
        setContador(contador + 1);
      }
    } else {
      if (contador > 1) {
        setContador(contador - 1);
      }
    }
  }

  const addToCar = (id, e) => {
    e.preventDefault();

    let newCarItem = allProducts.find((allProducts) => allProducts._id === id);
    let infoFromLocalStorage = JSON.parse(localStorage.itemCar);
    let infoBorrarStock = JSON.parse(localStorage.gestionStock);

    let itemInCar = infoFromLocalStorage.find(
      (item) => item._id === newCarItem._id
    );
    let itemInCarParaStock = infoBorrarStock.find(
      (item) => item._id === newCarItem._id
    );

    function addOrCreate(producto) {
      let agregado = infoFromLocalStorage;
      let disminuirStock = infoBorrarStock;
      if (producto) {
        swal({
          position: "top-end",
          icon: "success",
          title: "Producto agregado",
          showConfirmButton: false,
          timer: 900,
        });
        1 > itemInCarParaStock.amountInStock
          ? (itemInCar.quantity = itemInCar.amountInStock)
          : agregado.map((item) => {
              if (item._id === newCarItem._id) {
                item.quantity += contador;
                disminuirStock.map((item2) => {
                  if (item2._id === newCarItem._id) {
                    item2.amountInStock = item2.amountInStock - contador;
                  }
                });
              }
            });
      } else {
        swal({
          position: "top-end",
          icon: "success",
          title: "Producto agregado",
          showConfirmButton: false,
          timer: 900,
        });
        history.push("/detailVisit/" + id);
        newCarItem.quantity = contador;
        agregado.push(newCarItem);
        disminuirStock.map((item2) => {
          if (item2._id === newCarItem._id) {
            item2.amountInStock = item2.amountInStock - contador;
          }
        });
      }
      localStorage.setItem("gestionStock", JSON.stringify(disminuirStock));
      return agregado;
    }

    
    const addToCar = (id, e) => {    
        e.preventDefault()
        
            let newCarItem = allProducts.find(allProducts => allProducts._id === id)
             let infoFromLocalStorage = JSON.parse(localStorage.itemCar)
             let infoBorrarStock = JSON.parse(localStorage.gestionStock)
        
            let itemInCar = infoFromLocalStorage.find(item => item._id === newCarItem._id)
            let itemInCarParaStock = infoBorrarStock.find(item => item._id === newCarItem._id)
    
           
            function addOrCreate(producto) {
                let agregado = infoFromLocalStorage
                let disminuirStock = infoBorrarStock
                if (producto) {
                    swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto agregado',
                        showConfirmButton: false,
                        timer: 900
                      })
                      1>itemInCarParaStock.amountInStock?itemInCar.quantity=itemInCar.amountInStock:
                    agregado.map(item =>{
                        if (item._id === newCarItem._id) {
                                item.quantity += contador  
                                disminuirStock.map(item2 => {
                                    if(item2._id === newCarItem._id){
                                        item2.amountInStock = item2.amountInStock - contador
                                    }
                                }) 
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
                    disminuirStock.map(item2 => {
                        if(item2._id === newCarItem._id){
                            item2.amountInStock = item2.amountInStock - contador
                        }
                    })
                }
                localStorage.setItem("gestionStock", JSON.stringify(disminuirStock))
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
                    <button className='botonRegistroDetail'  onClick={(e) => addToCar(id, e)}>Agregar al carrito</button>
               
            </div>
        </div>
    )

} 
}
