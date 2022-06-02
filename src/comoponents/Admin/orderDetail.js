import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderByID } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import "./orderDetail.css";

export default function OrderDetail() {
  let { id } = useParams();
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderById);

  useEffect(() => {
    dispatch(getOrderByID(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="container">
        <div className="d-flex">
          <h1 className="tus_compras font">Tus Compras</h1>
          <Link to="/admin/ventas">
            <button>Volver</button>
          </Link>
        </div>
        {!data ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {data ? (
              <>
                <p className="font">Usuario: {user.name}</p>
                <div className="container container_orders">
                  {
                    <div key={data._id}>
                      <div className="row row_otra">
                        {data.isPaid ? (
                          <p className="col pagado_order font">Pagado: SI</p>
                        ) : (
                          <p className="col Spagado_order font">Pagado: NO</p>
                        )}
                        {data.isDelivered ? (
                          <p className="col font">Enviado: SI</p>
                        ) : (
                          <p className="col font">Enviado: NO</p>
                        )}
                      </div>
                      <div className="row row_productos_order">
                        <h3 className="font">Productos</h3>
                        {data.orderProducts.map((product) => (
                          <div
                            className="col col_orders_user"
                            key={product._id}
                          >
                            <p className="font">Nombre: {product.name}</p>
                            <img
                              src={product.image[0]}
                              height="150px"
                              alt="ProductImg"
                            />
                          </div>
                        ))}
                        {data.isPaid ? (
                          <p className="col pagado_order font">Pagado</p>
                        ) : (
                          <button className="my-super-cool-button">
                            Pagar
                          </button>
                        )}
                      </div>
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
