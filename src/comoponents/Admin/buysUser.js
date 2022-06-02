import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import { getUserById, updateUserByAdmin } from "../../redux/actions/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function BuysUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let token = JSON.parse(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("userData"));
  const data = useSelector((state) => state.userById);
  const result = data?.data.user;
  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    isDeleted: "",
    isAdmin: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    if (
      input.name === "" &&
      input.email === "" &&
      input.phoneNumber === "" &&
      input.isDeleted === "" &&
      input.isAdmin === ""
    ) {
      alert("Debes completar los campos");
    } else {
      e.preventDefault();

      if (input.name === "") {
        input.name = result.name;
      }
      if (input.email === []) {
        input.email = result.image;
      }
      if (input.phoneNumber === "") {
        input.phoneNumber = result.brand;
      }
      if (input.isDeleted === "") {
        input.isDeleted = result.description;
      }
      if (input.isAdmin === "") {
        input.isAdmin = result.description;
      }
      await dispatch(updateUserByAdmin(id, input, token));
      alert(`Has Modificado ${input.name}, felicitaciones`);
      setInput({
        name: "",
        email: "",
        phoneNumber: "",
        isDeleted: "",
        isAdmin: "",
      });
    }
  };

  //   await dispatch(modifyProduct( id, input, token))

  return (
    <div>
      <NavBarDetailAdmin />
      {user.isAdmin ? (
        <div className="contenedorSesionAdmin">
          <Link to="/admin/users">
            <button>VOLVER</button>
          </Link>

          <div>soy las ordenes del usriario</div>

          <div>
            <div className="allProductForm">
              <form key={id} onSubmit={(e) => handleCreate(e)}>
                <h1 className="titleProduct">Editar Usuario</h1>
                <div className="boxColumnas1y2">
                  <div className="boxColumna1PF">
                    <div className="productDiv">
                      <label className="titlesNNO">Nombre del Usuario:</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="inputsProductForm"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="productDiv">
                      <label className="titlesNNO" htmlFor="">
                        <b>Email:</b>
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="inputsProductForm"
                        value={input.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="productDiv">
                    <label className="titlesNNO">Numero de telefono:</label>
                    <input
                      placeholder="+1"
                      autoComplete="off"
                      type="number"
                      value={input.phoneNumber}
                      name="phoneNumber"
                      className="inputsProductForm"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="productDiv">
                    <label className="titlesNNO">
                      <b>Eliminado:</b>
                    </label>
                    <input
                      autoComplete="off"
                      type="checkbox"
                      checked={input.isDeleted}
                      className="inputsProductForm"
                      value={input.isDeleted}
                      name="isDeleted"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="productDiv">
                  <label className="titlesNNO">
                    <b>Es Administrador:</b>
                  </label>
                  <input
                    autoComplete="off"
                    type="checkbox"
                    checked={input.isAdmin}
                    className="inputsProductForm"
                    value={input.isAdmin}
                    name="isAdmin"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <button type="submit" className="buttonProduct">
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>No tiene acceso</div>
      )}
    </div>
  );
}
