import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetailByUser } from "../../redux/actions/index";
import NavBaRSesionUsers from "../NavBar/navBarSesionUsers";
import { Link } from "react-router-dom";
import './miSesion.css'

export default function MiSesion() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderDetail);
  console.log({data})
  useEffect(() => {
    dispatch(getOrderDetailByUser());
  }, [dispatch]);

  function handlePay(e){
    if(!localStorage.orderId || localStorage.orderId !== JSON.stringify(e.target.value))
    localStorage.setItem("orderId", JSON.stringify(e.target.value))
  }
let total = 0
let total2 = 0
  return (
    <div>
        <NavBaRSesionUsers/>
      <div className="container">
<div className="d-flex">
        <h1 className="tus_compras font">Tus Compras</h1>
    <Link className="sinLineaWish " to='/user/wishlist'>
      <button className="botonesWishlist"></button>
      <div className="titel_Wishlist">Wishlist</div>
    </Link>
    </div>
        {!data ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {data ? (
              <>
              <div></div>
                <p className="font">Usuario: {user.name}</p>
                <div  className="container container_orders">
               
                {data.userOrder?.map((item) => (
                  <div key={item._id}>
                    <div className="row row_otra">
                    {item.isPaid ? <p className="col pagado_order font">Pagado: SI</p> : <p className="col Spagado_order font">Pagado: NO</p> }
                   
                <div>Valor total de esta orden: US$ {total= total + item.totalPrice}</div>
                <p className="blanco">{total= 0}</p>
                    {item.isDelivered ? <p className="col font">Enviado: SI</p> : <p  className="col font">Enviado: NO</p>}
                    {item.isPaid ? <p className="col pagado_order font">Pago realizacdo con exito</p> : <Link to="/pay"><button value={item._id} onClick={e => handlePay(e)} className="col pagado_order font">Pagar ahora</button></Link> }
                    </div>
                    <div className="row row_productos_order">
                    <h3 className="font">Productos</h3>
                    {item.orderProducts.map((product) => (
                      <div className="col col_orders_user" key={product._id}>
                        <p className="font">Nombre: {product.name}</p>
                        <p>Valor: US${product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Total: US${product.quantity * product.price}</p>
                        <div>
                        <img
                          src={product.image[0]}
                          height="150px"
                          alt="ProductImg"
                        />
                        <br/>
                        {item.isPaid?<Link to={`/addReviews/${product.product}`}> <button>Calificar</button></Link>:<br/>}
                        </div>
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


