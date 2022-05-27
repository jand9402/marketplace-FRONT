import './LoginForm.css'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LogoProv from '../../assets/logo/LogoProv.png'
import { postLogin} from '../../redux/actions'
import NavBarDetail from '../NavBar/NavBaRDetail'

export default function Login () {

function validate(input){
const expresiones = {
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const errors = {}
  if (!expresiones.correo.test(input.email)) {
    errors.email = 'Debe ingresar un correo válido (nombre@proveedor.com)'
  } else if (!expresiones.password.test(input.password)) {
    errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un número, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.'
  }
  return errors
}

const dispatch = useDispatch()
const token = useSelector(state => state.token)
console.log(token)
const history = useHistory()

const [errors, setErrors] = useState({})
const [input, setInput] = useState({
  email: '',
  password: ''
})

function handleChange (e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }))
}

 async function handleSubmit (e) {
  e.preventDefault()
  if (input.email === '' && input.password === '') {
    window.alert('Debe completar todos los campos')
  } else if (errors.email || errors.password) {
    window.alert('Debe completar todos los campos')
  } else {
    e.preventDefault()
    try{
      await dispatch(postLogin(input))
    }catch (error){
     alert("No se encuentra registrado, o tiene un error en el e-mail o contraseña")
     history.push('/')
    }
    if(localStorage.getItem('authorization', token)) {
      history.push('/')
    } 
  }
  console.log(input)
}

  return (
    <div>
      <NavBarDetail/>
      <div className='contenedorLogin'>
        <div className='contImagAndForm'>
          <div className='illutrationLogin'></div>
          <div className='cardLogin'>
            <div className='tituloLogin'>Bienvenidos</div>
            <form className='allForm' onSubmit={(e) => handleSubmit(e)}>
              <input
              placeholder='Correo electrónico'
              className='input'
              onChange={(e) => handleChange(e)}
              type='text'
              value={input.email}
              name='email'
              />
              {errors.email && (
              <p className='errosLoigin'>{errors.email}</p>
              )}
              <div className='orderinputContraseña'>
                <input
                placeholder='Contraseña'
                type='password'
                className='input'
                onChange={(e) => handleChange(e)}
                value={input.password}
                name='password'
                />
                {errors.password && (
                <p className='errosLoigin'>{errors.password}</p>
                )}
              </div>
              <div className='botonesLogin'>
                <button type='submit' className='button'>Ingresar</button>
                <Link  to='/' id='click'>
                  <div className='recuperarContrasena'>¿Olvidaste tu contraseña?</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}