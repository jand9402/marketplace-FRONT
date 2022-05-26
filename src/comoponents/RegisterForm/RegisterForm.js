import React from 'react'
import './RegisterForm.css'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { useDispatch} from "react-redux";
import { postUser } from '../../redux/actions';
import NavBarDetail from '../NavBar/NavBaRDetail';

export default function RegisterForm () { 

  function validate (input) {
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
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
      errors.password = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un número, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.'
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
      alert('Debe completar todos los campos')
    } else if (errors.name || errors.email  || errors.phoneNumber || errors.password || errors.password2) {
      alert('Debe completar todos los campos')
    } else {
      e.preventDefault()
      dispatch(postUser(input))
      alert('Registro exitoso')
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
    <div>
      <NavBarDetail/>
      <div className='contenedorRegistro'>
        <div className='contImagAndFormR'>
          <div className='illutrationRegiter'></div>
          <div className='cardRegister'>
            <div className='contenedorForm'>
              <form className='allForm' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='crearCuentaTitulo'>Crear cuenta</h1>
                <div>
                  <input
                  placeholder='Nombre de usuario'
                  className='input'
                  onChange={(e) => handleChange(e)}
                  type='text'
                  value={input.name}
                  name='name'
                  />
                  {errors.name && (
                  <p className='errosRegistro'>{errors.name}</p>
                  )}
                  </div>
                  <div>
                    <input
                    placeholder='Correo electrónico'
                    className='input'
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.email}
                    name='email'
                    />
                    {errors.email && (
                    <p className='errosRegistro'>{errors.email}</p>
                    )}
                    </div>
                    <div>
                      <input
                      placeholder='Número de celular'
                      className='input'
                      onChange={(e) => handleChange(e)}
                      type='text'
                      value={input.phoneNumber}
                      name='phoneNumber'
                      />
                      {errors.phoneNumber && (
                      <p className='errosRegistro'>{errors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <input
                      placeholder='Contraseña'
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
                        <input
                        placeholder='Repita la contraseña'
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
      </div>
    </div>
  )
}