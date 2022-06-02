import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderByID } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import "./orderDetail.css";
import axios from "axios";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
// import { setOrderShipped } from "../../redux/actions/index";

export default function OrderDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderById);

  function setOrderShipped() {
    return async function () {
      try {
        const response = await axios.put(
          `https://pf-commerce.herokuapp.com/api/orders/send/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setOrderShipped(id));
  };

  useEffect(() => {
    dispatch(getOrderByID(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavBarDetailAdmin/>
      <div className="container">
        <div className="d-flex">
          <h1 className="tus_compras font">Tus Compras</h1>
          <Link to="/admin/ventas">
            <button className="bottonVolODA">Volver</button>
          </Link>
        </div>
        {!data ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {data ? (
              <>
                <p className="font font-Style-Order-Detail">
                  Comprador: {data?.deliveryAddress.fullName}
                </p>
                <div className="container container_orders">
                  {
                    <div key={data._id}>
                      <div className="row row_otra">
                        {data.isPaid ? (
                          <p
                            className="col pagado_order font"
                            style={{ color: "green" }}
                          >
                            Pagado: SI
                          </p>
                        ) : (
                          <p
                            className="col Spagado_order font"
                            style={{ color: "red" }}
                          >
                            Pagado: NO
                          </p>
                        )}
                        {data.isDelivered ? (
                          <p className="col font" style={{ color: "green" }}>
                            Enviado: SI
                          </p>
                        ) : (
                          <p className="col font" style={{ color: "red" }}>
                            Enviado: NO
                          </p>
                        )}
                        <p className="col">
                          Cantidad de productos: {data.orderProducts.length}
                        </p>
                        <p className="col">Total: ${data.totalPrice}</p>
                      </div>
                      <div className="row row_productos_order">
                        <h3 className="font">Productos</h3>
                        {data.orderProducts.map((product) => (
                          <div
                            className="col col_orders_user"
                            key={product._id}
                          >
                            <p className="font">Nombre: {product.name}</p>
                            <Link to={`/detailVisit/${product.product}`}>
                              <img
                                src={product.image[0]}
                                height="150px"
                                alt="ProductImg"
                              />
                            </Link>
                          </div>
                        ))}
                        {
                          // PARA PAGAR LAS ORDENES DE LOS ADMINS
                          /* {data.isPaid ? (
                          <p className="col pagado_order font">Pagado</p>
                        ) : (
                          <button className="my-super-cool-button">
                            Pagar
                          </button>
                        )} */
                        }
                      </div>

                      {data.isDelivered ? (
                        <p className="col font" style={{ color: "green" }}>
                          Ya fue enviado
                        </p>
                      ) : (
                        <button onClick={handleSubmit}>Enviar Producto</button>
                      )}
                    </div>
                  }
                </div>
              </>
            ) : (
              <p>No encontramos una orden</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
