import React from 'react'
import './RegisterForm.css'
import LogoProv from '../../assets/logo/LogoProv.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function validate (input) {
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    const errors = {}
    if (!expresiones.nombre.test(input.nombre)) {
      errors.nombre = 'Debe ingresar un nombre válido (no se permiten números ni símbolos)'
    } else if (!expresiones.correo.test(input.user)) {
      errors.user = 'Debe ingresar un correo válido (nombre@proveedor.com)'
    } else if (!expresiones.password.test(input.password)) {
      errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
    } else if (input.password !== input.password2) {
      errors.password2 = 'Las contraseñas deben ser iguales'
    }
    return errors
  }

export default function RegisterForm () { 

    
        const [errors, setErrors] = useState({})
        const [input, setInput] = useState({
          nombre: '',
          user: '',
          password: '',
          password2: ''
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
          if (input.nombre === '' && input.user === '' && input.password === '' && input.password2 === '') {
            window.alert('Debe completar todos los campos')
          } else if (errors.nombre || errors.user || errors.password || errors.password2) {
            window.alert('Debe completar todos los campos')
          } else {
            e.preventDefault()
            window.alert('Registro exitoso')
          }
        }


  return (
    <div className='contenedorRegistro'>
      <div className='logoEnLoginPageR'>
        <Link to='/' id='click'>
          <img src={LogoProv} className='logoRegister' />
        </Link>
      </div>
      <div className='cardRegister'>
        <div className='contenedorForm'>
          <form className='allForm' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='crearCuentaTitulo'>Crear cuenta</h1>
            <div >
              <div className='encabezadosRegistro'>Tu nombre</div>
              <input
                className='input'
                onChange={(e) => handleChange(e)}
                type='text'
                value={input.nombre}
                name='nombre'
              />
              {errors.nombre && (
                <p className='errosRegistro'>{errors.nombre}</p>
              )}
            </div>
            <div>
              <div className='encabezadosRegistro'>Correo electrónico</div>
              <input
                className='input'
                onChange={(e) => handleChange(e)}
                type='text'
                value={input.user}
                name='user'
              />
              {errors.user && (
                <p className='errosRegistro'>{errors.user}</p>
              )}

            </div>
            <div>
              <div className='encabezadosRegistro'>Contraseña</div>
              <input
                className='input'
                onChange={(e) => handleChange(e)}
                type='password'
                value={input.password}
                name='password'
              />
              {errors.password && (
                <p className='errosRegistro'>{errors.password}</p>
              )}

            </div>
            <div>
              <div className='encabezadosRegistro'>Vuelve a escribir la contraseña</div>
              <input
                className='input'
                onChange={(e) => handleChange(e)}
                type='password'
                value={input.password2}
                name='password2'
              />
              {errors.password2 && (
                <p className='errosRegistro'>{errors.password2}</p>
              )}

            </div>
            <div className='botonRegistro'>
              <button className='buttonRegistro'>Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}