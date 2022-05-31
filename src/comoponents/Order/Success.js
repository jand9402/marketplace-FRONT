import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetailByUser } from "../../redux/actions/index";

export default function CreateOrder() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderDetail);
  useEffect(() => {
    dispatch(getOrderDetailByUser());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Tus Compras</h1>
        {!data ? (
          <p>Cargando...</p>
        ) : (
          <>
            {data ? (
              <>
                <p>Usuario: {user.name}</p>
                {data.userOrder?.map((item) => (
                  <div key={item._id}>
                    {item.isPaid ? <p>Pagado: SI</p> : <p>Pagado: NO</p>}
                    {item.isDelivered ? <p>Enviado: SI</p> : <p>Enviado: NO</p>}

                    <h3>Productos</h3>
                    {item.orderProducts.map((product) => (
                      <div key={product._id}>
                        <p>Nombre: {product.name}</p>
                        <img
                          src={product.image[0]}
                          height="150px"
                          alt="ProductImg"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <p>No encontramos una orden</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
