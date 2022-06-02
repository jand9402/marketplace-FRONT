import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions";
import PriceDetail from "./PriceDetail";
import DescriptionProduct from "./DescriptionProduct";
import './ProductDetail.css'
import cuadroBlanco from '../../assets/detail/cuadroBlanco.jpg'
import CardsReviews from "../CardReview/cardsReviews";
// import Modal from "../Admin/Modales/Modal";

export default function ProductDetail (){
    let {id} = useParams()
    let idProducto = {id}
    let test = idProducto.id
    const dispatch = useDispatch()
    let allProducts = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect (() => {
  //     return dispatch(deletepreviousdetail())
  //  }, [dispatch])

  return (
    <div className="boxViewportDetail">
      <div className="positionButtonVolverDetai">
        <Link to="/" id="click">
          <button className="botonVolverDetail">VOLVER</button>
        </Link>
      </div>
      <div className="boxImagenPrecio">
        {allProducts?.map((producto) => {
          if (producto._id === test) {
            return (
              <div className="boxImagenProducto">
                <div className="divImagenPrincipal">
                  <img
                    className="imagenDetailProd"
                    src={producto.image[0]}
                    alt="imagenProducto"
                  />
                </div>
                {
                  producto.image ? (
                    <div className="divImagen">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img
                          className="imagenSecundaria"
                          src={producto.image[0]}
                          alt="imagenProducto"
                        />
                      </a>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={producto.image[0]}
                                alt="imagenProducto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <a data-bs-toggle="modal" data-bs-target="#imagenModal2">
                        <img
                          className="imagenSecundaria"
                          src={
                            producto.image[1] ? producto.image[1] : cuadroBlanco
                          }
                          alt="imagenProducto"
                        />
                      </a>
                      <div
                        class="modal fade"
                        id="imagenModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={
                                  producto.image[1]
                                    ? producto.image[1]
                                    : cuadroBlanco
                                }
                                alt="imagenProducto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <a data-bs-toggle="modal" data-bs-target="#imagenModal3">
                        <img
                          className="imagenSecundaria"
                          src={
                            producto.image[2] ? producto.image[2] : cuadroBlanco
                          }
                          alt="imagenProducto"
                        />
                      </a>
                      <div
                        class="modal fade"
                        id="imagenModal3"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={
                                  producto.image[2]
                                    ? producto.image[2]
                                    : cuadroBlanco
                                }
                                alt="imagenProducto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <a href={producto.image[0]}><img className="imagenSecundaria" src={producto.image[0]} alt='imagenProducto'/></a> */}
                      {/* <a href={producto.image[1]}><img className="imagenSecundaria" src={producto.image[1]} alt='imagenProducto'/></a> */}
                      {/* <a href={producto.image[2]}><img className="imagenSecundaria" src={producto.image[2]} alt='imagenProducto'/></a> */}
                    </div>
                  ) : (
                    <p>No existe ninguna imagen</p>
                  )

                  //                  <div className="divImagen">

                  //                                <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                  //   <img className="imagenSecundaria" src={producto.image[0]} alt='imagenProducto'/>
                  // </a>
                  // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  //   <div class="modal-dialog">
                  //     <div class="modal-content">
                  //       <div class="modal-body">
                  //       <img className="imagenModal" src={producto.image[0]} alt='imagenProducto'/>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>

// <a data-bs-toggle="modal" data-bs-target="#imagenModal3">
//   <img className="imagenSecundaria" src="https://i.blogs.es/a24a9c/samsung-galaxy-tab/1366_2000.jpg" alt='imagenProducto'/>
// </a>
// <div class="modal fade" id="imagenModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-body">
//       <img className="imagenModal" src="https://i.blogs.es/a24a9c/samsung-galaxy-tab/1366_2000.jpg" alt='imagenProductoVacio'/>
//       </div>     
//     </div>
//   </div>
// </div>
//                                 </div>  
                
                        
            }  </div>
            )
        }
    })}
    {/* <img src="https://media.pasionmovil.com/2012/10/Consumo-de-Energ%C3%ADa-de-Smartphones-y-Tablets.png" alt="Imagen celulares y tablets" />}    */}
                <PriceDetail/>
            </div>
            <div>
                <DescriptionProduct/>
            </div>
            <div className="boxValoracionesUser">
              <div className="tituloVal">Valoraciones del producto</div>
              <CardsReviews id={test}/>
              {/* {
                allProducts?.map((producto) =>{
                  if (producto._id === test) {
                    return(
                      <div>
                        <div>{producto.reviews.length === 0? 'No tiene valoraciones este producto': producto.reviews.map(e =>{
                          return(
                            <div>
                              <div>Puntuación:</div>
                              <div>{e.rating}</div>
                              <div>Comentario:</div>
                              <div>{e.comment} </div>
                            </div>
                          )
                        })}
                        </div>
                      </div>
                  
                    )
                  }
                })
              } */}
              <div></div>
            </div>
        </div>
    )
}
