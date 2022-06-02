import React from "react";
import './Cards.css'
import CarritoCard from '../../assets/icons/CarritoCards.png'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postWishList } from "../../redux/actions";
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
        let infoBorrarStock = JSON.parse(localStorage.gestionStock)

        let itemInCar = infoFromLocalStorage.find(item => item._id === newCarItem._id)
        let itemInCarParaStock = infoBorrarStock.find(item => item._id === newCarItem._id)

        function addOrCreate(producto) {
            // console.log(itemInCar.quantity)
            // console.log(itemInCarParaStock.amountInStock)
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
                agregado.map(item => {
                    if (item._id === newCarItem._id) {
                        item.quantity += 1
                        disminuirStock.map(item2 => {
                            if(item2._id === newCarItem._id){
                                item2.amountInStock = item2.amountInStock -1
                            }
                        })
                    }
                })
            } else {
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
                disminuirStock.map(item2 => {
                    if(item2._id === newCarItem._id){
                        item2.amountInStock = item2.amountInStock -1
                    }
                })
                
            }
            localStorage.setItem("gestionStock", JSON.stringify(disminuirStock))
            return agregado
        }
        let producto = addOrCreate(itemInCar)

        localStorage.setItem("itemCar", JSON.stringify(producto))
        console.log(JSON.parse(localStorage.itemCar))

    }

    function handleClicked (e) {
        e.preventDefault()
        dispatch(postWishList(id)) 
    }


    return (
        <div className="boxCard">
            <Link to={'/detailVisit/' + id} className="sinlineaCountCards">
                <div className="nameCardProd">{name}</div>
                <img className="imageTamaño" src={image[0]} alt='imagencard'/>
                <div className="priceCardProd" >US${price}</div>
            </Link>
            <button className="boton_carrito_card" onClick={() => addToCar(id)}></button>
            <button className="addWishList" onClick={e => handleClicked(e)}></button>
            <Link to={'/user/wishlist/' + id}>
                <button className="myWishList"></button>
            </Link>
        </div>

        // <div class="card">
        //         <h5 class="card-title">{name}</h5>
        //     <img src={image[0]} class="card-img-top" alt="imagencard"/>
        //         <div class="card-body">
        //             <p class="priceCardProd">US${price}</p>
                    
        //         </div>
        //         <div className="divBotonCar">
        //         <button className="boton_carrito_card" onClick={() => addToCar(id)}></button>
        //         </div>
        // </div>
    )
}