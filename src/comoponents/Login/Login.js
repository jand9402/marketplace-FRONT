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
    <div className='contenedorLogin'>
      <div className='logoEnLoginPage'>
        <Link to='/' id='click'>
          <img src={LogoProv} className='imgEnLoginPage' />
        </Link>
      </div>

      <div className='cardLogin'>
        <h1 className='tituloLogin'>Iniciar sesión</h1>
        <form className='allForm' onSubmit={(e) => handleSubmit(e)}>

          <div>
            <div className='encabezadosInputs'>Correo electrónico</div>
            <input
              className='input'
              onChange={(e) => handleChange(e)}
              type='text'
              value={input.user}
              name='user'
            />
            {errors.user && (
              <p className='errosLoigin'>{errors.user}</p>
            )}
          </div>
          <div className='inputContraseña'>
            <div className='encabezadosInputs'>Contraseña</div>
            <input
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
            <button className='button'>Ingresar</button>
            <Link  to='/' id='click'>
            <div className='recuperarContrasena'>¿Olvidaste tu contraseña?</div>
            </Link>
            <div className='noEstasRegistrado'>
              ¿No estas registrado?
            </div>
            <Link className='linksDeLanding' to='/register'>
              <button className='button'>Registrarse</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}