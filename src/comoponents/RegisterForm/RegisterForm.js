import React from 'react'
import './RegisterForm.css'
import LogoProv from '../../assets/logo/LogoProv.png'
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { postUser } from '../../redux/actions';



export default function RegisterForm () { 

  function validate (input) {
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
      celular: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/,
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    const errors = {}
    if (!expresiones.nombre.test(input.name)) {
      errors.name = 'Debe ingresar un nombre válido (no se permiten números ni símbolos)'
    } else if (!expresiones.correo.test(input.email)) {
      errors.email = 'Debe ingresar un correo válido (nombre@proveedor.com)'
    } else if (!expresiones.celular.test(input.phoneNumber)) {
      errors.phoneNumber = 'Debe ingresar un numero valido.'
    } else if (!expresiones.password.test(input.password)) {
      errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
    } else if (input.password !== input.password2) {
      errors.password2 = 'Las contraseñas deben ser iguales'
    }
    return errors
  }
  const dispatch = useDispatch()
    const history = useHistory()
        const [errors, setErrors] = useState({})
        const [input, setInput] = useState({
          name: '',
          email: '',
          phoneNumber: '',
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
          e.preventDefault()
          if (input.name === '' && input.email === '' && input.phoneNumber === ''  && input.password === '' && input.password2 === '') {
            window.alert('Debe completar todos los campos')
          } else if (errors.name || errors.email  || errors.phoneNumber || errors.password || errors.password2) {
            window.alert('Debe completar todos los campos')
          } else {
            e.preventDefault()
            dispatch(postUser(input))
            window.alert('Registro exitoso')
            setInput({
              name: '',
              email: '',
              phoneNumber: '',
              password: '',
              password2: ''
            })
            history.push('/login')
            
            
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
                value={input.name}
                name='name'
              />

              {errors.name && (
                <p class='errosRegistro'>{errors.name}</p>

              )}
            </div>
            <div>
              <div className='encabezadosRegistro'>Correo electrónico</div>
              <input
                className='input'
                onChange={(e) => handleChange(e)}
                type='text'
                value={input.email}
                name='email'
              />

              {errors.email && (
                <p class='errosRegistro'>{errors.email}</p>

              )}

            </div>
            <div>

            <div class='encabezadosRegistro'>Numero Celular</div>
              <input
                class='input'
                onChange={(e) => handleChange(e)}
                type='text'
                value={input.phoneNumber}
                name='phoneNumber'
              />
              {errors.phoneNumber && (
                <p class='errosRegistro'>{errors.phoneNumber}</p>
              )}
            </div>
            <div>
              <div class='encabezadosRegistro'>Contraseña</div>

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