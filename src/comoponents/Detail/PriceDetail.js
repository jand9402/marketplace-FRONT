import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { getProducts } from "../../redux/actions";
import ButtonsVisit from "./ButtonsVisit";
import ButtonsUser from "./ButtonsUser";
import { Link } from "react-router-dom";

export default function PriceDetail() {
  let { id } = useParams();
  let idProducto = { id };
  let test = idProducto.id;
  const dispatch = useDispatch();

  let allProducts = useSelector((state) => state.products);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  let amountForButton;
  return (
    <div className="boxMacroPrice">
      <div className="boxMacroPrice-flx">
        {allProducts?.map((producto) => {
          if (producto._id === test) {
            amountForButton = producto.amountInStock;
            return (
              <div className="orderNameyotros" key={producto._id}>
                <div className="princeNameProd">{producto.name}</div>
                <div className="princePrince">${producto.price}</div>
                <div className="boxPriceStock">
                  {producto.amountInStock > 0 ? (
                    <>
                      <div className="princeStockName">Stock disponible:</div>
                      <div className="princeStockNumber">
                        {producto.amountInStock}
                      </div>
                    </>
                  ) : (
                    <div className="princeStockName">No hay stock</div>
                  )}
                </div>
              </div>
            );
          }
        })}
        {localStorage.getItem("authorization", token) ? (
          <div className="princeAdvertencia">
            Puedes comprar este producto o agregarlo al carrito y seguir viendo
            otros
          </div>
        ) : (
          <div className="princeAdvertencia">
            Para comprar debe iniciar sesión, si no tiene cuenta puede crearse
            una
          </div>
        )}
        {amountForButton > 0 ? (
          <>
            {localStorage.getItem("authorization", token) ? (
              <ButtonsUser id={idProducto.id} />
            ) : (
              <ButtonsVisit id={idProducto.id} />
            )}
          </>
        ) : (
          <Link to="/">
            <button className="botonVolverDetail botonVolverDetailConPad">
              Volver
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
