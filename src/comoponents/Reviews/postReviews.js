import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postRewies} from '../../redux/actions'
import NavBarDetail from '../NavBar/NavBaRDetail'
import { useParams } from "react-router-dom";

export default function PostReviews() {
  const token = localStorage.getItem("authorization");
    const {id} = useParams();
  
    function validate(input) {

    const errors = {};
    if (!input.rating) {
      errors.rating = "Debe seleccionar una opción";
    } else if (!input.comment.length) {
      errors.comment =
        "Debe completar este campo";
    }
    return errors;
  }

const dispatch = useDispatch()
const history = useHistory()

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    comment: "",
    rating: 0,
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.comment === "" && input.rating === "") {
      window.alert("Debe completar todos los campos");
    } else if (errors.comment || errors.rating) {
      window.alert("Debe completar todos los campos");
    } else {
      e.preventDefault()
        await dispatch(postRewies(id, input, token))

        alert(`Gracias por valorar el producto`)

  }
}


  return (
    <div>
      <NavBarDetail />
      <div className="contenedorLogin">
        <div className="contImagAndForm">
          <div className="illutrationLogin"></div>
          <div className="cardLogin">
            <div className="tituloLogin">Valorar producto</div>
            <form className="allForm" onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Comentario"
                className="input"
                onChange={(e) => handleChange(e)}
                type="text"
                value={input.comment}
                name="comment"
              />
              {errors.comment && <p className="errosLoigin">{errors.comment}</p>}
              <div className="orderinputContraseña">
                  <label>1</label>
                  <input onClick={handleChange}  className="radios" type="radio" name= "rating" value ='1'/>
                  <label>2</label>
                  <input onClick={handleChange}  className="radios" type="radio" name= "rating" value ='2'/>
                  <label>3</label>
                  <input onClick={handleChange}  className="radios" type="radio" name= "rating" value ='3'/>
                  <label>4</label>
                  <input onClick={handleChange}  className="radios" type="radio" name= "rating" value ='4'/>
                  <label>5</label>
                  <input onClick={handleChange}  className="radios" type="radio" name= "rating" value ='5'/>
                {errors.rating && (
                  <p className="errosLoigin">{errors.rating}</p>
                )}
              </div>
              <div className='botonesLogin'>
                <button type='submit' className='button'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
