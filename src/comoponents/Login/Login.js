import './LoginForm.css'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoProv from '../../assets/logo/LogoProv.png'
import { useState } from 'react'
// import useValidateLogin from '../hooks/useValidateLogin'

export default function Login () {
//   const { handleChange, handleSubmit, errors, input } = useValidateLogin()
function validate(input){
const expresiones = {
    password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const errors = {}
  if (!expresiones.correo.test(input.user)) {
    errors.user = 'Debe ingresar un correo válido (nombre@proveedor.com)'
  } else if (!expresiones.password.test(input.password)) {
    errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
  }
  return errors
}

const [errors, setErrors] = useState({})
const [input, setInput] = useState({
  user: '',
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

function handleSubmit (e) {
  if (input.user === '' && input.password === '') {
    window.alert('Debe completar todos los campos')
  } else if (errors.user || errors.password) {
    window.alert('Debe completar todos los campos')
  } else {
    e.preventDefault()
    window.alert('Inicio exitoso')
  }
}


  return (
    <div class='contenedorLogin'>
      <div class='logoEnLoginPage'>
        <Link to='/' id='click'>
          <img src={LogoProv} class='imgEnLoginPage' />
        </Link>
      </div>

      <div class='cardLogin'>
        <h1 class='tituloLogin'>Iniciar sesión</h1>
        <form class='allForm' onSubmit={(e) => handleSubmit(e)}>

          <div>
            <div class='encabezadosInputs'>Correo electrónico</div>
            <input
              class='input'
              onChange={(e) => handleChange(e)}
              type='text'
              value={input.user}
              name='user'
            />
            {errors.user && (
              <p class='errosLoigin'>{errors.user}</p>
            )}
          </div>
          <div class='inputContraseña'>
            <div class='encabezadosInputs'>Contraseña</div>
            <input
              type='password'
              class='input'
              onChange={(e) => handleChange(e)}
              value={input.password}
              name='password'
            />
            {errors.password && (
              <p class='errosLoigin'>{errors.password}</p>
            )}
          </div>
          <div class='botonesLogin'>
            <button class='button'>Ingresar</button>
            <Link  to='/' id='click'>
            <div class='recuperarContrasena'>¿Olvidaste tu contraseña?</div>
            </Link>
            <div class='noEstasRegistrado'>
              ¿No estas registrado?
            </div>
            <Link class='linksDeLanding' to='/register'>
              <button class='button'>Registrarse</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}