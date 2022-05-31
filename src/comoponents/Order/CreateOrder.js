import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postOrder } from "../../redux/actions/index";

export default function CreateOrder() {
  const history = useHistory();
  const dispatch = useDispatch();
  const orderData = JSON.parse(localStorage.getItem("order")) || [];
  const address = orderData.deliveryAddress;
  const total = orderData.totalPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postOrder(orderData));
    history.push("/OrderList");
  };

  return (
    <div>
      <div>
        <h1>New Order</h1>
        <h3>Información de envío</h3>
        <p>Nombre: {address.fullName}</p>
        <p>Dirección: {address.address}</p>
        <p>País: {address.country}</p>
        <p>Ciudad: {address.city}</p>
        <p>Código Postal: {address.postalCode}</p>

        <h3>Costo total</h3>
        <p>Total: ${total}</p>
      </div>

      <button onClick={() => history.push("/")}>Cancelar</button>
      <button onClick={handleSubmit}>Confirmar</button>
    </div>
  );
}
