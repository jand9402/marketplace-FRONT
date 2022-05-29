
import './FormCheckOut.css'
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postUser } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { Dispatch } from 'react';
import { orders } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function FormCheckOut() {
 
  const dispatch = useDispatch()
  // let infoUser = JSON.parse(localStorage.userData)
  let infoProducts = JSON.parse(localStorage.itemCar)
  let orderProducts = []
  infoProducts.map(item => {
    let producto = { product: item._id, price: item.price, quantity: item.quantity }
    orderProducts.push(producto)
  })
  let itemsPrice = 0
  orderProducts.map(item => {
    itemsPrice = itemsPrice + (item.price * item.quantity)
  })
  let shippingPrice = itemsPrice<300?20:0
  let totalPrice = itemsPrice + shippingPrice
  let countries = useSelector(state => state.countries)
  let paises = []

  countries.map(pais => paises.push(pais.translations.spa.common))


  paises = paises.sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
  })

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  function validate(input) {
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }
    const errors = {}
    if (!expresiones.nombre.test(input.fullName)) {
      errors.fullName = 'Debe ingresar un nombre válido (no se permiten números ni símbolos)'
    } else if (!input.address) {
      errors.address = 'Debe ingresar una dirección'
    } else if (!input.country) {
      errors.country = 'Debe seleccionar un pais'
    } else if (!input.province) {
      errors.province = 'Debe ingresar un estado o provincia'
    } else if (!input.city) {
      errors.city = 'Debe ingresar una ciudad'
    } else if (!input.street) {
      errors.street = 'Debe ingresar una Calle'
    }
    else if (isNaN(input.postalCode)) {
      errors.postalCode = 'Debe ingresar un codigo postal'
    }
    return errors
  }

  const history = useHistory()

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    fullName: '',
    address: '',
    country: '',
    province: '',
    city: '',
    street: '',
    postalCode: '',
    building: '',
    floor: '',
    apartment: ''
  })


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  
  function handleSubmit(e) {
    e.preventDefault()
    if (input.fullName === '' &&
      input.address === '' &&
      input.country === '' &&
      input.province === '' &&
      input.city === '' &&
      input.street === '' &&
      input.postalCode === '') {
      alert('Debe completar todos los campos marcados con *')
    } else if (errors.fullName ||
      errors.address ||
      errors.country ||
      errors.province ||
      errors.city ||
      errors.street ||
      errors.postalCode) {
      alert('Debe completar todos los campos')
    } else {
      e.preventDefault()
      let deliveryAddress = input
      let test = { deliveryAddress, orderProducts, itemsPrice: itemsPrice, shippingPrice: shippingPrice, totalPrice:totalPrice}
      function orderLocalStorage (){
        if(!localStorage.order){
    localStorage.setItem("order", JSON.stringify(test))
    }else{
      localStorage.setItem("order", JSON.stringify(test))
    }
  }
  orderLocalStorage()
      dispatch(orders(test))
      setInput({
        fullName: '',
        address: '',
        country: '',
        province: '',
        city: '',
        street: '',
        postalCode: '',
        building: '',
        floor: '',
        apartment: ''
      })
    }
    let estoEstaEnLocalStorage = JSON.parse(localStorage.order)
    console.log(estoEstaEnLocalStorage)
  }
  
  return (
    <div className="container">
      <div className="row row-checkou">
        <h1 className=' mt-5'>Información de envío</h1>
        <span className=' mb-5'>Los campos marcados con * son obligatorios</span>
        <div className='col-6 col-checkot-form'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre Completo*</label>
              <input onChange={(e) => handleChange(e)} name='fullName' value={input.fullName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.fullName && (
                <p className='errosRegistro'>{errors.fullName}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Dirección de la entrega*</label>
              <input onChange={(e) => handleChange(e)} name='address' value={input.address} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.address && (
                <p className='errosRegistro'>{errors.address}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Pais*</label>
              <select name='country' onChange={(e) => handleChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <option></option>
                {
                  paises.map(c => (
                    <option key={c} name='country' value={c}>{c}</option>

                  )
                  )
                }
              </select>
              {errors.country && (
                <p className='errosRegistro'>{errors.country}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Estado/Provincia*</label>
              <input onChange={(e) => handleChange(e)} name='province' value={input.province} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.province && (
                <p className='errosRegistro'>{errors.province}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Ciudad*</label>
              <input onChange={(e) => handleChange(e)} name='city' value={input.city} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.city && (
                <p className='errosRegistro'>{errors.city}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Calle*</label>
              <input onChange={(e) => handleChange(e)} name='street' value={input.street} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.street && (
                <p className='errosRegistro'>{errors.street}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Codigo Postal*</label>
              <input onChange={(e) => handleChange(e)} name='postalCode' value={input.postalCode} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {errors.postalCode && (
                <p className='errosRegistro'>{errors.postalCode}</p>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Edificio</label>
              <input onChange={(e) => handleChange(e)} name='building' value={input.building} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Piso</label>
              <input onChange={(e) => handleChange(e)} name='floor' value={input.floor} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Apartamento</label>
              <input onChange={(e) => handleChange(e)} name='apartment' value={input.apartment} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            
            <button type="submit" class="btn btn-primary">Siguiente</button>
          
          </form>
        </div>
        {/* <div className='col-6 col-checkot-img'>
    imagen
</div> */}
      </div>
    </div>
  )
}