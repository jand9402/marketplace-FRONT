import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarDetailAdmin from "../NavBar/navBarDetaiAdmin";
import { getUserById, updateUserByAdmin } from "../../redux/actions/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './adminAll.css'

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
        <div className="container">
          <Link to="/admin/users">
            <button>VOLVER</button>
          </Link>


         
        
            
              <form key={id} onSubmit={(e) => handleCreate(e)}>
              <div className="row row_edit_user ">
                <h1 >Editar Usuario</h1>
                
                
                  
                   <div className="col col_edit_user">
                      <h2 >Nombre del Usuario:</h2>
                     
                      <input
                      className="input"
                        autoComplete="off"
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                      />
                   <br/> 
                    
                      
                        <h2>Email:</h2>
                      
                      <input
                      className="input"
                        autoComplete="off"
                        type="text"
                        value={input.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                      />
                   
                   
                   <br/> 
                    <h2>Numero de telefono:</h2>
                   
                    <input
                    className="input"
                      placeholder="+1"
                      autoComplete="off"
                      type="number"
                      value={input.phoneNumber}
                      name="phoneNumber"
                      onChange={(e) => handleChange(e)}
                    />
                  </div> 
                  <div className="col col_edit_user">
                    
                      <h2>Eliminado:</h2>
                      
                    <input
                    className="input"
                      autoComplete="off"
                      type="checkbox"
                      checked={input.isDeleted}
                      value={input.isDeleted}
                      name="isDeleted"
                      onChange={(e) => handleChange(e)}
                    />
                  
               
                  <br/> 
                  
                    <h2>Es Administrador:</h2>
                  
                  <input
                  className="input"
                    autoComplete="off"
                    type="checkbox"
                    checked={input.isAdmin}
                    value={input.isAdmin}
                    name="isAdmin"
                    onChange={(e) => handleChange(e)}
                  />
               </div>
               
                <button type="submit" >
                  OK
                </button>
                </div>
              </form>
            </div>
          
      
      ) : (
        <div>No tiene acceso</div>
      )}
    </div>
  );
}
