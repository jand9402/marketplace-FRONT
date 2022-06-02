import React, { useEffect, useState } from "react";
import { getDetail } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletepreviousdetail } from "../../../redux/actions";
import NavBarDetailAdmin from "../../NavBar/navBarDetaiAdmin";
import Modal from "../Modales/Modal";
import "./detailProductAdmin.css";
// import CreateProduct from "../../ProductForm/createProduct";
import EditProduct from "../../ProductForm/editProduct";

import cuadroBlanco from "../../../assets/detail/cuadroBlanco.jpg";
import { Link } from "react-router-dom";

// import { deleteProduct } from "../../../redux/actions";

export default function DetailProductAdmin() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  let data = JSON.parse(localStorage.getItem("userData"));
  console.log(detail);
  const [stateModalPut, setStateModalPut] = useState(false);

  function handleClickModal(e) {
    setStateModalPut(!stateModalPut);
  }
  // function handleDeletProduct (id) {
  //     console.log(id)
  //     dispatch(deleteProduct(id))
  // }

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    return dispatch(deletepreviousdetail());
  }, [dispatch]);

  let categorySep =
    Array.isArray(detail.categories) && detail.categories.join(", ");
  // console.log(categorySep)

  return (
    <div>
      <NavBarDetailAdmin />
      {data.isAdmin ? (
        <div key={id} className="contenedorDetailAdmin">
          <div className="positionButtonVolverDetai">
            <Link to="/admin/products" id="click">
              <button className="botonVolverDetail">VOLVER</button>
            </Link>
          </div>
          <div className="boxDetaiQuePuedoModificar">
            <img
              className="imageDetailAdmin"
              src={
                detail.image
                  ? detail.image[0]
                  : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Ftecnologia%2Fbanco-nacion-relanza-venta-celulares-modelos-descuento-18-cuotas-interes_0_QmAUsjhAU.html&psig=AOvVaw1sQbEUoycHdCfckA6AJk7V&ust=1653956093926000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiOtd34hfgCFQAAAAAdAAAAABAH"
              }
              alt="imageDetailAdmin"
            />
            <div className="boxNBMCDCO">
              <div className="detailProductName">Detalle del producto</div>
              {/* <Link to={'/admin/products/edit/' + id}>
                          <button className="editarProdButton">Editar producto</button>
                        </Link> */}
              <button onClick={handleClickModal} className="editarProdButton">
                Editar producto
              </button>
              {/* <button
                         onClick={() =>handleDeletProduct (detail._id)}
                        className="buttonDetailProductAdmin">
                        Eliminar</button> */}
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">NOMBRE:</div>
                <div className="descriptionDetailAdmin">{detail.name}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">MARCA:</div>
                <div className="descriptionDetailAdmin">{detail.brand}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">MODELO:</div>
                <div className="descriptionDetailAdmin">{detail.model}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">ESTADO:</div>
                <div className="descriptionDetailAdmin">{detail.condition}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">CATEGORÍA/S:</div>
                <div className="descriptionDetailAdmin">{categorySep}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">DISPLAY:</div>
                <div className="descriptionDetailAdmin">
                  {detail.screenSize
                    ? detail.screenSize.$numberDecimal
                    : "No se encuentra display"}
                  "{" "}
                </div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">MEMORIA INTERNA:</div>
                <div className="descriptionDetailAdmin">
                  {detail.internalMemory} GB{" "}
                </div>
              </div>
              <div className="cajasDetailAdminD">
                <div className="namesAllDetailAdmin">DESCRIPCIÓN:</div>
                <div className="descriptionDetailAdminDes">
                  {detail.description}
                </div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">PRECIO:</div>
                <div className="descriptionDetailAdmin">US$ {detail.price}</div>
              </div>
              <div className="cajasDetailAdmin">
                <div className="namesAllDetailAdmin">CANTIDAD:</div>
                <div className="descriptionDetailAdmin">
                  {detail.amountInStock} uds.
                </div>
              </div>
              <div>
                {
                  detail.image ? (
                    <div>
                      <div className="namesAllDetailAdmin">
                        Imágenes del producto:
                      </div>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <img
                          className="imagenSecundaria"
                          src={detail.image[0]}
                          alt="imagenProducto"
                        />
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={detail.image[0]}
                                alt="imagenProducto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#imagenModal2"
                      >
                        <img
                          className="imagenSecundaria"
                          src={detail.image[1] ? detail.image[1] : cuadroBlanco}
                          alt="imagenProducto"
                        />
                      </button>
                      <div
                        class="modal fade"
                        id="imagenModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={
                                  detail.image[1]
                                    ? detail.image[1]
                                    : cuadroBlanco
                                }
                                alt="imagenProducto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#imagenModal3"
                      >
                        <img
                          className="imagenSecundaria"
                          src={detail.image[2] ? detail.image[2] : cuadroBlanco}
                          alt="imagenProducto"
                        />
                      </button>
                      <div
                        class="modal fade"
                        id="imagenModal3"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                className="imagenModal"
                                src={
                                  detail.image[2]
                                    ? detail.image[2]
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
                    <p>No existe la imagen</p>
                  )

                  //                                 <div className="divImagen">

                  //                                 <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  //    {/* <img className="imagenSecundaria" src={detail.image[0]} alt='imagenProducto'/> */}
                  //    <p>hola</p>
                  //  </button>
                  //  <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  //    <div class="modal-dialog">
                  //      <div class="modal-content">
                  //        <div class="modal-body">
                  //        {/* <img className="imagenModal" src={detail.image[0]} alt='imagenProducto'/> */}
                  //        <p>joder</p>
                  //        </div>
                  //      </div>
                  //    </div>
                  //  </div>

                  //  <button data-bs-toggle="modal" data-bs-target="#imagenModal2">
                  //    {/* <img className="imagenSecundaria" src={detail.image[1]} alt='imagenProducto'/> */}
                  //    <p>prueba</p>
                  //  </button>
                  //  <div class="modal fade" id="imagenModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  //    <div class="modal-dialog">
                  //      <div class="modal-content">
                  //        <div class="modal-body">
                  //        {/* <img className="imagenModal" src={detail.image[1]} alt='imagenProducto'/> */}
                  //        <p>otra prueba</p>
                  //        </div>
                  //      </div>
                  //    </div>
                  //  </div>

                  //  <button data-bs-toggle="modal" data-bs-target="#imagenModal3">
                  //    <img className="imagenSecundaria" src="https://i.blogs.es/a24a9c/samsung-galaxy-tab/1366_2000.jpg" alt='imagenProducto'/>
                  //  </button>
                  //  <div class="modal fade" id="imagenModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  //    <div class="modal-dialog">
                  //      <div class="modal-content">
                  //        <div class="modal-body">
                  //        <img className="imagenModal" src="https://i.blogs.es/a24a9c/samsung-galaxy-tab/1366_2000.jpg" alt='imagenProductoVacio'/>
                  //        </div>
                  //      </div>
                  //    </div>
                  //  </div>
                  //                                  {/* <a href={producto.image[0]}><img className="imagenSecundaria" src={producto.image[0]} alt='imagenProducto'/></a> */}
                  //                                  {/* <a href={producto.image[1]}><img className="imagenSecundaria" src={producto.image[1]} alt='imagenProducto'/></a> */}
                  //                                  {/* <a href={producto.image[2]}><img className="imagenSecundaria" src={producto.image[2]} alt='imagenProducto'/></a> */}
                  //                                  </div>
                }
              </div>
            </div>
          </div>
          {/* <div className="boxDetaiQueNoPuedoModificar">
                    <div className="detailProductName">Valoración del producto</div>
                </div> */}
        </div>
      ) : (
        <div>No tienen permitido el acceso</div>
      )}
      <Modal state={stateModalPut} changeState={setStateModalPut}>
        {/* ACÁ VA EL EDITAR PRODUCTO -EL PUT- */}
        <EditProduct />
      </Modal>
    </div>
  );
}
