import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import { updateUserByAdmin } from "../../redux/actions/index";
import { getUserById } from "../../redux/actions/index";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function BuysUser() {
  //   const dispatch = useDispatch();
  const { id } = useParams();
  let user = JSON.parse(localStorage.getItem("userData"));
  //   const { data } = useSelector((state) => state.userById);

  //   useEffect(() => {
  //     // dispatch(getUserById(id));
  //   }, [dispatch, id]);
  //   console.log("aaaaaa", data);
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
        </div>
      ) : (
        <div>No tiene acceso</div>
      )}
    </div>
  );
}
