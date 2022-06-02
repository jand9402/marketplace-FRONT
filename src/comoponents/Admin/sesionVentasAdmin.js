import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./widgetLg.css";
import { getAllOrders } from "../../redux/actions";
import { Link } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";

// 1.  Poder ver una lista de todas las órdenes, para poder ver y revisar las órdenes. (admin)
// 2.  Poder filtrar las órdenes por su estado (creada, procesando, cancelada, completa) (admin).

export default function SesionVentasAdmin() {
  //   const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allOrders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Orden</th>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Total</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {data?.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <Link to={order._id} className="widgetLgName">
                ID
              </Link>
            </td>
            <td>
              <span className="widgetLgName">{order.user.name}</span>
            </td>

            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.totalPrice}</td>
            <td className="widgetLgStatus">
              <Button type={order.isPaid} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
