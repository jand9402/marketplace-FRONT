import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetailByUser } from "../../redux/actions/index";
import { Link } from "react-router-dom";

export default function CreateOrder() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderDetail);
  useEffect(() => {
    dispatch(getOrderDetailByUser());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="d-flex">
          <h1 className="tus_compras font">Tus Compras</h1>
          <Link to="/">
            <button>Volver al Home</button>
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
                  {data.userOrder?.map((item) => (
                    <div key={item._id}>
                      <div className="row row_otra">
                        {item.isPaid ? (
                          <p className="col pagado_order font">Pagado: SI</p>
                        ) : (
                          <p className="col Spagado_order font">Pagado: NO</p>
                        )}
                        {item.isDelivered ? (
                          <p className="col font">Enviado: SI</p>
                        ) : (
                          <p className="col font">Enviado: NO</p>
                        )}
                      </div>
                      <div className="row row_productos_order">
                        <h3 className="font">Productos</h3>
                        {item.orderProducts.map((product) => (
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
                      </div>
                    </div>
                  ))}
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
