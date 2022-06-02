import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postRewies} from '../../redux/actions'
import NavBarDetail from '../NavBar/NavBaRDetail'
import { useParams } from "react-router-dom";
import './postReviews.css'

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
    rating: "",
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
        alert(`Gracias por calificar el producto`)
        history.push('/miSesion')
  }
}


  return (
    <div>
      <NavBarDetail />
      <div className="contenedorReviews">
        <div className="contenedorReviewsAzul">
          <div className="cardLoginR">
            <div className="tituloLogin">Valorar producto</div>
                <div className="orderinputReviews">
                    <label className="labelreviews">1</label>
                    <input  className="inputRadios" onClick={handleChange}  type="radio" name= "rating" value ='1'/>
                    <label className="labelreviews">2</label>
                    <input className="inputRadios" onClick={handleChange} type="radio" name= "rating" value ='2'/>
                    <label className="labelreviews">3</label>
                    <input  className="inputRadios" onClick={handleChange}  type="radio" name= "rating" value ='3'/>
                    <label className="labelreviews">4</label>
                    <input  className="inputRadios" onClick={handleChange}  type="radio" name= "rating" value ='4'/>
                    <label className="labelreviews">5</label>
                    <input  className="inputRadios" onClick={handleChange}  type="radio" name= "rating" value ='5'/>
                  {errors.rating && (
                    <p className="errosLoigin">{errors.rating}</p>
                  )}
                </div>
            <form className="allForm" onSubmit={(e) => handleSubmit(e)}>
            <textarea
            placeholder="Comentario"
            className="inputDescripción"
            onChange={(e) => handleChange(e)}
            type="text"
            value={input.comment}
            name="comment"
            rows="10" 
            cols="40"
            >Su comentario aquí</textarea>
              {/* <input
                placeholder="Comentario"
                className="input"
                onChange={(e) => handleChange(e)}
                type="text"
                value={input.comment}
                name="comment"
              /> */}
              {errors.comment && <p className="errosLoigin">{errors.comment}</p>}
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
