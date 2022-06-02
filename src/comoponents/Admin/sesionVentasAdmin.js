import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./widgetLg.css";
import { getAllOrders } from "../../redux/actions";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

<<<<<<< HEAD
export default function SesionVentasAdmin () {

let data = JSON.parse(localStorage.getItem("userData"))
    return(
        <div>
            {
                data.isAdmin? (
                    <div>soy mis ventas...</div>
    
                ):(<div>No tiene permitido el acceso</div>)
            }
        </div>
    )
}
=======
// 2.  Poder filtrar las órdenes por su estado (creada, procesando, cancelada, completa) (admin).

export default function SesionVentasAdmin() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allOrders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className="widgetLg">
      <Link to="/admin/">
        <button>Volver</button>
      </Link>
      <h3 className="widgetLgTitle">Ordenes</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Orden</th>
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Total</th>
          <th className="widgetLgTh">Pagado</th>
          <th className="widgetLgTh">Estado de envío</th>
        </tr>

        {data?.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <Link to={`/orderDetail/${order._id}`} className="widgetLgName">
                ID
              </Link>
            </td>
            <td>
              <span className="widgetLgName">{order.user.name}</span>
            </td>

            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.totalPrice}</td>
            <td className="widgetLgStatus">{order.isPaid ? "SI" : "NO"}</td>
            <td className="widgetLgStatus">
              {order.isDelivered ? "Enviado" : "Pendiente"}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
>>>>>>> 83738ef927a9fed1c27af16977578ce3d6e05172
