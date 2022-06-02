import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getOrderDetailByUser } from "../../redux/actions/index";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./Order.css";

export default function CreateOrder() {
  const KEY = process.env.REACT_APP_STRIPE_KEY;
  const tokenUser = localStorage.getItem("authorization");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderDetail);
  useEffect(() => {
    dispatch(getOrderDetailByUser());
  }, [dispatch]);

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          `https://pf-commerce.herokuapp.com/api/checkout/${data.userOrder[0]._id}`,
          {
            tokenId: stripeToken.id,
            amount: data?.userOrder[0].totalPrice,
          },
          {
            headers: {
              Authorization: `${tokenUser}`,
            },
          }
        );
        history.push("/success", {
          stripeData: res.data,
          products: data?.userOrder[0],
        });
      } catch {}
    };
    stripeToken && makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripeToken, history, data?.userOrder[0].totalPrice]);

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <h1 className="font">Lista de tus ordenes</h1>
        <Link to="/PostOrder">
          <button>Regresar</button>
        </Link>
      </div>
      {!data ? (
        <p>Cargando...</p>
      ) : (
        <>
          {data ? (
            <>
              {data.userOrder?.map((item) => (
                <div key={item._id}>
                  <h3>Tus productos</h3>
                  {item.orderProducts.map((product) => (
                    <div className="row row_lista_ordenes" key={product._id}>
                      <div className="col">
                        <p>Nombre: {product.name}</p>
                        <img
                          src={product.image[0]}
                          height="150px"
                          alt="ProductImg"
                        />
                      </div>
                      <div className="col">
                        <p>Precio: {product.price}</p>
                        <p>Catidad: {product.quantity}</p>
                      </div>
                    </div>
                  ))}

                  <h3 className="font">Tus datos</h3>
                  <p className="font">
                    Nombre: {item.deliveryAddress.fullName}
                  </p>
                  <strong className="font">Total: ${item.totalPrice}</strong>
                </div>
              ))}

              <StripeCheckout
                name="StoreCel"
                image="https://cdn-icons-png.flaticon.com/512/2097/2097276.png"
                description={`Your total is $${data?.userOrder[0].totalPrice}`}
                amount={data?.userOrder[0].totalPrice * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="font">Pagar</button>
              </StripeCheckout>
            </>
          ) : (
            <p>No encontramos una orden</p>
          )}
        </>
      )}
    </div>
  );
}
