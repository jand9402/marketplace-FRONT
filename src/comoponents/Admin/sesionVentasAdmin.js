import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./widgetLg.css";
import { getAllOrders } from "../../redux/actions";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";

export default function SesionVentasAdmin() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allOrders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  //
  //   const result = data?.map((value) => value.isDelivered);
  //   console.log(
  //     result.sort(function (x, y) {
  //       return x === y ? 0 : x ? -1 : 1;
  //     })
  //   );
  return (
    <div>
      <NavBarDetailAdmin/>

    <div className="widgetLg">
      {/* <Link to="/admin/">
        <button>Volver</button>
      </Link> */}
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
            <td className="widgetLgStatus">
              {order.isPaid ? (
                <p style={{ color: "#177117" }}>SI</p>
              ) : (
                <p style={{ color: "#b31313" }}>NO</p>
              )}
            </td>
            <td className="widgetLgStatus">
              {order.isDelivered ? (
                <p style={{ color: "#177117" }}>Enviado</p>
              ) : (
                <p style={{ color: "#b31313" }}>Pendiente </p>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
    </div>
  );
}
