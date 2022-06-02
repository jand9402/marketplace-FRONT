import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrderDetailByUser } from "../../redux/actions/index";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

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
    <div>
      <h1>Lista de tus ordenes</h1>
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
                    <div key={product._id}>
                      <p>Nombre: {product.name}</p>
                      <img
                        src={product.image[0]}
                        height="150px"
                        alt="ProductImg"
                      />
                      <p>Precio: {product.price}</p>
                      <p>Catidad: {product.quantity}</p>
                    </div>
                  ))}
                  <h3>Tus datos</h3>
                  <p>Nombre: {item.deliveryAddress.fullName}</p>
                  <strong>Total: ${item.totalPrice}</strong>
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
                <button>Pagar</button>
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
